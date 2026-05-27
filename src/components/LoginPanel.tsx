import { useState } from 'react';
import { UserRound, KeyRound, CalendarDays, IdCard, ArrowRight } from 'lucide-react';
import { es } from 'date-fns/locale';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type RoleId = 'estudiante' | 'docente' | 'postulante' | 'autoridad' | 'usrsis';

interface RoleConfig {
  id: RoleId;
  label: string;
  description: string;
  identifierLabel: string;
  identifierPlaceholder: string;
  identifierMono?: boolean;
  identifierIcon: typeof UserRound;
  needsBirthDate?: boolean;
  helperLink?: { label: string; href: string };
  /** Tailwind utility tied to a `--color-role-*` CSS variable in global.css. */
  bgClass: string;
  textClass: string;
  ringClass: string;
}

const roles: Record<RoleId, RoleConfig> = {
  estudiante: {
    id: 'estudiante',
    label: 'Estudiante',
    description: 'Acceso a inscripciones, calificaciones y horarios.',
    identifierLabel: 'Código SIS',
    identifierPlaceholder: '202012345',
    identifierMono: true,
    identifierIcon: UserRound,
    needsBirthDate: true,
    helperLink: { label: '¿Olvidaste tu contraseña?', href: '#recuperar-est' },
    bgClass: 'bg-role-estudiante',
    textClass: 'text-role-estudiante',
    ringClass: 'ring-role-estudiante',
  },
  docente: {
    id: 'docente',
    label: 'Docente',
    description: 'Gestión de notas, listas y cursos virtuales.',
    identifierLabel: 'Cuenta',
    identifierPlaceholder: 'cuenta institucional',
    identifierIcon: UserRound,
    helperLink: { label: 'Soporte para docentes', href: '#soporte-doc' },
    bgClass: 'bg-role-docente',
    textClass: 'text-role-docente',
    ringClass: 'ring-role-docente',
  },
  postulante: {
    id: 'postulante',
    label: 'Postulante',
    description: 'Para aspirantes y nuevos postulantes a la UMSS.',
    identifierLabel: 'Doc. de identidad',
    identifierPlaceholder: 'Nº de cédula',
    identifierIcon: IdCard,
    needsBirthDate: true,
    helperLink: { label: 'Soy postulante nuevo · Registrarme', href: '#registro' },
    bgClass: 'bg-role-postulante',
    textClass: 'text-role-postulante',
    ringClass: 'ring-role-postulante',
  },
  autoridad: {
    id: 'autoridad',
    label: 'Autoridad',
    description: 'Servicio para autoridades de la universidad.',
    identifierLabel: 'Autoridad',
    identifierPlaceholder: 'usuario asignado',
    identifierIcon: UserRound,
    bgClass: 'bg-role-autoridad',
    textClass: 'text-role-autoridad',
    ringClass: 'ring-role-autoridad',
  },
  usrsis: {
    id: 'usrsis',
    label: 'USR-SIS',
    description: 'Acceso para personal técnico y administradores SIS.',
    identifierLabel: 'Usuario',
    identifierPlaceholder: 'usuario SIS',
    identifierIcon: UserRound,
    bgClass: 'bg-role-usrsis',
    textClass: 'text-role-usrsis',
    ringClass: 'ring-role-usrsis',
  },
};

const primaryRoles: RoleId[] = ['estudiante', 'docente', 'postulante'];
const secondaryRoles: RoleId[] = ['autoridad', 'usrsis'];

/** Static map so Tailwind JIT picks up these full class names. */
const activeTabShadow: Record<RoleId, string> = {
  estudiante: 'shadow-[inset_0_-2px_0_0_var(--color-role-estudiante)]',
  docente: 'shadow-[inset_0_-2px_0_0_var(--color-role-docente)]',
  postulante: 'shadow-[inset_0_-2px_0_0_var(--color-role-postulante)]',
  autoridad: 'shadow-[inset_0_-2px_0_0_var(--color-role-autoridad)]',
  usrsis: 'shadow-[inset_0_-2px_0_0_var(--color-role-usrsis)]',
};

function formatBirthDate(date: Date) {
  return new Intl.DateTimeFormat('es-BO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function toInputDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function toBirthDateText(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function parseBirthDateText(value: string, minDate: Date, maxDate: Date) {
  const match = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!match) return undefined;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const parsed = new Date(year, month - 1, day);

  const isRealDate =
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day;

  if (!isRealDate || parsed < minDate || parsed > maxDate) return undefined;

  return parsed;
}

