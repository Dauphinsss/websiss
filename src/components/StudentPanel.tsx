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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
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

const kardexLegend = [
  { code: 'APR', label: 'Aprobada' },
  { code: 'REP', label: 'Reprobada' },
  { code: 'ABA', label: 'Abandonada' },
  { code: 'CUR', label: 'En curso' },
] as const;

const resultLabels: Record<string, string> = {
  APR: 'Aprobada',
  REP: 'Reprobada',
  ABA: 'Abandonada',
  CUR: 'En curso',
};

const kardexRows = [
  {
    year: 2023,
    term: 1,
    code: '1803001',
    subject: 'Ingles I',
    level: 'A',
    type: 'Regular',
    mode: 'Me',
    validation: '-',
    group: '4',
    practicalGroup: '-',
    partials: { t1: 78, t2: 84 },
    finalExam: '-',
    secondInstance: '-',
    final: 81,
    result: 'APR',
  },
  {
    year: 2023,
    term: 1,
    code: '2006063',
    subject: 'Fisica General',
    level: 'A',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: 'B2',
    practicalGroup: 'P3',
    partials: { t1: 28, t2: 37, p1: 42, p2: 35 },
    finalExam: 45,
    secondInstance: 33,
    final: 33,
    result: 'REP',
  },
  {
    year: 2023,
    term: 1,
    code: '2008019',
    subject: 'Algebra I',
    level: 'A',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '10',
    practicalGroup: '-',
    partials: { t1: 55, t2: 62 },
    finalExam: '-',
    secondInstance: '-',
    final: 60,
    result: 'APR',
  },
  {
    year: 2023,
    term: 1,
    code: '2008054',
    subject: 'Calculo I',
    level: 'A',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '10',
    practicalGroup: '-',
    partials: { t1: 34, t2: 39 },
    finalExam: 72,
    secondInstance: '-',
    final: 51,
    result: 'APR',
  },
  {
    year: 2023,
    term: 1,
    code: '2010010',
    subject: 'Introduccion a la Programacion',
    level: 'A',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '2',
    practicalGroup: '-',
    partials: { t1: 58, t2: 54 },
    finalExam: '-',
    secondInstance: '-',
    final: 56,
    result: 'APR',
  },
  {
    year: 2024,
    term: 2,
    code: '2010053',
    subject: 'Taller de Base de Datos',
    level: 'F',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '3',
    practicalGroup: '-',
    partials: { t1: 22, t2: 30 },
    finalExam: 39,
    secondInstance: 26,
    final: 26,
    result: 'REP',
  },
  {
    year: 2024,
    term: 2,
    code: '2010203',
    subject: 'Programacion Web',
    level: 'F',
    type: 'Regular',
    mode: 'N',
    validation: 'CV',
    group: '1',
    practicalGroup: '-',
    partials: { t1: 100, t2: 100 },
    finalExam: '-',
    secondInstance: '-',
    final: 100,
    result: 'APR',
  },
  {
    year: 2025,
    term: 2,
    code: '2010100',
    subject: 'Arquitectura de Software',
    level: 'G',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '1',
    practicalGroup: '-',
    partials: { t1: 100, t2: 100 },
    finalExam: '-',
    secondInstance: '-',
    final: 100,
    result: 'APR',
  },
  {
    year: 2025,
    term: 2,
    code: '2010209',
    subject: 'Seguridad de Sistemas',
    level: 'I',
    type: 'Electiva',
    mode: 'N',
    validation: '-',
    group: '1',
    practicalGroup: '-',
    partials: { t1: 92, t2: 96 },
    finalExam: '-',
    secondInstance: '-',
    final: 94,
    result: 'APR',
  },
  {
    year: 2025,
    term: 3,
    code: '2010040',
    subject: 'Teoria de Automatas y Leng. Formales',
    level: 'E',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '1',
    practicalGroup: '-',
    final: null,
    partials: { t1: 70, t2: 32 },
    finalExam: '-',
    secondInstance: '-',
    result: 'CUR',
  },
  {
    year: 2026,
    term: 1,
    code: '2010019',
    subject: 'Simulacion de Sistemas',
    level: 'G',
    type: 'Electiva',
    mode: 'N',
    validation: '-',
    group: '1',
    practicalGroup: '-',
    final: null,
    partials: { t1: '-', t2: '-' },
    finalExam: '-',
    secondInstance: '-',
    result: 'ABA',
  },
  {
    year: 2026,
    term: 1,
    code: '2010102',
    subject: 'Evaluacion y Auditoria de Sistemas',
    level: 'H',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '1',
    practicalGroup: '-',
    partials: { t1: 85, t2: 91 },
    finalExam: '-',
    secondInstance: '-',
    final: 88,
    result: 'APR',
  },
  {
    year: 2026,
    term: 1,
    code: '2010214',
    subject: 'Taller de Grado I',
    level: 'H',
    type: 'Regular',
    mode: 'N',
    validation: '-',
    group: '7',
    practicalGroup: '-',
    partials: { t1: 86, t2: 90 },
    finalExam: '-',
    secondInstance: '-',
    final: 88,
    result: 'APR',
  },
  {
    year: 2026,
    term: 1,
    code: '2010066',
    subject: 'Procesos Agiles',
    level: 'I',
    type: 'Electiva',
    mode: 'N',
    validation: '-',
    group: '1',
    final: null,
    practicalGroup: '-',
    partials: { t1: 73, t2: 99 },
    finalExam: '-',
    secondInstance: '-',
    result: 'CUR',
  },
  {
    year: 2026,
    term: 1,
    code: '2010079',
    subject: 'Web Semanticas',
    level: 'I',
    type: 'Electiva',
    mode: 'N',
    validation: '-',
    group: '1',
    final: null,
    practicalGroup: '-',
    partials: { t1: 88, t2: '-' },
    finalExam: '-',
    secondInstance: '-',
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

interface GroupDetail {
  teacher: string;
  schedule: string;
  room: string;
}

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
  // Docente, horario y aula propios de cada grupo (en la UMSS un mismo curso
  // se dicta en varios grupos con docentes distintos). Si un grupo no aparece
  // aquí, se usan los campos base (teacher/schedule/room) como respaldo.
  groupDetails?: Record<string, GroupDetail>;
  status: 'available' | 'exam';
}

// Resuelve el docente/horario/aula que corresponden a un grupo concreto.
function getGroupDetail(subject: EnrollmentSubjectOption, group: string): GroupDetail {
  return (
    subject.groupDetails?.[group] ?? {
      teacher: subject.teacher,
      schedule: subject.schedule,
      room: subject.room,
    }
  );
}

function getEnrollmentDetail(
  subject: EnrollmentSubjectOption,
  group: string,
  mode: EnrollmentMode,
): GroupDetail {
  if (mode === 'Mesa') {
    return {
      teacher: 'Docente por confirmar',
      schedule: 'Examen de mesa · fecha por confirmar',
      room: 'Por confirmar',
    };
  }

  return getGroupDetail(subject, group);
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
    groupDetails: {
      '1': {
        teacher: 'Flores Villarroel Corina',
        schedule: 'Mar 6:45-8:15 · Jue 18:45-20:15',
        room: '690D / 690E',
      },
      '2': {
        teacher: 'Vargas Mariscal Rodrigo',
        schedule: 'Lun 9:45-11:15 · Mié 9:45-11:15',
        room: '691A / 691A',
      },
      '3': {
        teacher: 'Camacho Soliz Daniela',
        schedule: 'Mar 14:15-15:45 · Jue 14:15-15:45',
        room: '692B / 692B',
      },
    },
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
    groupDetails: {
      '1': {
        teacher: 'Villarroel Tapia Henry Frank',
        schedule: 'Lun 14:15-15:45 · Mié 6:45-8:15',
        room: '692G / 651',
      },
      '2': {
        teacher: 'Aguilar Peñaranda Marcelo',
        schedule: 'Mar 16:30-18:00 · Jue 16:30-18:00',
        room: '690F / 690F',
      },
    },
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
    groupDetails: {
      '1': {
        teacher: 'Romero Rodriguez Patricia',
        schedule: 'Mar 11:15-12:45 · Mié 8:15-10:30 · Jue 8:15-9:45',
        room: '691F / 690B / 690C',
      },
      '2': {
        teacher: 'Terrazas Quiroga Iván',
        schedule: 'Lun 7:30-9:00 · Mié 7:30-9:00',
        room: '690A / 690A',
      },
      '3': {
        teacher: 'Salinas Crespo Lucía',
        schedule: 'Mar 18:45-20:15 · Jue 18:45-20:15',
        room: '692C / 692C',
      },
    },
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
    teacher: 'Soruco Maita Jose Antonio',
    schedule: 'Lun 7:30-9:00 · Mié 7:30-9:00',
    room: '690A',
    groupDetails: {
      '1': {
        teacher: 'Soruco Maita Jose Antonio',
        schedule: 'Lun 7:30-9:00 · Mié 7:30-9:00',
        room: '690A',
      },
      '2': {
        teacher: 'Catari Rios Raul',
        schedule: 'Lun 15:45-17:15 · Mié 15:45-17:15',
        room: '691B',
      },
      '3': {
        teacher: 'Manchego Castellon Roberto Juan',
        schedule: 'Mar 7:30-9:00 · Jue 7:30-9:00',
        room: '690C',
      },
    },
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
    teacher: 'Hoepfner Reynolds Mauricio',
    schedule: 'Mar 14:15-15:45 · Jue 14:15-15:45',
    room: '692C',
    groupDetails: {
      '1': {
        teacher: 'Hoepfner Reynolds Mauricio',
        schedule: 'Lun 11:15-12:45 · Mié 11:15-12:45',
        room: '691E',
      },
      '2': {
        teacher: 'Lucano Lucano Marcelo Javier',
        schedule: 'Mar 9:45-11:15 · Jue 9:45-11:15',
        room: '692A',
      },
      '3': {
        teacher: 'Flores Soliz Juan Marcelo',
        schedule: 'Mar 14:15-15:45 · Jue 14:15-15:45',
        room: '692C',
      },
    },
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
    teacher: 'Orellana Araoz Jorge Walter',
    schedule: 'Lun 18:45-20:15 · Mié 18:45-20:15',
    room: '691D',
    groupDetails: {
      '1': {
        teacher: 'Orellana Araoz Jorge Walter',
        schedule: 'Lun 18:45-20:15 · Mié 18:45-20:15',
        room: '691D',
      },
      '2': {
        teacher: 'Vargas Antezana Ademar Marcelo',
        schedule: 'Mar 16:30-18:00 · Jue 16:30-18:00',
        room: '690B',
      },
    },
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
    teacher: 'Montecinos Choque Marco Antonio',
    schedule: 'Mar 18:45-20:15 · Jue 20:15-21:45',
    room: '692F',
    groupDetails: {
      '1': {
        teacher: 'Montecinos Choque Marco Antonio',
        schedule: 'Mar 18:45-20:15 · Jue 20:15-21:45',
        room: '692F',
      },
      '2': {
        teacher: 'Bustillos Vargas Alex Israel',
        schedule: 'Lun 20:15-21:45 · Mié 20:15-21:45',
        room: '691F',
      },
    },
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
    teacher: 'Costas Jauregui Vladimir',
    schedule: 'Lun 15:00-16:30 · Vie 15:00-16:30',
    room: '691A',
    groupDetails: {
      '1': {
        teacher: 'Jaldin Rosales K. Rolando',
        schedule: 'Lun 9:45-11:15 · Vie 9:45-11:15',
        room: '690D',
      },
      '2': {
        teacher: 'Costas Jauregui Vladimir',
        schedule: 'Lun 15:00-16:30 · Vie 15:00-16:30',
        room: '691A',
      },
    },
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
    teacher: 'Vargas Antezana Ademar Marcelo',
    schedule: 'Mié 10:30-12:00 · Vie 10:30-12:00',
    room: '690F',
    groupDetails: {
      '1': {
        teacher: 'Vargas Antezana Ademar Marcelo',
        schedule: 'Mié 10:30-12:00 · Vie 10:30-12:00',
        room: '690F',
      },
      '2': {
        teacher: 'Zabalaga Montano Oscar A',
        schedule: 'Mar 11:15-12:45 · Jue 11:15-12:45',
        room: '692B',
      },
    },
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
    teacher: 'Montoya Burgos Yony Richard',
    schedule: 'Mar 9:45-11:15 · Jue 9:45-11:15',
    room: '691E',
    groupDetails: {
      '1': {
        teacher: 'Montoya Burgos Yony Richard',
        schedule: 'Mar 9:45-11:15 · Jue 9:45-11:15',
        room: '691E',
      },
      '2': {
        teacher: 'Davalos Brozovic Jorge',
        schedule: 'Lun 16:30-18:00 · Mié 16:30-18:00',
        room: '690E',
      },
      '3': {
        teacher: 'Peeters Ilonaa Magda Lena',
        schedule: 'Vie 18:45-21:45',
        room: '692D',
      },
    },
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

function getInitialCodeValidation(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('websiss-code-validated') === 'true';
}

function getInitialTuitionPaid(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('websiss-tuition-paid') === 'true';
}

function getInitialEnrollmentFinalized(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('websiss-enrollment-finalized') === 'true';
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

    // Si el estudiante ya interactuó (la clave existe y es un arreglo válido), se respeta
    // su selección aunque haya quedado vacía tras retirar todas las materias. Los valores por
    // defecto solo se usan en la primera visita, cuando la clave aún no existe.
    return valid.slice(0, enrollmentLimit);
  } catch {
    return defaultSelectedEnrollments;
  }
}

function storeSelectedEnrollments(enrollments: SelectedEnrollment[]) {
  window.localStorage.setItem('websiss-selected-enrollments', JSON.stringify(enrollments));
}

const enrollmentReturnStorageKey = 'websiss-return-to-inscripcion';
const enrollmentReturnToastStorageKey = 'websiss-return-to-inscripcion-toast';

type EnrollmentReturnToast = 'tuition-paid' | 'codes-validated';

function markReturnToEnrollment() {
  window.sessionStorage.setItem(enrollmentReturnStorageKey, 'true');
}

function shouldReturnToEnrollment() {
  return window.sessionStorage.getItem(enrollmentReturnStorageKey) === 'true';
}

function clearReturnToEnrollment() {
  window.sessionStorage.removeItem(enrollmentReturnStorageKey);
}

function storeEnrollmentReturnToast(toastType: EnrollmentReturnToast) {
  window.sessionStorage.setItem(enrollmentReturnToastStorageKey, toastType);
}

function consumeEnrollmentReturnToast() {
  const toastType = window.sessionStorage.getItem(enrollmentReturnToastStorageKey);

  if (toastType !== 'tuition-paid' && toastType !== 'codes-validated') return null;

  window.sessionStorage.removeItem(enrollmentReturnToastStorageKey);
  return toastType;
}

interface ScheduleBlock {
  day: string;
  start: number;
  end: number;
}

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map((part) => Number.parseInt(part, 10));
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return Number.NaN;
  return hours * 60 + minutes;
}

