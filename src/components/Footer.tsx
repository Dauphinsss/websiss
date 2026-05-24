export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/umss.png" alt="UMSS" className="h-8 w-8 object-contain opacity-90" width={32} height={32} />
          <div className="leading-tight">
            <div className="font-serif text-base text-foreground">webSISS</div>
            <div className="text-[11px] text-muted-foreground">
              Universidad Mayor de San Simón · Cochabamba, Bolivia
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Soporte técnico</a>
          <a href="#" className="hover:text-foreground transition-colors">Mesa de ayuda</a>
          <a href="https://www.umss.edu.bo" className="hover:text-foreground transition-colors">www.umss.edu.bo</a>
        </div>

        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          © {year} · DTIC UMSS
        </div>
      </div>
    </footer>
  );
}