export function LoginPanel() {
  const [role, setRole] = useState<RoleId>('estudiante');
  const [birthDate, setBirthDate] = useState<Date>();
  const [birthDateText, setBirthDateText] = useState('');
  const [birthDateOpen, setBirthDateOpen] = useState(false);
  const config = roles[role];
  const IdentifierIcon = config.identifierIcon;
  const currentYear = new Date().getFullYear();
  const minBirthDate = new Date(currentYear - 80, 0, 1);
  const maxBirthDate = new Date(currentYear - 14, 11, 31);
  const defaultBirthMonth = birthDate ?? new Date(currentYear - 18, 0, 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'estudiante') {
      window.location.href = '/panel';
    }
  };

  return (
    <div id="login" className="relative">
      {/* Etiqueta vertical "estilo periódico" */}
      <div className="hidden lg:flex absolute -left-6 top-0 bottom-0 items-center pointer-events-none">
        <span
          className="rotate-180 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground"
          style={{ writingMode: 'vertical-rl' }}
        >
          acceso oficial · UMSS
        </span>
      </div>

      <div className="relative bg-card border border-border/80 rounded-lg overflow-hidden shadow-[0_1px_0_0_var(--color-border),0_24px_60px_-30px_var(--color-primary)]">
        {/* Barra superior institucional que cambia con el rol */}
        <div className="flex h-1.5">
          <div className={`flex-1 transition-colors ${config.bgClass}`} />
          <div className="w-1/4 bg-destructive" />
        </div>

        <div className="p-7 lg:p-8">
          {/* Selector de rol — pestañas principales */}
          <div role="tablist" aria-label="Tipo de usuario" className="flex gap-1 mb-6 -mx-1">
            {primaryRoles.map((r) => {
              const active = role === r;
              return (
                <button
                  key={r}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setRole(r)}
                  className={`flex-1 px-3 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-all ${
                    active
                      ? `text-foreground bg-muted/50 ${activeTabShadow[r]}`
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  {roles[r].label}
                </button>
              );
            })}
          </div>

          <div className="flex items-baseline justify-between mb-1">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Iniciar sesión
            </h2>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${config.textClass}`}>
              {config.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{config.description}</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Identificador */}
            <div className="space-y-1.5">
              <label
                htmlFor="identifier"
                className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {config.identifierLabel}
              </label>
              <div className="relative">
                <IdentifierIcon
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
                />
                <Input
                  key={`id-${role}`}
                  id="identifier"
                  name="identifier"
                  type="text"
                  inputMode={config.identifierMono ? 'numeric' : 'text'}
                  placeholder={config.identifierPlaceholder}
                  autoComplete="username"
                  className={`h-11 pl-10 ${config.identifierMono ? 'font-mono tracking-wide' : ''}`}
                />
              </div>
            </div>

            {/* Contraseña (todos menos postulante) */}
            {config.id !== 'postulante' && (
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="pwd"
                    className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Contraseña
                  </label>
                  {config.helperLink && config.id === 'estudiante' && (
                    <a
                      href={config.helperLink.href}
                      className={`text-[11px] hover:underline underline-offset-4 ${config.textClass}`}
                    >
                      ¿Olvidaste?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <KeyRound
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
                  />
                  <Input
                    id="pwd"
                    name="pwd"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            )}

            {/* Fecha de nacimiento (estudiante + postulante) */}
            {config.needsBirthDate && (
              <div className="space-y-1.5">
                <label
                  id="birth-date-label"
                  className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays aria-hidden="true" className="size-3.5" />
                    Fecha de nacimiento
                  </span>
                </label>
                <Popover open={birthDateOpen} onOpenChange={setBirthDateOpen}>
                  <div className="relative">
                    <CalendarDays
                      aria-hidden="true"
                      className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
                    />
                    <Input
                      id="birth-date"
                      name="birthDateText"
                      type="text"
                      inputMode="numeric"
                      placeholder="dd/mm/aaaa"
                      value={birthDateText}
                      aria-labelledby="birth-date-label"
                      aria-describedby="birth-date-format"
                      autoComplete="bday"
                      className="h-11 pl-10 pr-12"
                      onChange={(event) => {
                        const nextValue = event.target.value
                          .replace(/[^\d/]/g, '')
                          .slice(0, 10);
                        const parsedDate = parseBirthDateText(
                          nextValue,
                          minBirthDate,
                          maxBirthDate,
                        );

                        setBirthDateText(nextValue);
                        setBirthDate(parsedDate);
                      }}
                      onBlur={() => {
                        if (birthDate) setBirthDateText(toBirthDateText(birthDate));
                      }}
                    />
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Seleccionar fecha"
                        className="absolute right-1 top-1/2 size-9 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <CalendarDays aria-hidden="true" className="size-4" />
                      </Button>
                    </PopoverTrigger>
                  </div>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={birthDate}
                      defaultMonth={defaultBirthMonth}
                      startMonth={minBirthDate}
                      endMonth={maxBirthDate}
                      disabled={[
                        { before: minBirthDate },
                        { after: maxBirthDate },
                      ]}
                      captionLayout="dropdown"
                      reverseYears
                      locale={es}
                      onSelect={(date) => {
                        setBirthDate(date);
                        setBirthDateText(date ? toBirthDateText(date) : '');
                        if (date) setBirthDateOpen(false);
                      }}
                      className="[--cell-size:--spacing(9)]"
                    />
                  </PopoverContent>
                </Popover>
                <p id="birth-date-format" className="text-[11px] text-muted-foreground">
                  Formato: dd/mm/aaaa
                </p>
                <input
                  type="hidden"
                  name="birthDate"
                  value={birthDate ? toInputDateValue(birthDate) : ''}
                />
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className={`w-full group ${config.bgClass} text-white hover:opacity-90`}
            >
              <span>Ingresar al sistema</span>
              <ArrowRight
                aria-hidden="true"
                data-icon="inline-end"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>

            {config.helperLink && config.id !== 'estudiante' && (
              <a
                href={config.helperLink.href}
                className={`block text-center text-xs hover:underline underline-offset-4 ${config.textClass}`}
              >
                {config.helperLink.label}
              </a>
            )}
          </form>

          {/* Roles secundarios */}
          <div className="mt-7 pt-5 border-t border-border/60">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Otros accesos
              </span>
              <div className="flex gap-2">
                {secondaryRoles.map((r) => {
                  const active = role === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-sm border transition-colors ${
                        active
                          ? 'text-foreground border-foreground/60 bg-muted/50'
                          : 'text-muted-foreground border-border hover:text-foreground hover:border-foreground/40'
                      }`}
                    >
                      {roles[r].label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
