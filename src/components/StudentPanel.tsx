import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  KeyRound,
  CreditCard,
  ReceiptText,
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
  Download,
  Printer,
  Search,
  CheckCircle2,
  XCircle,
  Clock3,
  ShieldCheck,
  CalendarX,
  Building2,
  Users,
  Plus,
  Trash2,
  LockKeyhole,
  ListChecks,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const student = {
  firstName: 'Marcos',
  fullName: 'Marcos Velásquez Vela',
  career: 'Ingeniería Informática',
  faculty: 'Facultad de Ciencias y Tecnología',
  period: 'Gestión I/2026',
  sisCode: '202012345',
  email: 'marcos.velasquez@est.umss.edu',
  codeDeliveryEmail: 'marcosvelasquezvela123@gmail.com',
  ci: '12345678 CB',
  avatarUrl: '/umss.png',
};

const activePlan = {
  code: '134111',
  name: 'Licenciatura en Ingeniería Informática',
};

const tuitionStatus = {
  amount: 'Bs 27',
  method: 'Banco Unión',
  receipt: 'MTR-2026-001537',
  paidAt: '24/05/2026 09:18',
};

const kardexSummary = {
  taken: 50,
  approved: 39,
  failed: 4,
  abandoned: 7,
  generalAverage: 72.53,
  approvedAverage: 76.21,
};

const kardexRows = [
  {
    nro: 1,
    year: 2023,
    term: 1,
    code: '1803001',
    subject: 'Ingles I',
    level: 'A',
    group: '4',
    final: 81,
    result: 'APR',
  },
  {
    nro: 2,
    year: 2023,
    term: 1,
    code: '2006063',
    subject: 'Fisica General',
    level: 'A',
    group: 'B2',
    final: 33,
    result: 'REP',
  },
  {
    nro: 3,
    year: 2023,
    term: 1,
    code: '2008019',
    subject: 'Algebra I',
    level: 'A',
    group: '10',
    final: 60,
    result: 'APR',
  },
  {
    nro: 4,
    year: 2023,
    term: 1,
    code: '2008054',
    subject: 'Calculo I',
    level: 'A',
    group: '10',
    final: 51,
    result: 'APR',
  },
  {
    nro: 5,
    year: 2023,
    term: 1,
    code: '2010010',
    subject: 'Introduccion a la Programacion',
    level: 'A',
    group: '2',
    final: 56,
    result: 'APR',
  },
  {
    nro: 29,
    year: 2024,
    term: 2,
    code: '2010053',
    subject: 'Taller de Base de Datos',
    level: 'F',
    group: '3',
    final: 26,
    result: 'REP',
  },
  {
    nro: 30,
    year: 2024,
    term: 2,
    code: '2010203',
    subject: 'Programacion Web',
    level: 'F',
    group: '1',
    final: 100,
    result: 'APR',
  },
  {
    nro: 40,
    year: 2025,
    term: 2,
    code: '2010100',
    subject: 'Arquitectura de Software',
    level: 'G',
    group: '1',
    final: 100,
    result: 'APR',
  },
  {
    nro: 43,
    year: 2025,
    term: 2,
    code: '2010209',
    subject: 'Seguridad de Sistemas',
    level: 'I',
    group: '1',
    final: 94,
    result: 'APR',
  },
  {
    nro: 44,
    year: 2025,
    term: 3,
    code: '2010040',
    subject: 'Teoria de Automatas y Leng. Formales',
    level: 'E',
    group: '1',
    final: null,
    partials: { t1: 70, t2: 32 },
    result: 'CUR',
  },
  {
    nro: 45,
    year: 2026,
    term: 1,
    code: '2010019',
    subject: 'Simulacion de Sistemas',
    level: 'G',
    group: '1',
    final: null,
    result: 'ABA',
  },
  {
    nro: 47,
    year: 2026,
    term: 1,
    code: '2010102',
    subject: 'Evaluacion y Auditoria de Sistemas',
    level: 'H',
    group: '1',
    final: 88,
    result: 'APR',
  },
  {
    nro: 48,
    year: 2026,
    term: 1,
    code: '2010214',
    subject: 'Taller de Grado I',
    level: 'H',
    group: '7',
    final: 88,
    result: 'APR',
  },
  {
    nro: 49,
    year: 2026,
    term: 1,
    code: '2010066',
    subject: 'Procesos Agiles',
    level: 'I',
    group: '1',
    final: null,
    partials: { t1: 73, t2: 99 },
    result: 'CUR',
  },
  {
    nro: 50,
    year: 2026,
    term: 1,
    code: '2010079',
    subject: 'Web Semanticas',
    level: 'I',
    group: '1',
    final: null,
    partials: { t1: 88 },
    result: 'CUR',
  },
];

const enrollmentCodeStatus = {
  term: '1/2026',
  career: activePlan.name,
  admission: 'Habilitado para inscribirse',
  deliveryWindow: 'No disponible',
  blocker: 'Fuera de la fecha general habilitada para inscripción',
  nextStep: 'Solicitar habilitación de envío',
};

const scheduleContext = {
  term: '1/2026 - 2026',
  groupType: 'Clases teóricas inscritas',
};

const scheduleSessions = [
  {
    day: 'Lunes',
    start: '9:45',
    end: '11:15',
    subject: 'Taller de Grado I',
    code: '2010214',
    group: '7',
    teacher: 'Romero Rodriguez Patricia',
    building: 'Sector Física',
    room: '617C',
  },
  {
    day: 'Lunes',
    start: '11:15',
    end: '12:45',
    subject: 'Web Semánticas',
    code: '2010079',
    group: '1',
    teacher: 'Rodriguez Bilbao Erika Patricia',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '691C',
  },
  {
    day: 'Lunes',
    start: '14:15',
    end: '15:45',
    subject: 'Simulación de Sistemas',
    code: '2010019',
    group: '1',
    teacher: 'Villarroel Tapia Henry Frank',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '692G',
  },
  {
    day: 'Martes',
    start: '6:45',
    end: '8:15',
    subject: 'Interacción Humano Computador',
    code: '2010204',
    group: '1',
    teacher: 'Flores Villarroel Corina',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '690D',
  },
  {
    day: 'Martes',
    start: '8:15',
    end: '10:30',
    subject: 'Taller de Grado I',
    code: '2010214',
    group: '7',
    teacher: 'Romero Rodriguez Patricia',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '690C',
  },
  {
    day: 'Martes',
    start: '11:15',
    end: '12:45',
    subject: 'Evaluación y Auditoría de Sistemas',
    code: '2010102',
    group: '1',
    teacher: 'Romero Rodriguez Patricia',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '691F',
  },
  {
    day: 'Martes',
    start: '20:15',
    end: '21:45',
    subject: 'Procesos Ágiles',
    code: '2010066',
    group: '1',
    teacher: 'Cussi Nicolas Grover Humberto',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '692E',
  },
  {
    day: 'Miércoles',
    start: '6:45',
    end: '8:15',
    subject: 'Simulación de Sistemas',
    code: '2010019',
    group: '1',
    teacher: 'Villarroel Tapia Henry Frank',
    building: 'Edif. Administración Central',
    room: '651',
  },
  {
    day: 'Miércoles',
    start: '8:15',
    end: '10:30',
    subject: 'Evaluación y Auditoría de Sistemas',
    code: '2010102',
    group: '1',
    teacher: 'Romero Rodriguez Patricia',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '690B',
  },
  {
    day: 'Jueves',
    start: '8:15',
    end: '9:45',
    subject: 'Evaluación y Auditoría de Sistemas',
    code: '2010102',
    group: '1',
    teacher: 'Romero Rodriguez Patricia',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '690C',
  },
  {
    day: 'Jueves',
    start: '14:15',
    end: '15:45',
    subject: 'Web Semánticas',
    code: '2010079',
    group: '1',
    teacher: 'Rodriguez Bilbao Erika Patricia',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '692D',
  },
  {
    day: 'Jueves',
    start: '18:45',
    end: '20:15',
    subject: 'Interacción Humano Computador',
    code: '2010204',
    group: '1',
    teacher: 'Flores Villarroel Corina',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '690E',
  },
  {
    day: 'Viernes',
    start: '20:15',
    end: '21:45',
    subject: 'Procesos Ágiles',
    code: '2010066',
    group: '1',
    teacher: 'Cussi Nicolas Grover Humberto',
    building: 'Nuevo Edif. Académico 2 (FCyT)',
    room: '691B',
  },
];

