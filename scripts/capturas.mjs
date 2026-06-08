import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:4321';
const OUT = 'documento/images/prototipo';
mkdirSync(OUT, { recursive: true });

// localStorage que habilita el flujo completo (matrícula pagada + códigos validados)
const enabledStorage = {
  'websiss-tuition-paid': 'true',
  'websiss-code-validated': 'true',
};

// Selección con choque: IHC (Mar 6:45-8:15) y "Teoría de Autómatas" (Lun/Mié 7:30-9:00 no choca),
// pero Simulación (Mié 6:45-8:15) vs Arquitectura (Mié 18:45) no chocan.
// Forzamos choque real: IHC (Mar 6:45-8:15 · Jue 18:45-20:15) + Arquitectura de Software
// (Lun 18:45-20:15 · Mié 18:45-20:15) NO chocan. Usamos IHC + un duplicado de bloque:
// IHC (Jue 18:45-20:15) vs Seguridad de Sistemas (Jue 20:15-21:45) no choca.
// Par que SÍ choca: IHC (Mar 6:45-8:15) y Simulación (Mié 6:45-8:15) -> distinto día, no.
// Elegimos: "Evaluación y Auditoría" (Mar 11:15-12:45) y "Web Semánticas" (Jue 14:15) no.
// Conflicto garantizado: Arquitectura (Lun 18:45-20:15) y "Procesos Ágiles"? (Mar/Vie 20:15) no.
// Usamos dos materias con mismo bloque exacto: Simulación (Lun 14:15-15:45) y
// "Inteligencia Artificial" (Lun 15:00-16:30) -> Lun 14:15-15:45 vs 15:00-16:30 SOLAPAN.
const conflictStorage = {
  ...enabledStorage,
  'websiss-selected-enrollments': JSON.stringify([
    { subjectId: '2010019', mode: 'Normal', group: '1' }, // Simulación Lun 14:15-15:45
    { subjectId: '2010115', mode: 'Normal', group: '2' }, // Inteligencia Artificial Lun 15:00-16:30
  ]),
};

const emptyStorage = {
  ...enabledStorage,
  'websiss-selected-enrollments': JSON.stringify([]),
};

const browser = await chromium.launch();

async function shot(name, path, { storage, width = 1280, height = 900, full = true, action } = {}) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  if (storage) {
    await page.addInitScript((data) => {
      for (const [k, v] of Object.entries(data)) window.localStorage.setItem(k, v);
    }, storage);
  }
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  if (action) await action(page);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  await context.close();
  console.log(`✓ ${name}.png`);
}

// Panel con badge de matrícula de alto contraste
await shot('02-panel', '/panel', { storage: enabledStorage });

// Kardex con leyenda de siglas
await shot('08-kardex', '/panel/kardex', { storage: enabledStorage });

// Inscripción con alerta de choque de horarios
await shot('10-inscripcion-conflicto', '/panel/inscripcion', { storage: conflictStorage });

// Estado de inscripción vacío (el estudiante retiró todas sus materias)
await shot('11-estado-vacio', '/panel/estado', { storage: emptyStorage });

// Diálogo de confirmación al retirar materia
await shot('12-retiro-confirmacion', '/panel/inscripcion', {
  storage: enabledStorage,
  full: false,
  action: async (page) => {
    // abre el menú de retiro de la primera materia seleccionada
    const removeBtn = page.getByRole('button', { name: /retirar|quitar/i }).first();
    if (await removeBtn.count()) {
      await removeBtn.click();
      await page.waitForTimeout(400);
    }
  },
});

await browser.close();
console.log('Listo.');
