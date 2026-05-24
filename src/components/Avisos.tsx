type Tono = 'urgente' | 'info' | 'normal';

interface Aviso {
  categoria: string;
  titulo: string;
  bajada: string;
  tono: Tono;
}

const avisos: Aviso[] = [
  {
    categoria: 'Inscripciones',
    titulo: 'Inscripciones del próximo semestre',
    bajada:
      'Consulta las fechas oficiales publicadas por tu facultad para inscripción y reinscripción de materias.',
    tono: 'urgente',
  },
  {
    categoria: 'Postulantes',
    titulo: 'Examen de ingreso facultativo',
    bajada:
      'Información sobre modalidades de admisión, requisitos y procedimientos para nuevos postulantes a la UMSS.',
    tono: 'info',
  },
  {
    categoria: 'Académico',
    titulo: 'Comunicados del Honorable Consejo Universitario',
    bajada:
      'Resoluciones, calendarios académicos y disposiciones oficiales emitidas por las autoridades de la UMSS.',
    tono: 'normal',
  },
];

const tonoStyles: Record<Tono, string> = {
  urgente: 'text-destructive border-destructive/40 bg-destructive/[0.04]',
  info: 'text-primary border-primary/40 bg-primary/[0.04]',
  normal: 'text-muted-foreground border-border bg-transparent',
};

export function Avisos() {
  return (
    <section className="border-b border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-destructive" />
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-destructive">
                Comunicados
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal tracking-tight text-foreground max-w-2xl">
              Avisos institucionales
            </h2>
          </div>
          <a
            href="#todos-avisos"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Ver todos los avisos
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-md overflow-hidden">
          {avisos.map((aviso) => (
            <article
              key={aviso.titulo}
              className="group relative bg-background p-7 lg:p-8 flex flex-col gap-5 hover:bg-muted/30 transition-colors"
            >
              <header>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] rounded-sm border ${tonoStyles[aviso.tono]}`}
                >
                  {aviso.categoria}
                </span>
              </header>

              <h3 className="font-serif text-lg lg:text-xl font-medium text-foreground leading-snug tracking-tight">
                {aviso.titulo}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{aviso.bajada}</p>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground group-hover:text-primary transition-colors w-fit"
              >
                Leer comunicado
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