const enrollmentLimit = 6;
type EnrollmentMode = 'Normal' | 'Mesa';
type SelectedEnrollment = { subjectId: string; mode: EnrollmentMode; group: string };

interface EnrollmentSubjectOption {
  id: string;
  code: string;
  name: string;
  level: string;
  availableModes: EnrollmentMode[];
  group: string;
  availableGroups: string[];
  fullGroups?: string[];
  teacher: string;
  schedule: string;
  room: string;
  status: 'available' | 'exam';
}

const enrollmentSubjects: EnrollmentSubjectOption[] = [
  {
    id: '2010204',
    code: '2010204',
    name: 'Interacción Humano Computador',
    level: 'G',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2', '3'],
    fullGroups: ['2'],
    teacher: 'Flores Villarroel Corina',
    schedule: 'Mar 6:45-8:15 · Jue 18:45-20:15',
    room: '690D / 690E',
    status: 'available',
  },
  {
    id: '2010019',
    code: '2010019',
    name: 'Simulación de Sistemas',
    level: 'G',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2'],
    teacher: 'Villarroel Tapia Henry Frank',
    schedule: 'Lun 14:15-15:45 · Mié 6:45-8:15',
    room: '692G / 651',
    status: 'available',
  },
  {
    id: '2010102',
    code: '2010102',
    name: 'Evaluación y Auditoría de Sistemas',
    level: 'H',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2', '3'],
    teacher: 'Romero Rodriguez Patricia',
    schedule: 'Mar 11:15-12:45 · Mié 8:15-10:30 · Jue 8:15-9:45',
    room: '691F / 690B / 690C',
    status: 'available',
  },
  {
    id: '2010214',
    code: '2010214',
    name: 'Taller de Grado I',
    level: 'H',
    availableModes: ['Normal'] as EnrollmentMode[],
    group: '7',
    availableGroups: ['7', '8'],
    teacher: 'Romero Rodriguez Patricia',
    schedule: 'Lun 9:45-11:15 · Mar 8:15-10:30',
    room: '617C / 690C',
    status: 'available',
  },
  {
    id: '2010066',
    code: '2010066',
    name: 'Procesos Ágiles',
    level: 'I',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2'],
    teacher: 'Cussi Nicolas Grover Humberto',
    schedule: 'Mar 20:15-21:45 · Vie 20:15-21:45',
    room: '692E / 691B',
    status: 'available',
  },
  {
    id: '2010079',
    code: '2010079',
    name: 'Web Semánticas',
    level: 'I',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2'],
    teacher: 'Rodriguez Bilbao Erika Patricia',
    schedule: 'Lun 11:15-12:45 · Jue 14:15-15:45',
    room: '691C / 692D',
    status: 'available',
  },
  {
    id: '2010053',
    code: '2010053',
    name: 'Taller de Base de Datos',
    level: 'F',
    availableModes: ['Mesa'] as EnrollmentMode[],
    group: '2',
    availableGroups: ['2'],
    teacher: 'Docente por confirmar',
    schedule: 'Examen de mesa · fecha por confirmar',
    room: 'Por confirmar',
    status: 'exam',
  },
  {
    id: '2010040',
    code: '2010040',
    name: 'Teoría de Autómatas y Lenguajes Formales',
    level: 'E',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2', '3'],
    teacher: 'Docente por confirmar',
    schedule: 'Lun 7:30-9:00 · Mié 7:30-9:00',
    room: '690A',
    status: 'available',
  },
  {
    id: '2010203',
    code: '2010203',
    name: 'Programación Web',
    level: 'F',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '3',
    availableGroups: ['1', '2', '3'],
    fullGroups: ['1'],
    teacher: 'Docente por confirmar',
    schedule: 'Mar 14:15-15:45 · Jue 14:15-15:45',
    room: '692C',
    status: 'available',
  },
  {
    id: '2010100',
    code: '2010100',
    name: 'Arquitectura de Software',
    level: 'G',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2'],
    teacher: 'Docente por confirmar',
    schedule: 'Lun 18:45-20:15 · Mié 18:45-20:15',
    room: '691D',
    status: 'available',
  },
  {
    id: '2010209',
    code: '2010209',
    name: 'Seguridad de Sistemas',
    level: 'I',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2'],
    teacher: 'Docente por confirmar',
    schedule: 'Mar 18:45-20:15 · Jue 20:15-21:45',
    room: '692F',
    status: 'available',
  },
  {
    id: '2010115',
    code: '2010115',
    name: 'Inteligencia Artificial',
    level: 'H',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '2',
    availableGroups: ['1', '2'],
    teacher: 'Docente por confirmar',
    schedule: 'Lun 15:00-16:30 · Vie 15:00-16:30',
    room: '691A',
    status: 'available',
  },
  {
    id: '2010118',
    code: '2010118',
    name: 'Sistemas Distribuidos',
    level: 'H',
    availableModes: ['Normal'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2'],
    teacher: 'Docente por confirmar',
    schedule: 'Mié 10:30-12:00 · Vie 10:30-12:00',
    room: '690F',
    status: 'available',
  },
  {
    id: '2010121',
    code: '2010121',
    name: 'Calidad de Software',
    level: 'H',
    availableModes: ['Normal', 'Mesa'] as EnrollmentMode[],
    group: '1',
    availableGroups: ['1', '2', '3'],
    teacher: 'Docente por confirmar',
    schedule: 'Mar 9:45-11:15 · Jue 9:45-11:15',
    room: '691E',
    status: 'available',
  },
  {
    id: '2010130',
    code: '2010130',
    name: 'Administración de Sistemas',
    level: 'I',
    availableModes: ['Mesa'] as EnrollmentMode[],
    group: '4',
    availableGroups: ['4'],
    teacher: 'Docente por confirmar',
    schedule: 'Examen de mesa · fecha por confirmar',
    room: 'Por confirmar',
    status: 'exam',
  },
];

const defaultSelectedEnrollments: SelectedEnrollment[] = [
  { subjectId: '2010204', mode: 'Normal', group: '1' },
  { subjectId: '2010019', mode: 'Normal', group: '1' },
  { subjectId: '2010102', mode: 'Normal', group: '1' },
];

const secondaryActions = [
  {
    title: 'Kardex',
    description: 'Historial académico, notas y materias cursadas.',
    href: '/panel/kardex',
    icon: BookOpenCheck,
  },
  {
    title: 'Horario de clases',
    description: 'Semana actual con tus grupos inscritos.',
    href: '/panel/horario',
    icon: CalendarClock,
  },
  {
    title: 'Estado de inscripción',
    description: 'Verifica tus materias y grupos confirmados.',
    href: '/panel/estado',
    icon: ClipboardCheck,
  },
  {
    title: 'Código de inscripción',
    description: 'Genera el código requerido para inscribirte.',
    href: '/panel/codigo',
    icon: KeyRound,
  },
  {
    title: 'Matrícula',
    description: 'Verifica el pago o accede a las opciones de pago.',
    href: '/panel/matricula',
    icon: CreditCard,
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

function getInitialCodeValidation(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('websiss-code-validated') === 'true';
}

function getInitialTuitionPaid(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('websiss-tuition-paid') === 'true';
}

function isEnrollmentMode(value: unknown): value is EnrollmentMode {
  return value === 'Normal' || value === 'Mesa';
}

function getInitialSelectedEnrollments(): SelectedEnrollment[] {
  if (typeof window === 'undefined') return defaultSelectedEnrollments;

  try {
    const stored = window.localStorage.getItem('websiss-selected-enrollments');
    if (!stored) return defaultSelectedEnrollments;

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return defaultSelectedEnrollments;

    const valid = parsed.filter(
      (item): item is SelectedEnrollment =>
        typeof item?.subjectId === 'string' && isEnrollmentMode(item?.mode),
    ).map((item) => {
      const subject = enrollmentSubjects.find((option) => option.id === item.subjectId);
      const group =
        typeof item.group === 'string' && subject?.availableGroups.includes(item.group)
          ? item.group
          : subject?.group ?? '1';

      return { subjectId: item.subjectId, mode: item.mode, group };
    });

    return valid.length > 0 ? valid.slice(0, enrollmentLimit) : defaultSelectedEnrollments;
  } catch {
    return defaultSelectedEnrollments;
  }
}

function storeSelectedEnrollments(enrollments: SelectedEnrollment[]) {
  window.localStorage.setItem('websiss-selected-enrollments', JSON.stringify(enrollments));
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

type PanelPage =
  | 'home'
  | 'inscripcion'
  | 'horario'
  | 'codigo'
  | 'kardex'
  | 'estado'
  | 'matricula'
  | 'seguridad';

const pageTitles: Record<PanelPage, string> = {
  home: 'Panel del estudiante',
  inscripcion: 'Inscripción',
  horario: 'Horario de clases',
  codigo: 'Código de inscripción',
  kardex: 'Kardex',
  estado: 'Estado de inscripción',
  matricula: 'Matrícula',
  seguridad: 'Cambio de contraseña',
};

interface StudentPanelProps {
  page?: PanelPage;
}

export function StudentPanel({ page = 'home' }: StudentPanelProps) {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark);
  const [isCodeValidated, setIsCodeValidated] = useState<boolean>(false);
  const [isTuitionPaid, setIsTuitionPaid] = useState<boolean>(false);
  const [kardexQuery, setKardexQuery] = useState('');
  const [accessCodes, setAccessCodes] = useState({ third: '', fifth: '' });
  const [codeError, setCodeError] = useState('');
  const [liveMessage, setLiveMessage] = useState('');
  const [selectedEnrollments, setSelectedEnrollments] = useState<SelectedEnrollment[]>(
    defaultSelectedEnrollments,
  );

  useEffect(() => {
    setIsCodeValidated(getInitialCodeValidation());
    setIsTuitionPaid(getInitialTuitionPaid());
    setSelectedEnrollments(getInitialSelectedEnrollments());
  }, []);

  const announce = (message: string) => {
    setLiveMessage(message);
  };

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('websiss-theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  const initials = getInitials(student.fullName);
  const filteredKardexRows = useMemo(() => {
    const query = kardexQuery.trim().toLowerCase();

    if (!query) return kardexRows;

    return kardexRows.filter((row) =>
      [row.code, row.subject, row.year, row.term, row.result]
        .join(' ')
        .toLowerCase()
        .includes(query),
    );
  }, [kardexQuery]);
  const scheduleByDay = useMemo(() => {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    return days.map((day) => ({
      day,
      sessions: scheduleSessions.filter((session) => session.day === day),
    }));
  }, []);
  const nextClass = scheduleSessions[0];
  const codesReady = accessCodes.third.trim().length >= 4 && accessCodes.fifth.trim().length >= 4;
  const canValidateCodes = isTuitionPaid && codesReady;
  const selectedSubjectIds = selectedEnrollments.map((enrollment) => enrollment.subjectId);
  const selectedSubjects = selectedEnrollments
    .map((enrollment) => {
      const subject = enrollmentSubjects.find((item) => item.id === enrollment.subjectId);

      return subject
        ? { ...subject, selectedMode: enrollment.mode, selectedGroup: enrollment.group }
        : undefined;
    })
    .filter((subject): subject is SelectedEnrollmentSubject => Boolean(subject));
  const availableSubjects = enrollmentSubjects.filter(
    (subject) => !selectedSubjectIds.includes(subject.id),
  );
  const remainingSlots = enrollmentLimit - selectedEnrollments.length;

  const addSubject = (subjectId: string, mode: EnrollmentMode, group: string) => {
    setSelectedEnrollments((current) => {
      if (
        current.some((enrollment) => enrollment.subjectId === subjectId) ||
        current.length >= enrollmentLimit
      ) {
        return current;
      }

      const next = [...current, { subjectId, mode, group }];
      const subject = enrollmentSubjects.find((item) => item.id === subjectId);
      storeSelectedEnrollments(next);
      if (subject) {
        const message = `${subject.name} fue agregada a tu inscripción.`;
        toast.success(subject.name, {
          description: `Materia agregada · Grupo ${group} · ${mode}`,
        });
        announce(message);
      }
      return next;
    });
  };

  const removeSubject = (subjectId: string) => {
    setSelectedEnrollments((current) => {
      const subject = enrollmentSubjects.find((item) => item.id === subjectId);
      const next = current.filter((enrollment) => enrollment.subjectId !== subjectId);
      storeSelectedEnrollments(next);
      if (subject) {
        const message = `${subject.name} fue retirada de tu inscripción.`;
        toast.info(subject.name, {
          description: 'Materia retirada.',
        });
        announce(message);
      }
      return next;
    });
  };

  const validateAccessCodes = () => {
    if (!canValidateCodes) return;
    if (accessCodes.third.trim() === '0000' || accessCodes.fifth.trim() === '0000') {
      const message = 'Uno de los códigos ingresados no es válido.';
      setCodeError(message);
      toast.error('Códigos incorrectos', {
        description: 'Revisa los códigos 3 y 5 antes de continuar.',
      });
      announce(message);
      return;
    }

    setCodeError('');
    window.localStorage.setItem('websiss-code-validated', 'true');
    setIsCodeValidated(true);
    toast.success('Cuenta habilitada', {
      description: 'Ya puedes elegir materias y grupos durante el periodo de inscripción.',
    });
    announce('Cuenta habilitada para inscripción.');
  };

  const payTuition = () => {
    window.localStorage.setItem('websiss-tuition-paid', 'true');
    setIsTuitionPaid(true);
    toast.success('Matrícula pagada', {
      description: `Pago registrado por ${tuitionStatus.method}.`,
    });
    announce('Matrícula pagada. Puedes continuar el flujo de inscripción.');
  };

  const finalizeEnrollment = () => {
    window.sessionStorage.setItem('websiss-enrollment-finalized', 'true');
    announce('Inscripción lista para revisar. Abriendo estado de inscripción.');
    window.location.href = '/panel/estado';
  };

  useEffect(() => {
    if (page !== 'estado') return;
    if (window.sessionStorage.getItem('websiss-enrollment-finalized') !== 'true') return;

    window.sessionStorage.removeItem('websiss-enrollment-finalized');
    toast.success('Inscripción finalizada', {
      description: 'Tus materias seleccionadas aparecen en el estado de inscripción.',
    });
    announce('Inscripción finalizada. Revisa el estado de tus materias.');
  }, [page]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" closeButton />
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </div>

      {/* Navbar única */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/65">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
          <a href="/panel" className="flex items-center gap-3 shrink-0">
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

                <DropdownMenuLabel className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground pt-3">
                  Seguridad
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <a href="/panel/seguridad" className="flex items-center gap-2">
                    <LockKeyhole aria-hidden="true" />
                    <span>Cambiar contraseña</span>
                  </a>
                </DropdownMenuItem>

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
        {page !== 'home' && <h1 className="sr-only">{pageTitles[page]}</h1>}

        {page === 'home' && (
          <>
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
                  <span
                    className={`ml-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${
                      isTuitionPaid
                        ? 'bg-success/15 text-success ring-success/30'
                        : 'bg-warning/15 text-warning-foreground ring-warning/30'
                    }`}
                  >
                    {isTuitionPaid ? (
                      <CheckCircle2 aria-hidden="true" className="size-3" />
                    ) : (
                      <AlertTriangle aria-hidden="true" className="size-3" />
                    )}
                    {isTuitionPaid ? 'Matrícula pagada' : 'Matrícula pendiente'}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
                    Inscribirse a materias
                  </h2>
                  <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
                    Revisa si el envío de códigos está disponible para tu carrera
                    antes de elegir materias y grupos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="group h-12 px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm"
                  >
                    <a href="/panel/inscripcion">
                      <span>Inscribirse</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 border-primary-foreground/35 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <a href="/panel/codigo">
                      <KeyRound aria-hidden="true" />
                      <span>Obtener código</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 border-primary-foreground/35 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <a href="/panel/matricula">
                      <CreditCard aria-hidden="true" />
                      <span>{isTuitionPaid ? 'Ver matrícula' : 'Pagar matrícula'}</span>
                    </a>
                  </Button>
                </div>
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

              <div className="grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-5">
                {secondaryActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Card
                      key={action.href}
                      className="group relative gap-0 py-0 transition-[border-color,box-shadow,transform] hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring has-[a:focus-visible]:border-primary/40 has-[a:focus-visible]:shadow-md md:gap-6 md:py-6"
                    >
                      <CardHeader className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-3 md:block md:p-6">
                        <div className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:size-10">
                          <Icon aria-hidden="true" className="size-4 md:size-5" />
                        </div>
                        <div className="min-w-0 md:mt-3 md:space-y-1">
                          <CardTitle className="text-base font-medium">
                            <a
                              href={action.href}
                              className="after:absolute after:inset-0 after:content-[''] after:rounded-[inherit] focus:outline-none focus-visible:outline-none"
                            >
                              {action.title}
                            </a>
                          </CardTitle>
                          <CardDescription className="hidden text-xs leading-relaxed md:block">
                            {action.description}
                          </CardDescription>
                        </div>
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 text-muted-foreground md:hidden"
                        />
                      </CardHeader>
                      <CardContent className="hidden pt-0 md:block">
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
          </>
        )}

        {page === 'inscripcion' && (
        <section id="inscripcion" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-sm">
                  Inscripción
                </Badge>
                <Badge variant="outline" className="rounded-sm">
                  {selectedSubjectIds.length}/{enrollmentLimit} materias
                </Badge>
                <Badge
                  className={`rounded-sm ${
                    isCodeValidated
                      ? 'bg-success text-success-foreground'
                      : 'bg-warning text-warning-foreground'
                  }`}
                >
                  {isCodeValidated ? 'Cuenta habilitada' : 'Validación pendiente'}
                </Badge>
                <Badge
                  className={`rounded-sm ${
                    isTuitionPaid
                      ? 'bg-success text-success-foreground'
                      : 'bg-warning text-warning-foreground'
                  }`}
                >
                  {isTuitionPaid ? 'Matrícula pagada' : 'Matrícula pendiente'}
                </Badge>
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                  Inscribirse a materias
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Durante el periodo solo eliges materias, grupos y modalidad.
                  Los códigos se validan antes.
                </p>
              </div>
            </div>

            {isTuitionPaid && isCodeValidated && selectedSubjectIds.length > 0 ? (
              <Button type="button" onClick={finalizeEnrollment}>
                <ListChecks aria-hidden="true" />
                <span>Finalizar inscripción</span>
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                disabled
                aria-describedby="finish-enrollment-requirements"
              >
                <ListChecks aria-hidden="true" />
                <span>Finalizar inscripción</span>
              </Button>
            )}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {!isTuitionPaid && (
                <Card className="border-warning/30 bg-warning/10">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-3">
                      <AlertTriangle
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-warning"
                      />
                      <div>
                        <h3 className="font-medium">Paga tu matrícula antes de inscribirte</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Este prototipo permite simular el pago para mostrar el flujo completo.
                        </p>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="bg-background">
                      <a href="/panel/matricula">
                        <CreditCard aria-hidden="true" />
                        <span>Pagar matrícula</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}

              {!isCodeValidated && (
                <Card className="border-warning/30 bg-warning/10">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-3">
                      <AlertTriangle
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-warning"
                      />
                      <div>
                        <h3 className="font-medium">Valida tus códigos antes de inscribirte</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Una vez habilitada la cuenta, aquí ya no se vuelven a pedir códigos.
                        </p>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="bg-background">
                      <a href="/panel/codigo">
                        <LockKeyhole aria-hidden="true" />
                        <span>Validar códigos</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}

              <Card className="overflow-hidden">
                <CardHeader className="border-b border-border/60">
                  <CardTitle className="text-lg">Oferta recomendada</CardTitle>
                  <CardDescription>
                    Materias de Informática compatibles con la gestión actual.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border/60">
                    {availableSubjects.map((subject) => (
                      <SubjectOfferRow
                        key={subject.id}
                        subject={subject}
                        disabled={!isTuitionPaid || !isCodeValidated || remainingSlots <= 0}
                        onAdd={(mode, group) => addSubject(subject.id, mode, group)}
                      />
                    ))}
                    {availableSubjects.length === 0 && (
                      <div className="px-5 py-8 text-center text-sm text-muted-foreground">
                        Todas las materias disponibles ya están en tu inscripción.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Card className="overflow-hidden border-primary/20">
                <CardHeader className="border-b border-border/60">
                  <CardTitle className="text-lg">Tu inscripción</CardTitle>
                  <CardDescription>
                    {remainingSlots > 0
                      ? `${remainingSlots} cupo(s) disponible(s)`
                      : 'Límite de materias alcanzado'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-4">
                  <div className="rounded-md border border-border/70 bg-muted/40 p-3">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium">Límite máximo</span>
                      <span className="text-muted-foreground" aria-live="polite">
                        {selectedSubjectIds.length} de {enrollmentLimit} materias
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-background">
                      <div
                        className="h-full rounded-full bg-primary transition-[width]"
                        style={{
                          width: `${(selectedSubjectIds.length / enrollmentLimit) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <StatusItem icon={GraduationCap} label="Carrera" value="Informática" />
                    <StatusItem icon={CalendarClock} label="Gestión" value="1/2026" />
                    <StatusItem
                      icon={CreditCard}
                      label="Matrícula"
                      value={isTuitionPaid ? 'Pagada' : 'Pendiente'}
                    />
                    <StatusItem
                      icon={ReceiptText}
                      label="Comprobante"
                      value={isTuitionPaid ? tuitionStatus.receipt : 'Pendiente'}
                    />
                  </div>

                  <div className="space-y-3" aria-live="polite" aria-atomic="false">
                    {selectedSubjects.map((subject) => (
                      <SelectedSubjectCard
                        key={subject.id}
                        subject={subject}
                        onRemove={() => removeSubject(subject.id)}
                      />
                    ))}
                  </div>

                  {(!isTuitionPaid || !isCodeValidated) && (
                    <div className="rounded-md border border-warning/30 bg-warning/10 p-3 text-sm">
                      <div className="flex gap-2">
                        <AlertTriangle
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-warning"
                        />
                        <p id="finish-enrollment-requirements">
                          {isTuitionPaid
                            ? 'La cuenta debe estar habilitada antes de tomar materias.'
                            : 'La matrícula debe estar validada antes de tomar materias.'}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
        )}

        {page === 'horario' && (
        <section id="horario" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-sm">
                  Horario de clases
                </Badge>
                <Badge variant="outline" className="rounded-sm">
                  Gestión {scheduleContext.term}
                </Badge>
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                  Tu semana de clases
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  {activePlan.name} · {scheduleContext.groupType}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" size="sm">
                <Printer aria-hidden="true" />
                <span>Imprimir</span>
              </Button>
              <Button type="button" variant="outline" size="sm">
                <Download aria-hidden="true" />
                <span>Descargar</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="border-primary/15">
              <CardHeader>
                <CardTitle className="text-lg">Próxima referencia</CardTitle>
                <CardDescription>
                  Horario vigente de tus clases inscritas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScheduleSessionCard session={nextClass} featured />
              </CardContent>
            </Card>

            <Card className="border-warning/25 bg-warning/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle aria-hidden="true" className="size-5 text-warning" />
                  Contexto académico
                </CardTitle>
                <CardDescription>
                  Datos usados para mostrar el horario actual.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-3">
                <StatusItem icon={CalendarClock} label="Periodo" value={scheduleContext.term} />
                <StatusItem icon={School} label="Carrera" value={activePlan.name} />
                <StatusItem icon={Users} label="Grupo" value="Teórico inscrito" />
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="border-b border-border/60">
              <CardTitle className="text-lg">Distribución semanal</CardTitle>
              <CardDescription>
                Aulas, docentes y horarios por día.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 xl:grid-cols-3">
                {scheduleByDay.map(({ day, sessions }) => (
                  <section
                    key={day}
                    aria-labelledby={`schedule-${day}`}
                    className="border-b border-border/60 p-4 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <h3 id={`schedule-${day}`} className="font-medium">
                        {day}
                      </h3>
                      <Badge variant="outline" className="rounded-sm">
                        {sessions.length}
                      </Badge>
                    </div>

                    {sessions.length > 0 ? (
                      <div className="space-y-3">
                        {sessions.map((session) => (
                          <ScheduleSessionCard
                            key={`${session.day}-${session.start}-${session.code}-${session.room}`}
                            session={session}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-md border border-dashed border-border px-3 py-6 text-center text-sm text-muted-foreground">
                        Sin clases
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        )}

        {page === 'codigo' && (
        <section id="codigo" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit rounded-sm">
              Código de inscripción
            </Badge>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Validar códigos de acceso
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Antes del horario de inscripción valida 2 de tus 5 códigos.
                Después solo eliges materias y grupos.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden border-primary/15">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 p-5 sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <div
                        className={`flex items-center gap-2 text-sm font-medium ${
                          isCodeValidated ? 'text-success' : 'text-warning'
                        }`}
                      >
                        {isCodeValidated ? (
                          <CheckCircle2 aria-hidden="true" className="size-4" />
                        ) : (
                          <LockKeyhole aria-hidden="true" className="size-4" />
                        )}
                        {isCodeValidated
                          ? 'Cuenta habilitada para inscripción'
                          : 'Validación pendiente'}
                      </div>
                      <h3 className="font-serif text-xl font-medium leading-tight">
                        {enrollmentCodeStatus.career}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Gestión {enrollmentCodeStatus.term} · Plan {activePlan.code}
                      </p>
                    </div>

                    <Badge
                      className={`w-fit rounded-sm ${
                        isCodeValidated
                          ? 'bg-success text-success-foreground'
                          : 'bg-warning text-warning-foreground'
                      }`}
                    >
                      {isCodeValidated ? (
                        <CheckCircle2 aria-hidden="true" data-icon="inline-start" />
                      ) : (
                        <CalendarX aria-hidden="true" data-icon="inline-start" />
                      )}
                      {isCodeValidated ? 'Habilitado' : 'Antes del periodo'}
                    </Badge>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <StatusItem
                      icon={Mail}
                      label="Correo registrado"
                      value={student.codeDeliveryEmail}
                    />
                    <StatusItem
                      icon={Clock3}
                      label="Periodo"
                      value="Validación previa"
                    />
                    <StatusItem
                      icon={CreditCard}
                      label="Matrícula"
                      value={isTuitionPaid ? 'Pagada' : 'Pendiente'}
                    />
                    <StatusItem
                      icon={ShieldCheck}
                      label="Seguridad"
                      value="2 de 5 códigos"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="access-code-3"
                        className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Código #3
                      </label>
                      <Input
                        id="access-code-3"
                        name="accessCode3"
                        value={accessCodes.third}
                        onChange={(event) =>
                          {
                            setCodeError('');
                            setAccessCodes((current) => ({
                              ...current,
                              third: event.target.value.replace(/\D/g, '').slice(0, 8),
                            }));
                          }
                        }
                        inputMode="numeric"
                        autoComplete="off"
                        spellCheck={false}
                        placeholder="Ej. 12345678…"
                        aria-invalid={Boolean(codeError)}
                        aria-describedby={codeError ? 'access-code-error' : undefined}
                        disabled={isCodeValidated}
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="access-code-5"
                        className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Código #5
                      </label>
                      <Input
                        id="access-code-5"
                        name="accessCode5"
                        value={accessCodes.fifth}
                        onChange={(event) =>
                          {
                            setCodeError('');
                            setAccessCodes((current) => ({
                              ...current,
                              fifth: event.target.value.replace(/\D/g, '').slice(0, 8),
                            }));
                          }
                        }
                        inputMode="numeric"
                        autoComplete="off"
                        spellCheck={false}
                        placeholder="Ej. 87654321…"
                        aria-invalid={Boolean(codeError)}
                        aria-describedby={codeError ? 'access-code-error' : undefined}
                        disabled={isCodeValidated}
                        className="font-mono"
                      />
                    </div>
                  </div>

                  {codeError && (
                    <p id="access-code-error" className="text-sm font-medium text-destructive" aria-live="polite">
                      {codeError}
                    </p>
                  )}

                  {isCodeValidated ? (
                    <div className="rounded-md border border-success/30 bg-success/10 p-4" aria-live="polite">
                      <div className="flex gap-3">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-success"
                        />
                        <div>
                          <p className="text-sm font-medium">Cuenta habilitada.</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Cuando llegue el horario de inscripción ya no se pedirán
                            códigos nuevamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-md border border-warning/30 bg-warning/10 p-4" aria-live="polite">
                      <div className="flex gap-3">
                        <AlertTriangle
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-warning"
                        />
                        <div>
                          <p className="text-sm font-medium">
                            {isTuitionPaid
                              ? 'Ingresa correctamente ambos códigos para habilitar la cuenta.'
                              : 'Primero paga tu matrícula para continuar con los códigos.'}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Solo se volverán a pedir códigos si el sistema detecta
                            actividad sospechosa.
                          </p>
                          {!isTuitionPaid && (
                            <Button asChild variant="outline" size="sm" className="mt-3 bg-background">
                              <a href="/panel/matricula">
                                <CreditCard aria-hidden="true" />
                                <span>Ir a pagar matrícula</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 sm:flex-row">
                    {isCodeValidated ? (
                      <Button asChild className="sm:w-fit">
                        <a href="/panel/inscripcion">
                          <ArrowRight aria-hidden="true" />
                          <span>Ir a inscripción</span>
                        </a>
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="sm:w-fit"
                        disabled={!canValidateCodes}
                        onClick={validateAccessCodes}
                      >
                        <ShieldCheck aria-hidden="true" />
                        <span>Validar y habilitar cuenta</span>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="border-t border-border/60 bg-muted/40 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Estado del trámite
                  </h3>
                  <div className="mt-5 space-y-4">
                    <ProcessStep
                      state="done"
                      title="Admisión validada"
                      description="La carrera permite inscripción para este periodo."
                    />
                    <ProcessStep
                      state={isTuitionPaid ? 'done' : 'blocked'}
                      title="Matrícula pagada"
                      description={
                        isTuitionPaid
                          ? `Pago registrado por ${tuitionStatus.method}.`
                          : 'Debe pagarse antes de habilitar la inscripción.'
                      }
                    />
                    <ProcessStep
                      state={isCodeValidated ? 'done' : 'blocked'}
                      title="Códigos verificados"
                      description={
                        isCodeValidated
                          ? 'La cuenta quedó habilitada para tomar materias.'
                          : 'Falta validar 2 códigos de acceso.'
                      }
                    />
                    <ProcessStep
                      state={isTuitionPaid && isCodeValidated ? 'done' : 'blocked'}
                      title="Inscripción sin fricción"
                      description="Durante el periodo solo se eligen materias y grupos."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        )}

        {page === 'matricula' && (
        <section id="matricula" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-sm">
                  Matrícula
                </Badge>
                <Badge
                  className={`rounded-sm ${
                    isTuitionPaid
                      ? 'bg-success text-success-foreground'
                      : 'bg-warning text-warning-foreground'
                  }`}
                >
                  {isTuitionPaid ? 'Pago registrado' : 'Pago pendiente'}
                </Badge>
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                  Pagar matrícula
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  La inscripción depende de que la matrícula esté pagada y
                  confirmada por el sistema.
                </p>
              </div>
            </div>

            <Button asChild>
              <a href="/panel/inscripcion">
                <ArrowRight aria-hidden="true" />
                <span>Continuar inscripción</span>
              </a>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_340px]">
            <Card className="overflow-hidden border-primary/15">
              <CardHeader className="border-b border-border/60">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard aria-hidden="true" className="size-5 text-primary" />
                  Pagar matrícula
                </CardTitle>
                <CardDescription>
                  Pago en caja facultativa o pago electrónico cuando esté disponible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-5 sm:p-6">
                <div
                  className={`rounded-md border p-4 ${
                    isTuitionPaid
                      ? 'border-success/30 bg-success/10'
                      : 'border-warning/30 bg-warning/10'
                  }`}
                  aria-live="polite"
                >
                  <div className="flex gap-3">
                    {isTuitionPaid ? (
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-success"
                      />
                    ) : (
                      <AlertTriangle
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-warning"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium">
                        {isTuitionPaid
                          ? 'La matrícula ha sido pagada.'
                          : 'La matrícula aún no registra pago.'}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {isTuitionPaid
                          ? `Comprobante ${tuitionStatus.receipt}, registrado el ${tuitionStatus.paidAt}.`
                          : 'Paga la matrícula para habilitar la inscripción de materias.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <StatusItem
                    icon={ReceiptText}
                    label="Comprobante"
                    value={isTuitionPaid ? tuitionStatus.receipt : 'Pendiente'}
                  />
                  <StatusItem icon={Building2} label="Entidad" value={tuitionStatus.method} />
                  <StatusItem icon={CreditCard} label="Monto" value={tuitionStatus.amount} />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button type="button" disabled={isTuitionPaid} onClick={payTuition}>
                    <CreditCard aria-hidden="true" />
                    <span>{isTuitionPaid ? 'Matrícula pagada' : 'Pagar matrícula'}</span>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/panel/codigo">
                      <KeyRound aria-hidden="true" />
                      <span>Validar códigos</span>
                    </a>
                  </Button>
                </div>

                {isTuitionPaid && (
                  <p className="text-xs text-muted-foreground">
                    El botón permanece visible para ubicar la función, pero se
                    desactiva cuando el pago ya fue confirmado.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Condiciones para inscribirse</CardTitle>
                <CardDescription>
                  Orden del flujo propuesto.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ProcessStep
                  state={isTuitionPaid ? 'done' : 'blocked'}
                  title="Matrícula"
                  description={isTuitionPaid ? 'Pago confirmado.' : 'Pendiente de pago.'}
                />
                <ProcessStep
                  state={isCodeValidated ? 'done' : 'blocked'}
                  title="Códigos"
                  description={
                    isCodeValidated
                      ? 'Cuenta habilitada.'
                      : 'Valida 2 códigos antes del periodo.'
                  }
                />
                <ProcessStep
                  state={isTuitionPaid && isCodeValidated ? 'done' : 'blocked'}
                  title="Inscripción"
                  description="Luego solo eliges materias, grupos y modalidad."
                />
              </CardContent>
            </Card>
          </div>
        </section>
        )}

        {page === 'estado' && (
        <section id="estado" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-sm">
                  Estado de inscripción
                </Badge>
                <Badge variant="outline" className="rounded-sm">
                  {selectedSubjectIds.length}/{enrollmentLimit} materias
                </Badge>
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                  Materias inscritas
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Revisión rápida de materias, grupos y modalidad registrados.
                </p>
              </div>
            </div>

            <Button asChild>
              <a href="/panel/inscripcion">
                <Plus aria-hidden="true" />
                <span>Modificar inscripción</span>
              </a>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
            <Card className="overflow-hidden">
              <CardHeader className="border-b border-border/60">
                <CardTitle className="text-lg">Detalle de inscripción</CardTitle>
                <CardDescription>
                  {activePlan.name} · Gestión 1/2026
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/60">
                  {selectedSubjects.map((subject, index) => (
                    <article
                      key={subject.id}
                      className="grid gap-3 px-5 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                    >
                      <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium">{subject.name}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {subject.code} · Grupo {subject.selectedGroup} · {subject.schedule}
                        </div>
                      </div>
                      <Badge
                        className={`w-fit rounded-sm ${
                          subject.selectedMode === 'Mesa'
                            ? 'bg-warning text-warning-foreground'
                            : 'bg-success text-success-foreground'
                        }`}
                      >
                        {subject.selectedMode}
                      </Badge>
                    </article>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/15">
              <CardHeader>
                <CardTitle className="text-lg">Resumen</CardTitle>
                <CardDescription>
                  Cupos y estado general.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <StatusItem icon={GraduationCap} label="Carrera" value="Informática" />
                <StatusItem icon={CalendarClock} label="Gestión" value="1/2026" />
                <StatusItem
                  icon={ListChecks}
                  label="Cupos usados"
                  value={`${selectedSubjectIds.length} de ${enrollmentLimit}`}
                />
              </CardContent>
            </Card>
          </div>
        </section>
        )}

        {page === 'kardex' && (
        <section id="kardex" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-sm">
                  Kardex
                </Badge>
                <Badge variant="outline" className="rounded-sm">
                  Plan {activePlan.code}
                </Badge>
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                  Historial académico
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activePlan.name}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" size="sm">
                <Printer aria-hidden="true" />
                <span>Imprimir</span>
              </Button>
              <Button type="button" variant="outline" size="sm">
                <Download aria-hidden="true" />
                <span>Descargar</span>
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-foreground">
            <p>
              La información es privada y no constituye documento oficial. Para
              fines legales, el documento debe ser emitido oficialmente por la
              Universidad Mayor de San Simón.
            </p>
            <p className="mt-2 text-muted-foreground">
              Las materias en curso muestran parciales como avance. No se marcan
              como reprobadas hasta que exista nota final o cierre oficial.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
            <KardexMetric label="Cursadas" value={kardexSummary.taken} />
            <KardexMetric label="Aprobadas" value={kardexSummary.approved} tone="success" />
            <KardexMetric label="Reprobadas" value={kardexSummary.failed} tone="danger" />
            <KardexMetric label="Abandonadas" value={kardexSummary.abandoned} tone="warning" />
            <KardexMetric label="Prom. general" value={kardexSummary.generalAverage} />
            <KardexMetric label="Prom. aprob." value={kardexSummary.approvedAverage} />
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="gap-4 border-b border-border/60">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <CardTitle className="text-lg">Materias cursadas</CardTitle>
                  <CardDescription>
                    {student.fullName} · SIS {student.sisCode}
                  </CardDescription>
                </div>
                <div className="relative w-full lg:w-80">
                  <Search
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    type="search"
                    aria-label="Buscar materia en Kardex"
                    placeholder="Buscar materia o código"
                    value={kardexQuery}
                    onChange={(event) => setKardexQuery(event.target.value)}
                    className="h-10 pl-9"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/60 hover:bg-muted/60">
                    <TableHead className="hidden w-16 md:table-cell">Nro</TableHead>
                    <TableHead className="hidden sm:table-cell">Año</TableHead>
                    <TableHead className="hidden sm:table-cell">Gst</TableHead>
                    <TableHead className="hidden sm:table-cell">Código</TableHead>
                    <TableHead className="min-w-40 sm:min-w-72">Materia</TableHead>
                    <TableHead className="hidden md:table-cell">Nv</TableHead>
                    <TableHead className="hidden md:table-cell">Gr</TableHead>
                    <TableHead className="hidden lg:table-cell">Avance</TableHead>
                    <TableHead className="text-right">Nota final</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredKardexRows.map((row) => (
                    <TableRow key={`${row.nro}-${row.code}-${row.year}-${row.term}`}>
                      <TableCell className="hidden text-muted-foreground md:table-cell">
                        {row.nro}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{row.year}</TableCell>
                      <TableCell className="hidden sm:table-cell">{row.term}</TableCell>
                      <TableCell className="hidden font-mono text-xs sm:table-cell">
                        {row.code}
                      </TableCell>
                      <TableCell className="font-medium whitespace-normal">
                        {row.subject}
                        <span className="mt-1 block font-mono text-[11px] font-normal text-muted-foreground sm:hidden">
                          {row.code}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{row.level}</TableCell>
                      <TableCell className="hidden md:table-cell">{row.group}</TableCell>
                      <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                        <KardexProgress row={row} />
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {row.final ?? '-'}
                      </TableCell>
                      <TableCell>
                        <ResultBadge result={row.result} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredKardexRows.length === 0 && (
                <div className="px-6 py-10 text-center text-sm text-muted-foreground">
                  No se encontraron materias con ese criterio.
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        )}

        {page === 'seguridad' && (
        <section id="seguridad" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit rounded-sm">
              Seguridad de la cuenta
            </Badge>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Cambiar contraseña
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Actualiza tu acceso desde el menú de perfil, sin mezclar esta tarea
                con inscripción, Kardex u horarios.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
            <Card>
              <CardHeader className="border-b border-border/60">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <LockKeyhole aria-hidden="true" className="size-5 text-primary" />
                  Nueva contraseña
                </CardTitle>
                <CardDescription>
                  Usa una contraseña diferente a la anterior.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="current-password"
                      className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Contraseña actual
                    </label>
                    <Input
                      id="current-password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Contraseña actual"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="new-password"
                      className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Nueva contraseña
                    </label>
                    <Input
                      id="new-password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Nueva contraseña"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="confirm-password"
                    className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Confirmar nueva contraseña
                  </label>
                  <Input
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Repite la nueva contraseña"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    Se cerrarán otras sesiones activas después del cambio.
                  </p>
                  <Button type="button" className="sm:w-fit">
                    <ShieldCheck aria-hidden="true" />
                    <span>Guardar cambio</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/15">
              <CardHeader>
                <CardTitle className="text-lg">Recomendaciones</CardTitle>
                <CardDescription>
                  Criterios mínimos para proteger la cuenta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ProcessStep
                  state="done"
                  title="No compartir credenciales"
                  description="La contraseña no debe enviarse por correo ni mensajería."
                />
                <ProcessStep
                  state="done"
                  title="Usar una clave distinta"
                  description="Evita repetir la contraseña de otros servicios."
                />
                <ProcessStep
                  state="blocked"
                  title="Cambio periódico"
                  description="Actualiza la contraseña si sospechas acceso de terceros."
                />
              </CardContent>
            </Card>
          </div>
        </section>
        )}
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

interface KardexMetricProps {
  label: string;
  value: number;
  tone?: 'default' | 'success' | 'danger' | 'warning';
}

interface ScheduleSession {
  day: string;
  start: string;
  end: string;
  subject: string;
  code: string;
  group: string;
  teacher: string;
  building: string;
  room: string;
}

interface ScheduleSessionCardProps {
  session: ScheduleSession;
  featured?: boolean;
}

type EnrollmentSubject = EnrollmentSubjectOption;
type SelectedEnrollmentSubject = EnrollmentSubject & {
  selectedMode: EnrollmentMode;
  selectedGroup: string;
};

interface SubjectOfferRowProps {
  subject: EnrollmentSubject;
  disabled: boolean;
  onAdd: (mode: EnrollmentMode, group: string) => void;
}

function SubjectOfferRow({ subject, disabled, onAdd }: SubjectOfferRowProps) {
  const [selectedMode, setSelectedMode] = useState<EnrollmentMode>(
    subject.availableModes[0] ?? 'Normal',
  );
  const [selectedGroup, setSelectedGroup] = useState(subject.group);
  const hasModeChoice = subject.availableModes.length > 1;
  const hasGroupChoice = subject.availableGroups.length > 1;
  const fullGroups = subject.fullGroups ?? [];
  const selectedGroupIsFull = fullGroups.includes(selectedGroup);

  return (
    <article className="grid gap-4 px-5 py-4 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="min-w-0 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium leading-tight">{subject.name}</h3>
          <Badge variant="outline" className="rounded-sm">
            {subject.code}
          </Badge>
          <Badge
            className={`rounded-sm ${
              subject.status === 'exam'
                ? 'bg-warning text-warning-foreground'
                : 'bg-success text-success-foreground'
            }`}
          >
            {subject.availableModes.join(' / ')}
          </Badge>
        </div>
        <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <Users aria-hidden="true" className="size-4 shrink-0" />
            {subject.availableGroups.length} grupo(s) disponible(s) · Nivel {subject.level}
          </span>
          <span className="flex items-center gap-2">
            <CalendarClock aria-hidden="true" className="size-4 shrink-0" />
            {subject.schedule}
          </span>
          <span className="flex items-center gap-2">
            <User aria-hidden="true" className="size-4 shrink-0" />
            {subject.teacher}
          </span>
          <span className="flex items-center gap-2">
            <Building2 aria-hidden="true" className="size-4 shrink-0" />
            Aula {subject.room}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end lg:flex-col lg:items-stretch">
        {hasGroupChoice && (
          <div className="space-y-1.5">
            <label
              htmlFor={`group-${subject.id}`}
              className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
            >
              Grupo
            </label>
            <Select
              value={selectedGroup}
              disabled={disabled}
              onValueChange={setSelectedGroup}
            >
              <SelectTrigger
                id={`group-${subject.id}`}
                className="w-full sm:w-32 lg:w-full"
                aria-label={`Grupo para ${subject.name}`}
              >
                <SelectValue placeholder="Grupo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {subject.availableGroups.map((group) => (
                    <SelectItem key={group} value={group} disabled={fullGroups.includes(group)}>
                      Grupo {group}{fullGroups.includes(group) ? ' - sin cupos' : ''}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        <ToggleGroup
          type="single"
          value={selectedMode}
          onValueChange={(value) => {
            if (isEnrollmentMode(value)) setSelectedMode(value);
          }}
          disabled={disabled}
          variant="outline"
          spacing={0}
          aria-label={`Modalidad para ${subject.name}`}
          className="grid grid-cols-2 sm:w-44 lg:w-full"
        >
          {(['Normal', 'Mesa'] as EnrollmentMode[]).map((mode) => {
            const enabled = subject.availableModes.includes(mode);

            return (
              <ToggleGroupItem
                key={mode}
                value={mode}
                disabled={!enabled || disabled}
                aria-label={`${mode} para ${subject.name}`}
                className="w-full"
              >
                {mode}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>

        <Button
          type="button"
          onClick={() => onAdd(selectedMode, selectedGroup)}
          disabled={disabled || selectedGroupIsFull || !subject.availableModes.includes(selectedMode)}
          className="sm:w-36 lg:w-full"
        >
          <Plus aria-hidden="true" />
          <span>{hasModeChoice ? 'Inscribir' : `Inscribir ${selectedMode}`}</span>
        </Button>
      </div>
    </article>
  );
}

interface SelectedSubjectCardProps {
  subject: SelectedEnrollmentSubject;
  onRemove: () => void;
}

function SelectedSubjectCard({ subject, onRemove }: SelectedSubjectCardProps) {
  return (
    <article className="rounded-md border border-border/70 bg-card p-3">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-medium leading-tight">{subject.name}</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {subject.code} · Grupo {subject.selectedGroup} · {subject.selectedMode}
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Retirar ${subject.name}`}
          onClick={onRemove}
          className="size-8 text-muted-foreground hover:text-destructive"
        >
          <Trash2 aria-hidden="true" className="size-4" />
        </Button>
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        {subject.schedule}
      </div>
    </article>
  );
}

function ScheduleSessionCard({ session, featured }: ScheduleSessionCardProps) {
  return (
    <article
      className={`rounded-md border border-border/70 bg-card p-3 ${
        featured ? 'border-primary/25 bg-primary/5 p-4' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold leading-tight">
            {session.subject}
          </div>
          <div className="mt-1 font-mono text-[11px] text-muted-foreground">
            {session.code}
          </div>
        </div>
        <Badge variant="outline" className="rounded-sm">
          {session.start}-{session.end}
        </Badge>
      </div>

      <div className="mt-3 space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Users aria-hidden="true" className="size-3.5 shrink-0" />
          <span>Grupo {session.group} · Clase teórica</span>
        </div>
        <div className="flex items-center gap-2">
          <User aria-hidden="true" className="size-3.5 shrink-0" />
          <span>{session.teacher}</span>
        </div>
        <div className="flex items-start gap-2">
          <Building2 aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
          <span>
            {session.building} · Aula {session.room}
          </span>
        </div>
      </div>
    </article>
  );
}

interface StatusItemProps {
  icon: typeof Mail;
  label: string;
  value: string;
}

function StatusItem({ icon: Icon, label, value }: StatusItemProps) {
  return (
    <div className="rounded-md border border-border/70 bg-background/60 px-4 py-3">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        <Icon aria-hidden="true" className="size-3.5" />
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-foreground wrap-break-word">
        {value}
      </div>
    </div>
  );
}

interface ProcessStepProps {
  state: 'done' | 'blocked';
  title: string;
  description: string;
}

function ProcessStep({ state, title, description }: ProcessStepProps) {
  const done = state === 'done';

  return (
    <div className="flex gap-3">
      <div
        className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${
          done
            ? 'bg-success text-success-foreground'
            : 'bg-warning text-warning-foreground'
        }`}
      >
        {done ? (
          <CheckCircle2 aria-hidden="true" className="size-4" />
        ) : (
          <AlertTriangle aria-hidden="true" className="size-4" />
        )}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground wrap-break-word">
          {description}
        </p>
      </div>
    </div>
  );
}

function KardexMetric({ label, value, tone = 'default' }: KardexMetricProps) {
  const toneClass = {
    default: 'text-foreground',
    success: 'text-success',
    danger: 'text-destructive',
    warning: 'text-warning',
  }[tone];

  return (
    <div className="rounded-md border border-border/70 bg-card px-4 py-3">
      <div className={`text-2xl font-semibold tracking-tight ${toneClass}`}>
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

type KardexRow = (typeof kardexRows)[number];

function KardexProgress({ row }: { row: KardexRow }) {
  if (row.final !== null) return <span>Nota final registrada</span>;

  const partials = 'partials' in row ? row.partials as Record<string, number | undefined> : undefined;
  if (!partials) return <span>Sin nota final</span>;

  const labels = [
    partials.t1 !== undefined ? `T1 ${partials.t1}` : undefined,
    partials.t2 !== undefined ? `T2 ${partials.t2}` : undefined,
    partials.t3 !== undefined ? `T3 ${partials.t3}` : undefined,
    partials.p1 !== undefined ? `P1 ${partials.p1}` : undefined,
  ].filter(Boolean);

  return <span>{labels.length > 0 ? labels.join(' · ') : 'En evaluación'}</span>;
}

function ResultBadge({ result }: { result: string }) {
  if (result === 'APR') {
    return (
      <Badge className="rounded-sm bg-success text-success-foreground">
        <CheckCircle2 aria-hidden="true" data-icon="inline-start" />
        APR
      </Badge>
    );
  }

  if (result === 'REP') {
    return (
      <Badge variant="destructive" className="rounded-sm">
        <XCircle aria-hidden="true" data-icon="inline-start" />
        REP
      </Badge>
    );
  }

  if (result === 'ABA') {
    return (
      <Badge className="rounded-sm bg-warning text-warning-foreground">
        <XCircle aria-hidden="true" data-icon="inline-start" />
        ABA
      </Badge>
    );
  }

  return (
    <Badge className="rounded-sm bg-primary/10 text-primary hover:bg-primary/10">
      <Clock3 aria-hidden="true" data-icon="inline-start" />
      En curso
    </Badge>
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