// Parsea un horario tipo "Mar 6:45-8:15 · Jue 18:45-20:15" en bloques comparables.
// Ignora entradas sin horario real (p. ej. exámenes de mesa por confirmar).
function parseSchedule(schedule: string): ScheduleBlock[] {
  return schedule
    .split('·')
    .map((segment) => segment.trim())
    .map((segment) => {
      const match = segment.match(/^(\S+)\s+(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/);
      if (!match) return null;
      const [, day, start, end] = match;
      const startMin = toMinutes(start);
      const endMin = toMinutes(end);
      if (Number.isNaN(startMin) || Number.isNaN(endMin)) return null;
      return { day, start: startMin, end: endMin } satisfies ScheduleBlock;
    })
    .filter((block): block is ScheduleBlock => block !== null);
}

function blocksOverlap(a: ScheduleBlock, b: ScheduleBlock): boolean {
  return a.day === b.day && a.start < b.end && b.start < a.end;
}

interface ScheduleConflict {
  a: string;
  b: string;
}

// Devuelve los pares de materias seleccionadas cuyos horarios se solapan.
function getScheduleConflicts(
  subjects: { name: string; schedule: string }[],
): ScheduleConflict[] {
  const conflicts: ScheduleConflict[] = [];

  for (let i = 0; i < subjects.length; i += 1) {
    for (let j = i + 1; j < subjects.length; j += 1) {
      const blocksA = parseSchedule(subjects[i].schedule);
      const blocksB = parseSchedule(subjects[j].schedule);
      const clashes = blocksA.some((blockA) =>
        blocksB.some((blockB) => blocksOverlap(blockA, blockB)),
      );
      if (clashes) {
        conflicts.push({ a: subjects[i].name, b: subjects[j].name });
      }
    }
  }

  return conflicts;
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
  const [isDark, setIsDark] = useState(false);
  const [isCodeValidated, setIsCodeValidated] = useState<boolean>(false);
  const [isTuitionPaid, setIsTuitionPaid] = useState<boolean>(false);
  const [isEnrollmentFinalized, setIsEnrollmentFinalized] = useState(false);
  const [kardexQuery, setKardexQuery] = useState('');
  const [selectedKardexRow, setSelectedKardexRow] = useState<KardexRow | null>(null);
  const [subjectPendingRemoval, setSubjectPendingRemoval] =
    useState<SelectedEnrollmentSubject | null>(null);
  const [isConflictConfirmationOpen, setIsConflictConfirmationOpen] = useState(false);
  const [isKardexDetailDesktop, setIsKardexDetailDesktop] = useState(false);
  const [accessCodes, setAccessCodes] = useState({ third: '', fifth: '' });
  const [codeError, setCodeError] = useState('');
  const [liveMessage, setLiveMessage] = useState('');
  const [selectedEnrollments, setSelectedEnrollments] = useState<SelectedEnrollment[]>(
    defaultSelectedEnrollments,
  );

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    setIsCodeValidated(getInitialCodeValidation());
    setIsTuitionPaid(getInitialTuitionPaid());
    setIsEnrollmentFinalized(getInitialEnrollmentFinalized());
    setSelectedEnrollments(getInitialSelectedEnrollments());
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateDetailMode = () => setIsKardexDetailDesktop(mediaQuery.matches);

    updateDetailMode();
    mediaQuery.addEventListener('change', updateDetailMode);

    return () => mediaQuery.removeEventListener('change', updateDetailMode);
  }, []);

  const announce = (message: string) => {
    setLiveMessage(message);
  };

  const redirectToEnrollmentIfNeeded = (toastType?: EnrollmentReturnToast) => {
    if (!shouldReturnToEnrollment()) return false;

    if (toastType) {
      storeEnrollmentReturnToast(toastType);
    }
    clearReturnToEnrollment();
    window.location.href = '/panel/inscripcion';
    return true;
  };

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('websiss-theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  const initials = getInitials(student.fullName);
  const closeKardexDetail = () => setSelectedKardexRow(null);
  const openPrintView = (buildDocument: () => string, label: string) => {
    const printWindow = window.open('about:blank', '_blank', 'width=1200,height=900');

    if (!printWindow) {
      toast.error('No se pudo abrir la vista de impresión', {
        description: `Habilita ventanas emergentes para imprimir o guardar ${label} en PDF.`,
      });
      return;
    }

    printWindow.document.open();
    printWindow.document.write(buildDocument());
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
    }, 50);
  };
  const openKardexPrintView = () =>
    openPrintView(buildKardexPrintDocument, 'el Kardex');
  const openSchedulePrintView = () =>
    openPrintView(buildSchedulePrintDocument, 'el horario');
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

      if (!subject) return undefined;

      // El horario, docente y aula corresponden al grupo elegido.
      // En modalidad Mesa no se usa horario de clases, por eso no genera choques.
      const detail = getEnrollmentDetail(subject, enrollment.group, enrollment.mode);

      return {
        ...subject,
        ...detail,
        selectedMode: enrollment.mode,
        selectedGroup: enrollment.group,
      };
    })
    .filter((subject): subject is SelectedEnrollmentSubject => Boolean(subject));
  const availableSubjects = enrollmentSubjects.filter(
    (subject) => !selectedSubjectIds.includes(subject.id),
  );
  const remainingSlots = enrollmentLimit - selectedEnrollments.length;
  const scheduleConflicts = useMemo(
    () => getScheduleConflicts(selectedSubjects),
    [selectedSubjects],
  );
  const hasScheduleConflict = scheduleConflicts.length > 0;

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
        const detail = getEnrollmentDetail(subject, group, mode);
        const message = `${subject.name} fue agregada a tu inscripción.`;
        toast.success(subject.name, {
          description: `Materia agregada · Grupo ${group} · ${detail.teacher} · ${mode}`,
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
    if (redirectToEnrollmentIfNeeded('codes-validated')) return;

    toast.success('Cuenta habilitada', {
      description: 'Ya puedes elegir materias y grupos durante el periodo de inscripción.',
    });
    announce('Cuenta habilitada para inscripción.');
  };

  const payTuition = () => {
    window.localStorage.setItem('websiss-tuition-paid', 'true');
    setIsTuitionPaid(true);
    if (redirectToEnrollmentIfNeeded('tuition-paid')) return;

    toast.success('Matrícula pagada', {
      description: `Pago registrado por ${tuitionStatus.method}.`,
    });
    announce('Matrícula pagada. Puedes continuar el flujo de inscripción.');
  };

  const resetEnrollmentDemoState = () => {
    window.localStorage.setItem('websiss-code-validated', 'false');
    window.localStorage.setItem('websiss-tuition-paid', 'false');
    window.localStorage.setItem('websiss-enrollment-finalized', 'false');
    window.sessionStorage.removeItem(enrollmentReturnStorageKey);
    window.sessionStorage.removeItem(enrollmentReturnToastStorageKey);
    window.sessionStorage.removeItem('websiss-enrollment-finalized');

    setIsCodeValidated(false);
    setIsTuitionPaid(false);
    setIsEnrollmentFinalized(false);
    setAccessCodes({ third: '', fifth: '' });
    setCodeError('');

    toast.info('Estado reiniciado', {
      description: 'La matrícula y la validación de códigos volvieron a pendiente.',
    });
    announce('Se reinició el estado de matrícula y de los códigos.');
  };

  const toggleEnrollmentDemoState = () => {
    const next = !isEnrollmentFinalized;
    window.localStorage.setItem('websiss-enrollment-finalized', next ? 'true' : 'false');
    setIsEnrollmentFinalized(next);

    toast.info(next ? 'Inscripción marcada como finalizada' : 'Inscripción reabierta', {
      description: next
        ? 'La sección de inscripción mostrará el estado final del proceso.'
        : 'La inscripción vuelve a permitir edición y selección de materias.',
    });
    announce(next ? 'Inscripción marcada como finalizada.' : 'Inscripción reabierta.');
  };

  const finalizeEnrollment = () => {
    window.sessionStorage.setItem('websiss-enrollment-finalized', 'true');
    announce('Inscripción lista para revisar. Abriendo estado de inscripción.');
    window.location.href = '/panel/estado';
  };

  const requestFinalizeEnrollment = () => {
    if (hasScheduleConflict) {
      setIsConflictConfirmationOpen(true);
      announce('Choque de horarios detectado. Confirma si deseas continuar.');
      return;
    }

    finalizeEnrollment();
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

  useEffect(() => {
    if (page !== 'inscripcion') return;

    const toastType = consumeEnrollmentReturnToast();

    if (toastType === 'tuition-paid') {
      toast.success('Matrícula pagada', {
        description: `Pago registrado por ${tuitionStatus.method}.`,
      });
      announce('Matrícula pagada. Puedes continuar el flujo de inscripción.');
      return;
    }

    if (toastType === 'codes-validated') {
      toast.success('Cuenta habilitada', {
        description: 'Ya puedes elegir materias y grupos durante el periodo de inscripción.',
      });
      announce('Cuenta habilitada para inscripción.');
    }
  }, [page]);

  useEffect(() => {
    if (page === 'inscripcion') {
      clearReturnToEnrollment();
      return;
    }

    if (page === 'codigo' && isCodeValidated) {
      redirectToEnrollmentIfNeeded();
      return;
    }

    if (page === 'matricula' && isTuitionPaid) {
      redirectToEnrollmentIfNeeded();
    }
  }, [isCodeValidated, isTuitionPaid, page]);

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
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={(event) => {
                    event.preventDefault();
                    resetEnrollmentDemoState();
                  }}
                  className="justify-between gap-3"
                >
                  <span className="flex items-center gap-2">
                    <Trash2 aria-hidden="true" />
                    <span>Reiniciar demo</span>
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                      isTuitionPaid && isCodeValidated
                        ? 'bg-success/15 text-success'
                        : isTuitionPaid || isCodeValidated
                          ? 'bg-primary/12 text-primary'
                          : 'bg-warning/15 text-warning'
                    }`}
                  >
                    {isTuitionPaid && isCodeValidated
                      ? 'Completo'
                      : isTuitionPaid || isCodeValidated
                        ? 'En curso'
                    : 'Pendiente'}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(event) => {
                    event.preventDefault();
                    toggleEnrollmentDemoState();
                  }}
                  className="justify-between gap-3"
                >
                  <span className="flex items-center gap-2">
                    <ListChecks aria-hidden="true" />
                    <span>Estado inscripción</span>
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                      isEnrollmentFinalized
                        ? 'bg-success/15 text-success'
                        : 'bg-warning/15 text-warning'
                    }`}
                  >
                    {isEnrollmentFinalized ? 'Finalizada' : 'Abierta'}
                  </span>
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

      <main id="main-content" className="mx-auto max-w-6xl px-5 sm:px-8 py-10 lg:py-14 space-y-10">
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
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-warning px-2.5 py-1 text-[11px] font-medium text-warning-foreground ring-1 ring-warning/40">
                    <AlertTriangle aria-hidden="true" className="size-3" />
                    Abierto hasta el 30 de junio
                  </span>
                  <span
                    className={`ml-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${
                      isTuitionPaid
                        ? 'bg-success text-success-foreground ring-success/40'
                        : 'bg-warning text-warning-foreground ring-warning/40'
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

            {!isEnrollmentFinalized && (
              isTuitionPaid && isCodeValidated && selectedSubjectIds.length > 0 ? (
                <Button type="button" onClick={requestFinalizeEnrollment}>
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
              )
            )}
          </div>

          {isEnrollmentFinalized ? (
            <Card className="border-success/25 bg-success/10">
              <CardContent className="grid gap-5 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                    <CheckCircle2 aria-hidden="true" className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-medium tracking-tight">
                      Inscripción finalizada
                    </h3>
                    <p className="max-w-2xl text-sm text-muted-foreground">
                      Tu inscripción ya fue enviada. Desde aquí puedes revisar el estado,
                      consultar tu horario o volver al panel para otras actividades académicas.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <Button asChild>
                    <a href="/panel/estado">
                      <ClipboardCheck aria-hidden="true" />
                      <span>Ver estado de inscripción</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-background">
                    <a href="/panel/horario">
                      <CalendarClock aria-hidden="true" />
                      <span>Ver horario</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-background">
                    <a href="/panel">
                      <ArrowRight aria-hidden="true" />
                      <span>Otras actividades</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
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
                      <a href="/panel/matricula" onClick={markReturnToEnrollment}>
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
                      <a href="/panel/codigo" onClick={markReturnToEnrollment}>
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
                        onRemove={() => setSubjectPendingRemoval(subject)}
                      />
                    ))}
                  </div>

                  {hasScheduleConflict && (
                    <div
                      className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm"
                      role="alert"
                    >
                      <div className="flex gap-2">
                        <AlertTriangle
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-destructive"
                        />
                        <div className="space-y-1">
                          <p className="font-medium text-destructive">
                            Choque de horarios detectado
                          </p>
                          <ul className="list-disc space-y-0.5 pl-4 text-muted-foreground">
                            {scheduleConflicts.map((conflict) => (
                              <li key={`${conflict.a}-${conflict.b}`}>
                                {conflict.a} y {conflict.b} se solapan.
                              </li>
                            ))}
                          </ul>
                          <p className="text-muted-foreground">
                            Puedes cambiar grupo, retirar una materia o continuar bajo tu responsabilidad.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

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
          )}
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
              <Button type="button" variant="outline" size="sm" onClick={openSchedulePrintView}>
                <Printer aria-hidden="true" />
                <span>Imprimir / Descargar PDF</span>
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

            {!isEnrollmentFinalized && (
              <Button asChild>
                <a href="/panel/inscripcion">
                  <Plus aria-hidden="true" />
                  <span>Modificar inscripción</span>
                </a>
              </Button>
            )}
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
                {selectedSubjects.length === 0 ? (
                  <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
                    <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <ClipboardCheck aria-hidden="true" className="size-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Aún no tienes materias inscritas</p>
                      <p className="text-sm text-muted-foreground">
                        Cuando inscribas materias aparecerán aquí con su grupo y modalidad.
                      </p>
                    </div>
                    {!isEnrollmentFinalized && (
                      <Button asChild size="sm" className="mt-1">
                        <a href="/panel/inscripcion">
                          <Plus aria-hidden="true" />
                          <span>Inscribirme a materias</span>
                        </a>
                      </Button>
                    )}
                  </div>
                ) : (
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
                        <div className="text-sm text-muted-foreground">
                          {subject.teacher}
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
                )}
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
              <Button type="button" variant="outline" size="sm" onClick={openKardexPrintView}>
                <Printer aria-hidden="true" />
                <span>Imprimir / Descargar PDF</span>
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

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md border border-border/60 bg-muted/40 px-4 py-3 text-xs">
            <span className="font-medium text-muted-foreground">Estados:</span>
            {kardexLegend.map((item) => (
              <span key={item.code} className="inline-flex items-center gap-1.5">
                <ResultBadge result={item.code} />
                <span className="text-muted-foreground">= {item.label}</span>
              </span>
            ))}
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
              <div className="divide-y divide-border/60 md:hidden">
                {filteredKardexRows.map((row, index) => (
                  <KardexMobileRow
                    key={`${row.code}-${row.year}-${row.term}`}
                    number={index + 1}
                    row={row}
                    onSelect={() => setSelectedKardexRow(row)}
                  />
                ))}
              </div>

              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/60 hover:bg-muted/60">
                      <TableHead className="w-16">Nro</TableHead>
                      <TableHead className="min-w-72">Materia</TableHead>
                      <TableHead>Nv</TableHead>
                      <TableHead>Tp</TableHead>
                      <TableHead>Md</TableHead>
                      <TableHead>Gr</TableHead>
                      <TableHead className="text-right">T1</TableHead>
                      <TableHead className="text-right">T2</TableHead>
                      <TableHead className="text-right">EF</TableHead>
                      <TableHead className="text-right">2da</TableHead>
                      <TableHead className="text-right">Nota final</TableHead>
                      <TableHead>Estado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredKardexRows.map((row, index) => (
                      <TableRow
                        key={`${row.code}-${row.year}-${row.term}`}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedKardexRow(row)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setSelectedKardexRow(row);
                          }
                        }}
                        className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        aria-label={`Ver detalle de ${row.subject}`}
                        title="Ver código, gestión y detalle completo"
                      >
                        <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                        <TableCell className="font-medium whitespace-normal">
                          {row.subject}
                        </TableCell>
                        <TableCell>{row.level}</TableCell>
                        <TableCell>{getKardexField(row, 'type')}</TableCell>
                        <TableCell>{getKardexField(row, 'mode')}</TableCell>
                        <TableCell>{row.group}</TableCell>
                        <TableCell className="text-right font-medium">
                          {getKardexPartialValue(row, 't1')}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {getKardexPartialValue(row, 't2')}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {getKardexField(row, 'finalExam')}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {getKardexField(row, 'secondInstance')}
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
              </div>

              {filteredKardexRows.length === 0 && (
                <div className="px-6 py-10 text-center text-sm text-muted-foreground">
                  No se encontraron materias con ese criterio.
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        )}

        <KardexDetailOverlay
          row={selectedKardexRow}
          isDesktop={isKardexDetailDesktop}
          onOpenChange={(open) => {
            if (!open) closeKardexDetail();
          }}
        />

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

      <AlertDialog
        open={isConflictConfirmationOpen}
        onOpenChange={setIsConflictConfirmationOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Inscribirte con choque de horarios?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="flex flex-col gap-3">
                <p>
                  Estas materias se solapan. Puedes volver para cambiar grupo o asumir el
                  choque y finalizar la inscripción.
                </p>
                <ul className="list-disc pl-4">
                  {scheduleConflicts.map((conflict) => (
                    <li key={`${conflict.a}-${conflict.b}`}>
                      {conflict.a} y {conflict.b}
                    </li>
                  ))}
                </ul>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Revisar grupos</AlertDialogCancel>
            <AlertDialogAction onClick={finalizeEnrollment}>
              Asumir choque y finalizar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={subjectPendingRemoval !== null}
        onOpenChange={(open) => {
          if (!open) setSubjectPendingRemoval(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Retirar esta materia?</AlertDialogTitle>
            <AlertDialogDescription>
              {subjectPendingRemoval
                ? `Se quitará "${subjectPendingRemoval.name}" de tu inscripción. Puedes volver a agregarla mientras el periodo siga abierto.`
                : ''}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (subjectPendingRemoval) {
                  removeSubject(subjectPendingRemoval.id);
                }
                setSubjectPendingRemoval(null);
              }}
            >
              Retirar materia
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
  // En modalidad Mesa no se muestra horario/aula de clases ni genera choques.
  const groupDetail = getEnrollmentDetail(subject, selectedGroup, selectedMode);

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
            {groupDetail.schedule}
          </span>
          <span className="flex items-center gap-2">
            <User aria-hidden="true" className="size-4 shrink-0" />
            {groupDetail.teacher}
          </span>
          <span className="flex items-center gap-2">
            <Building2 aria-hidden="true" className="size-4 shrink-0" />
            Aula {groupDetail.room}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end lg:flex-col lg:items-end">
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
                className="relative w-full sm:w-36 [&_[data-slot=select-value]]:invisible"
                aria-label={`Grupo para ${subject.name}`}
              >
                <SelectValue placeholder="Grupo" />
                <span className="pointer-events-none absolute left-3 right-9 truncate text-left">
                  Grupo {selectedGroup}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {subject.availableGroups.map((group) => {
                    const detail = getGroupDetail(subject, group);
                    const isFull = fullGroups.includes(group);

                    return (
                      <SelectItem
                        key={group}
                        value={group}
                        textValue={`Grupo ${group}`}
                        disabled={isFull}
                      >
                        Grupo {group} · {detail.teacher}{isFull ? ' - sin cupos' : ''}
                      </SelectItem>
                    );
                  })}
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
          className="grid grid-cols-2 sm:w-36"
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
          className="sm:w-36"
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
          <div className="mt-1 text-xs text-muted-foreground">
            Docente: {subject.teacher}
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

function KardexDetailOverlay({
  row,
  isDesktop,
  onOpenChange,
}: {
  row: KardexRow | null;
  isDesktop: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const isOpen = Boolean(row);

  return (
    <>
      <Dialog open={isOpen && isDesktop} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Detalle de materia</DialogTitle>
            <DialogDescription>
              Información académica registrada en el Kardex del estudiante.
            </DialogDescription>
          </DialogHeader>
          {row && <KardexDetailContent row={row} />}
        </DialogContent>
      </Dialog>

      <Drawer open={isOpen && !isDesktop} onOpenChange={onOpenChange} direction="bottom">
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Detalle de materia</DrawerTitle>
            <DrawerDescription>
              Revisa todos los datos visibles del Kardex.
            </DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[62vh] overflow-y-auto px-4 pb-2">
            {row && <KardexDetailContent row={row} />}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button type="button" variant="outline">Cerrar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function KardexMobileRow({
  number,
  row,
  onSelect,
}: {
  number: number;
  row: KardexRow;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full flex-col gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-medium leading-tight">{row.subject}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Nro {number} · Nv {row.level} · {getKardexField(row, 'mode')} · Grupo {row.group}
          </p>
        </div>
        <ResultBadge result={row.result} />
      </div>
      <div className="grid grid-cols-5 gap-2 text-xs text-muted-foreground">
        <span>
          <strong className="block font-medium text-foreground">
            {getKardexPartialValue(row, 't1')}
          </strong>
          T1
        </span>
        <span>
          <strong className="block font-medium text-foreground">
            {getKardexPartialValue(row, 't2')}
          </strong>
          T2
        </span>
        <span>
          <strong className="block font-medium text-foreground">
            {getKardexField(row, 'finalExam')}
          </strong>
          EF
        </span>
        <span>
          <strong className="block font-medium text-foreground">
            {getKardexField(row, 'secondInstance')}
          </strong>
          2da
        </span>
        <span>
          <strong className="block font-medium text-foreground">{row.final ?? '-'}</strong>
          Final
        </span>
      </div>
    </button>
  );
}

function KardexDetailContent({ row }: { row: KardexRow }) {
  const detailItems: Array<{
    label: string;
    value: string | number;
    monospace?: boolean;
  }> = [
    { label: 'Año', value: row.year },
    { label: 'Gestión', value: row.term },
    { label: 'Tipo', value: getKardexField(row, 'type') },
    { label: 'Modalidad', value: getKardexField(row, 'mode') },
    { label: 'Grupo', value: row.group },
    { label: 'Grupo práctico', value: getKardexField(row, 'practicalGroup') },
    { label: 'Convalidación', value: getKardexField(row, 'validation') },
  ].filter((item) => shouldShowKardexValue(item.value));
  const partialEntries = getKardexPartialEntries(row);
  const practiceEntries = getKardexPracticeEntries(row);
  const closingEntries = [
    ['EF', getKardexField(row, 'finalExam')] as const,
    ['2da', getKardexField(row, 'secondInstance')] as const,
  ].filter(([, value]) => shouldShowKardexValue(value));

  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-1.5 md:grid-cols-[minmax(0,1fr)_112px_112px] lg:grid-cols-[minmax(0,1.4fr)_112px_112px]">
        <div className="rounded-md border border-border/50 bg-muted/20 px-3 py-3 md:py-2.5">
          <div className="flex min-h-10 items-center justify-between gap-3">
            <div className="min-w-0 self-center">
              <h3 className="text-sm font-medium leading-tight sm:text-base">{row.subject}</h3>
            </div>
            <div className="flex shrink-0 items-center self-center">
              <ResultBadge result={row.result} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:contents">
          <KardexHeaderCard label="Código" value={row.code} monospace />
          <KardexHeaderCard label="Nivel" value={row.level} />
        </div>
      </div>

      <dl className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {detailItems.map((item) => (
          <KardexDetailItem
            key={item.label}
            label={item.label}
            value={item.value}
            monospace={item.monospace}
            compact
          />
        ))}
      </dl>

      <div
        className={`grid gap-3 md:items-stretch ${
          closingEntries.length > 0
            ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_220px]'
            : 'md:grid-cols-[minmax(0,1fr)_220px]'
        }`}
      >
        {partialEntries.length > 0 && (
          <div className="rounded-md border border-border/70 p-3 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Parciales registrados
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {partialEntries.map(([label, value]) => (
                <KardexScoreBox key={label} label={label.toUpperCase()} value={value} />
              ))}
            </div>

            {practiceEntries.length > 0 && (
              <div className="mt-3 border-t border-border/70 pt-3 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Evaluaciones prácticas
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {practiceEntries.map(([label, value]) => (
                    <KardexScoreBox key={label} label={label.toUpperCase()} value={value} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {closingEntries.length > 0 && (
          <div className="rounded-md border border-border/70 p-3 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Evaluaciones de cierre
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {closingEntries.map(([label, value]) => (
                <KardexScoreBox key={label} label={label} value={value} />
              ))}
            </div>
          </div>
        )}

        <div className="flex h-full flex-col items-center justify-center rounded-md border border-border/70 bg-muted/30 p-3 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Nota final
          </p>
          <p className="mt-2 text-4xl font-semibold tracking-tight">{row.final ?? '-'}</p>
        </div>
      </div>
    </div>
  );
}

function KardexScoreBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex w-[64px] flex-col items-center justify-center rounded-md bg-muted/50 px-2 py-1.5 text-center">
      <p className="w-full text-center text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 w-full text-center text-sm font-semibold leading-none text-foreground">
        {value}
      </p>
    </div>
  );
}

function KardexHeaderCard({
  label,
  value,
  monospace = false,
}: {
  label: string;
  value: string | number;
  monospace?: boolean;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-md border border-border/50 bg-muted/20 px-2.5 py-1.5 text-center">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className={`mt-1 text-sm font-semibold ${monospace ? 'font-mono' : ''}`}>{value}</p>
    </div>
  );
}

function KardexDetailItem({
  label,
  value,
  monospace = false,
  compact = false,
}: {
  label: string;
  value: string | number;
  monospace?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`rounded-md border border-border/70 ${compact ? 'px-2 py-1.5' : 'px-2.5 py-2'}`}>
      <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className={`mt-0.5 ${compact ? 'text-[15px]' : 'text-sm'} font-medium ${monospace ? 'font-mono' : ''}`}>
        {value}
      </dd>
    </div>
  );
}

function getKardexField(row: KardexRow, key: string) {
  const value = key in row ? row[key as keyof KardexRow] : undefined;

  return typeof value === 'string' || typeof value === 'number' ? value : '-';
}

function getKardexPartialValue(row: KardexRow, key: string) {
  const partials = 'partials' in row ? row.partials as Record<string, string | number | undefined> : undefined;

  return partials?.[key] ?? '-';
}

function getKardexPartialEntries(row: KardexRow) {
  const partials = 'partials' in row ? row.partials as Record<string, string | number | undefined> : undefined;
  const entries = ['t1', 't2']
    .map((key) => [key, partials?.[key] ?? '-'] as const)
    .filter(([, value]) => shouldShowKardexValue(value));

  return entries;
}

function getKardexPracticeEntries(row: KardexRow) {
  const partials = 'partials' in row ? row.partials as Record<string, string | number | undefined> : undefined;
  const entries = ['p1', 'p2']
    .map((key) => [key, partials?.[key] ?? '-'] as const)
    .filter(([, value]) => shouldShowKardexValue(value));

  return entries;
}

function shouldShowKardexValue(value: string | number) {
  return value !== '-';
}

function getKardexModeLabel(mode: string | number) {
  if (mode === 'N') return 'N - Normal';
  if (mode === 'Me') return 'Me - Mesa';

  return mode;
}

function getKardexResultLabel(result: string) {
  if (result === 'APR') return 'Aprobado';
  if (result === 'REP') return 'Reprobado';
  if (result === 'ABA') return 'Abandonado';

  return 'En curso';
}

function buildKardexPrintDocument() {
  const printedAt = new Intl.DateTimeFormat('es-BO', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date());

  const rowsHtml = kardexRows
    .map((row, index) => {
      const cells = [
        index + 1,
        row.year,
        row.term,
        row.code,
        row.subject,
        row.level,
        getKardexField(row, 'type'),
        getKardexField(row, 'mode'),
        getKardexField(row, 'validation'),
        row.group,
        getKardexField(row, 'practicalGroup'),
        getKardexPartialValue(row, 't1'),
        getKardexPartialValue(row, 't2'),
        getKardexPartialValue(row, 'p1'),
        getKardexPartialValue(row, 'p2'),
        getKardexField(row, 'finalExam'),
        getKardexField(row, 'secondInstance'),
        row.final ?? '-',
        row.result,
      ];

      return `<tr>${cells
        .map((cell, cellIndex) => {
          const alignCenter = cellIndex !== 4;
          const className = alignCenter ? ' class="center"' : '';
          return `<td${className}>${escapeHtml(String(cell))}</td>`;
        })
        .join('')}</tr>`;
    })
    .join('');

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Kardex ${escapeHtml(student.fullName)}</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        color: #111827;
        background: #ffffff;
      }
      .page {
        padding: 10px 12px 14px;
      }
      .header {
        display: block;
        margin-bottom: 8px;
      }
      .title {
        margin: 0;
        font-size: 15px;
        line-height: 1.2;
      }
      .subtitle,
      .meta,
      .note {
        margin: 2px 0 0;
        font-size: 10px;
        line-height: 1.3;
        color: #4b5563;
      }
      .warning {
        margin: 0 0 6px;
        font-size: 10px;
        line-height: 1.35;
        font-weight: 600;
      }
      .summary {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 4px;
        margin: 8px 0;
      }
      .summary-card {
        border: 1px solid #d1d5db;
        padding: 5px 6px;
        text-align: center;
      }
      .summary-card strong {
        display: block;
        font-size: 12px;
        margin-bottom: 2px;
      }
      .summary-card span {
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6b7280;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        font-size: 8px;
      }
      th, td {
        border: 1px solid #cbd5e1;
        padding: 3px 4px;
        vertical-align: top;
        text-align: left;
        word-break: break-word;
      }
      th {
        background: #f3f4f6;
        font-size: 7px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        text-align: center;
      }
      td.center {
        text-align: center;
      }
      .mono {
        font-family: "Courier New", monospace;
      }
      .footer {
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }
      .footer .note {
        font-size: 9px;
      }
      @page {
        size: A4 portrait;
        margin: 8mm;
      }
      @media print {
        .page { padding: 0; }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <p class="warning">${escapeHtml(student.fullName)} (${escapeHtml(student.sisCode)}) · La información que se presenta a continuación es privada. La presentación en forma impresa, electrónica o por otro medio no constituye documento oficial de la Universidad Mayor de San Simón.</p>
        <h1 class="title">Kardex Académico</h1>
        <p class="subtitle">Estudiante: ${escapeHtml(student.fullName)}</p>
        <p class="meta">Plan de Estudios: ${escapeHtml(activePlan.name)} (${escapeHtml(activePlan.code)})</p>
        <p class="meta">Gestión actual: ${escapeHtml(student.period)} · Emitido: ${escapeHtml(printedAt)}</p>
      </header>

      <section class="summary">
        <div class="summary-card"><strong>${escapeHtml(String(kardexSummary.taken))}</strong><span>Cursadas</span></div>
        <div class="summary-card"><strong>${escapeHtml(String(kardexSummary.approved))}</strong><span>Aprobadas</span></div>
        <div class="summary-card"><strong>${escapeHtml(String(kardexSummary.failed))}</strong><span>Reprobadas</span></div>
        <div class="summary-card"><strong>${escapeHtml(String(kardexSummary.abandoned))}</strong><span>Abandonadas</span></div>
        <div class="summary-card"><strong>${escapeHtml(String(kardexSummary.generalAverage))}</strong><span>Prom. general</span></div>
        <div class="summary-card"><strong>${escapeHtml(String(kardexSummary.approvedAverage))}</strong><span>Prom. aprob.</span></div>
      </section>

      <table>
        <colgroup>
          <col style="width: 4%;" />
          <col style="width: 5%;" />
          <col style="width: 4%;" />
          <col style="width: 7%;" />
          <col style="width: 13%;" />
          <col style="width: 3.5%;" />
          <col style="width: 5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 3.5%;" />
          <col style="width: 4%;" />
          <col style="width: 5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 4.5%;" />
          <col style="width: 5%;" />
          <col style="width: 4.5%;" />
        </colgroup>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Año</th>
            <th>Gst</th>
            <th>Código</th>
            <th>Materia</th>
            <th>Nv</th>
            <th>Tp</th>
            <th>Md</th>
            <th>Cv</th>
            <th>Gr</th>
            <th>GrPr</th>
            <th>T1</th>
            <th>T2</th>
            <th>P1</th>
            <th>P2</th>
            <th>EF</th>
            <th>2da</th>
            <th>NFin</th>
            <th>RFin</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <footer class="footer">
        <p class="note">UMSS · DTIC · webSISS</p>
        <p class="note">Usa la opción Guardar como PDF del navegador si necesitas descargarlo.</p>
      </footer>
    </main>
    <script>
      window.addEventListener('load', () => {
        window.print();
      });
    </script>
  </body>
</html>`;
}

