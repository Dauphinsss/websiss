import { Button } from '@/components/ui/button';

interface Paso {
  n: string;
  titulo: string;
  desc: string;
  href: string;
}

const pasos: Paso[] = [
  {
    n: '01',
    titulo: 'Crea tu cuenta de postulante',
    desc: 'Registra tus datos personales con cédula vigente. Solo toma unos minutos.',
    href: '#registro',
  },
  {
    n: '02',
    titulo: 'Elige facultad y carrera',
    desc: 'Revisa la oferta académica y los requisitos por unidad facultativa de la UMSS.',
    href: '#carreras',
  },
  {
    n: '03',
    titulo: 'Rinde el examen de ingreso',
    desc: 'Modalidad presencial en Campus Central. Consulta fechas y aulas asignadas.',
    href: '#examen',
  },
  {
    n: '04',
    titulo: 'Recibe tu código SIS',
    desc: 'Una vez admitido, accede a webSISS con las credenciales que te enviaremos.',
    href: '#admision',
  },
];

export function Postulantes() {
  return (
    <section id="postulantes" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Lado editorial */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                Para postulantes
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.05]">
              ¿Es tu primera vez<br />en la <span className="italic">UMSS</span>?
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Conoce el proceso de admisión paso a paso. Si ya completaste alguno, puedes continuar
              donde lo dejaste.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#registro">
                  Empezar postulación
                  <span>→</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#carreras">Ver carreras</a>
              </Button>
            </div>
          </div>

          {/* Pasos */}
          <ol className="lg:col-span-7 space-y-px bg-border/60 border border-border/60 rounded-md overflow-hidden">
            {pasos.map((paso) => (
              <li key={paso.n} id={paso.href.slice(1)} className="bg-background scroll-mt-24">
                <a
                  href={paso.href}
                  className="group flex items-start gap-6 p-6 lg:p-7 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-serif text-2xl tabular-nums text-muted-foreground group-hover:text-primary transition-colors shrink-0 w-10">
                    {paso.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground tracking-tight">{paso.titulo}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{paso.desc}</p>
                  </div>
                  <span className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
