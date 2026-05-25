import { useState } from 'react';
import {
  ArrowRight,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  KeyRound,
  LogOut,
  Mail,
  Moon,
  Sun,
  User,
  IdCard,
  AlertTriangle,
  ExternalLink,
  School,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const student = {
  firstName: 'Marcos',
  fullName: 'Marcos Velásquez Vela',
  career: 'Ingeniería Informática',
  faculty: 'Facultad de Ciencias y Tecnología',
  period: 'Gestión I/2026',
  sisCode: '202012345',
  email: 'marcos.velasquez@est.umss.edu',
  ci: '12345678 CB',
  avatarUrl: '/umss.png',
};

const secondaryActions = [
  {
    title: 'Kardex',
    description: 'Historial académico, notas y materias cursadas.',
    href: '#kardex',
    icon: BookOpenCheck,
  },
  {
    title: 'Horario de clases',
    description: 'Distribución semanal de tus materias inscritas.',
    href: '#horario',
    icon: CalendarClock,
  },
  {
    title: 'Estado de inscripción',
    description: 'Verifica tus materias y grupos confirmados.',
    href: '#estado',
    icon: ClipboardCheck,
  },
  {
    title: 'Código de inscripción',
    description: 'Genera el código requerido para inscribirte.',
    href: '#codigo',
    icon: KeyRound,
  },
];

const externalLinks = [
  { label: 'Aula virtual UMSS', href: 'https://aulavirtual.umss.edu.bo' },
  { label: 'Biblioteca FCyT', href: 'https://bibliotecas.umss.edu.bo' },
  { label: 'Calendario académico', href: '#calendario' },
];

function getInitialDark(): boolean {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function StudentDashboard() {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('websiss-theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  const initials = getInitials(student.fullName);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar única */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/65">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
          <a href="/dashboard" className="flex items-center gap-3 shrink-0">
            <img
              src="/umss.png"
              alt="Universidad Mayor de San Simón"
              className="h-9 w-9 object-contain"
              width={36}
              height={36}
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-lg font-medium tracking-tight">
                webSISS
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Portal del estudiante
              </span>
            </div>
          </a>

          <div className="ml-auto flex items-center gap-2">
            <Button
              type="button"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </Button>

            <Separator orientation="vertical" className="h-6 hidden sm:block" />

            {/* Menú de perfil — único punto donde viven datos personales y enlaces externos */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-11 gap-2.5 px-2 pr-2.5 hover:bg-muted/60"
                >
                  <Avatar className="size-8 border border-border/60 bg-card">
                    <AvatarImage
                      src={student.avatarUrl}
                      alt={student.fullName}
                      className="object-contain p-0.5"
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:flex flex-col items-start leading-tight">
                    <span className="text-sm font-medium text-foreground">
                      {student.firstName}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Estudiante
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-4 text-muted-foreground hidden sm:block"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-80 p-0"
              >
                {/* Cabecera del menú: foto + nombre completo */}
                <div className="flex items-center gap-3 p-4">
                  <Avatar className="size-12 border border-border/60 bg-card">
                    <AvatarImage
                      src={student.avatarUrl}
                      alt={student.fullName}
                      className="object-contain p-1"
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                      {student.fullName}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {student.career}
                    </p>
                  </div>
                </div>

                <DropdownMenuSeparator className="my-0" />

                {/* Datos personales (no enlaces, son información) */}
                <DropdownMenuLabel className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground pt-3">
                  Datos personales
                </DropdownMenuLabel>
                <div className="px-2 pb-2 space-y-0.5 text-sm">
                  <ProfileRow icon={IdCard} label="SIS" value={student.sisCode} mono />
                  <ProfileRow icon={Mail} label="Correo" value={student.email} />
                  <ProfileRow icon={User} label="CI" value={student.ci} mono />
                  <ProfileRow icon={School} label="Facultad" value={student.faculty} />
                </div>

                <DropdownMenuSeparator className="my-0" />

                {/* Enlaces académicos externos */}
                <DropdownMenuLabel className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground pt-3">
                  Enlaces académicos
                </DropdownMenuLabel>
                {externalLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between gap-2"
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith('http') && (
                        <ExternalLink
                          aria-hidden="true"
                          className="size-3.5 text-muted-foreground"
                        />
                      )}
                    </a>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  asChild
                  variant="destructive"
                  className="cursor-pointer"
                >
                  <a href="/">
                    <LogOut aria-hidden="true" />
                    <span>Cerrar sesión</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-8 py-10 lg:py-14 space-y-10">
        {/* Header — saludo y contexto académico */}
        <section className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
            Hola, <span className="font-medium">{student.firstName}</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            <span className="text-foreground font-medium">{student.career}</span>
            <span className="mx-2 text-border">·</span>
            {student.period}
          </p>
        </section>

        {/* Acción principal — CTA destacado (incluye urgencia y plazo) */}
        <Card className="relative overflow-hidden border-primary/20 bg-linear-to-br from-primary to-primary/85 text-primary-foreground shadow-[0_24px_60px_-30px_var(--color-primary)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative grid gap-6 p-6 sm:p-8 lg:p-10 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-2.5 py-1 text-[11px] font-medium text-warning-foreground ring-1 ring-warning/30">
                <AlertTriangle aria-hidden="true" className="size-3" />
                Abierto hasta el 31 de mayo
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                Inscribirse a materias
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
                Elige tus materias y grupos. Genera primero tu código de
                inscripción para poder continuar.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group h-12 px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm"
            >
              <a href="#inscripcion">
                <span>Comenzar inscripción</span>
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </Button>
          </div>
        </Card>

        {/* Acciones secundarias */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-xl font-medium tracking-tight">
              Tu actividad académica
            </h2>
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
              {secondaryActions.length} accesos
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.href}
                  className="group relative transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring has-[a:focus-visible]:border-primary/40 has-[a:focus-visible]:shadow-md"
                >
                  <CardHeader className="gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base font-medium">
                        <a
                          href={action.href}
                          className="after:absolute after:inset-0 after:content-[''] after:rounded-[inherit] focus:outline-none focus-visible:outline-none"
                        >
                          {action.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {action.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 group-has-[a:focus-visible]:opacity-100">
                      <span>Abrir</span>
                      <ArrowRight aria-hidden="true" className="size-3.5" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-6">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            Universidad Mayor de San Simón
            <span className="mx-2 text-border">·</span>
            DTIC
          </p>
          <p>webSISS · Portal académico oficial</p>
        </div>
      </footer>
    </div>
  );
}

interface ProfileRowProps {
  icon: typeof IdCard;
  label: string;
  value: string;
  mono?: boolean;
}

function ProfileRow({ icon: Icon, label, value, mono }: ProfileRowProps) {
  return (
    <div className="flex items-start gap-2.5 rounded-sm px-2 py-1.5">
      <Icon
        aria-hidden="true"
        className="size-3.5 shrink-0 text-muted-foreground mt-0.5"
      />
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground w-14 shrink-0 mt-0.5">
        {label}
      </span>
      <span
        className={`text-xs text-foreground wrap-break-word min-w-0 flex-1 ${mono ? 'font-mono' : ''}`}
      >
        {value}
      </span>
    </div>
  );
}