function buildSchedulePrintDocument() {
  const printedAt = new Intl.DateTimeFormat('es-BO', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date());

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const rowsHtml = days
    .map((day) => {
      const sessions = scheduleSessions.filter((session) => session.day === day);

      if (sessions.length === 0) {
        return `<tr><td class="center">${escapeHtml(day)}</td><td colspan="5" class="muted">Sin clases</td></tr>`;
      }

      return sessions
        .map((session, index) => {
          const cells = [
            `${escapeHtml(session.start)} - ${escapeHtml(session.end)}`,
            `${escapeHtml(session.subject)} (${escapeHtml(session.code)})`,
            escapeHtml(session.group),
            escapeHtml(session.teacher),
            `${escapeHtml(session.building)} · ${escapeHtml(session.room)}`,
          ];
          const dayCell =
            index === 0
              ? `<td class="center" rowspan="${sessions.length}">${escapeHtml(day)}</td>`
              : '';
          return `<tr>${dayCell}${cells.map((cell) => `<td>${cell}</td>`).join('')}</tr>`;
        })
        .join('');
    })
    .join('');

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Horario ${escapeHtml(student.fullName)}</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        color: #111827;
        background: #ffffff;
      }
      .page { padding: 10px 12px 14px; }
      .header { display: block; margin-bottom: 8px; }
      .title { margin: 0; font-size: 15px; line-height: 1.2; }
      .subtitle, .meta {
        margin: 2px 0 0;
        font-size: 10px;
        line-height: 1.3;
        color: #4b5563;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        font-size: 9px;
      }
      th, td {
        border: 1px solid #cbd5e1;
        padding: 4px 5px;
        vertical-align: top;
        text-align: left;
        word-break: break-word;
      }
      th {
        background: #f3f4f6;
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        text-align: center;
      }
      td.center { text-align: center; vertical-align: middle; font-weight: 600; }
      td.muted { color: #6b7280; }
      .footer {
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }
      .footer .note { font-size: 9px; color: #4b5563; }
      @page { size: A4 portrait; margin: 8mm; }
      @media print { .page { padding: 0; } }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <h1 class="title">Horario de Clases</h1>
        <p class="subtitle">Estudiante: ${escapeHtml(student.fullName)} (${escapeHtml(student.sisCode)})</p>
        <p class="meta">${escapeHtml(activePlan.name)} · Gestión ${escapeHtml(scheduleContext.term)} · Emitido: ${escapeHtml(printedAt)}</p>
      </header>

      <table>
        <colgroup>
          <col style="width: 10%;" />
          <col style="width: 13%;" />
          <col style="width: 30%;" />
          <col style="width: 7%;" />
          <col style="width: 20%;" />
          <col style="width: 20%;" />
        </colgroup>
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario</th>
            <th>Materia</th>
            <th>Gr</th>
            <th>Docente</th>
            <th>Aula</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <footer class="footer">
        <p class="note">UMSS · DTIC · webSISS</p>
        <p class="note">Usa la opción Guardar como PDF del navegador si necesitas descargarlo.</p>
      </footer>
    </main>
    <script>
      window.addEventListener('load', () => {
        window.print();
      });
    </script>
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function ResultBadge({ result }: { result: string }) {
  if (result === 'APR') {
    return (
      <Badge
        title={resultLabels.APR}
        aria-label={resultLabels.APR}
        className="rounded-sm bg-success text-success-foreground"
      >
        <CheckCircle2 aria-hidden="true" data-icon="inline-start" />
        APR
      </Badge>
    );
  }

  if (result === 'REP') {
    return (
      <Badge
        variant="destructive"
        title={resultLabels.REP}
        aria-label={resultLabels.REP}
        className="rounded-sm"
      >
        <XCircle aria-hidden="true" data-icon="inline-start" />
        REP
      </Badge>
    );
  }

  if (result === 'ABA') {
    return (
      <Badge
        title={resultLabels.ABA}
        aria-label={resultLabels.ABA}
        className="rounded-sm bg-warning text-warning-foreground"
      >
        <XCircle aria-hidden="true" data-icon="inline-start" />
        ABA
      </Badge>
    );
  }

  return (
    <Badge
      title={resultLabels.CUR}
      aria-label={resultLabels.CUR}
      className="rounded-sm bg-primary/10 text-primary hover:bg-primary/10"
    >
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
