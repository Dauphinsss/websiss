import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Estudiantes', href: '#estudiantes' },
  { label: 'Docentes', href: '#docentes' },
  { label: 'Postulantes', href: '#postulantes' },
];

function getInitialDark(): boolean {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

export function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('websiss-theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6 lg:px-10">
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/umss.png"
            alt="Universidad Mayor de San Simón"
            className="h-9 w-9 object-contain"
            width={36}
            height={36}
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-medium tracking-tight text-foreground">webSISS</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">UMSS · Cochabamba</span>
          </div>
        </a>

        <nav aria-label="Secciones principales" className="ml-auto hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:ml-0 flex items-center gap-2">
          <Button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            variant="outline"
            size="icon"
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>

          <Button asChild className="hidden sm:inline-flex">
            <a href="#login">Iniciar sesión</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
