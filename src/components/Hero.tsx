import { LoginPanel } from './LoginPanel';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Fondo: retícula sutil + degradado institucional */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-primary)/8%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-destructive)/5%,transparent_55%)]" />
        <svg className="absolute inset-0 h-full w-full text-foreground/[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth={1} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna editorial */}
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/umss.png"
                alt="Universidad Mayor de San Simón"
                className="h-12 w-12 object-contain"
                width={48}
                height={48}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                  Portal académico oficial
                </span>
                <span className="text-xs text-muted-foreground">
                  Universidad Mayor de San Simón · Cochabamba
                </span>
              </div>
            </div>

            <h1 className="font-serif font-light tracking-tight text-foreground text-[clamp(3rem,9vw,7rem)] leading-[0.92]">
              web<span className="font-medium text-primary">SISS</span>
            </h1>

            <p className="mt-8 max-w-xl text-base lg:text-lg leading-relaxed text-muted-foreground">
              Tu portal único para inscripciones, calificaciones, horarios y gestión académica
              en la <span className="text-foreground font-medium">UMSS</span>.
            </p>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
                Sistema operativo
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-foreground font-medium">DTIC</span>
                <span>· soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Columna login */}
          <div className="lg:col-span-5 lg:pl-6">
            <LoginPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
