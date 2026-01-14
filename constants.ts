import { 
  Cpu, 
  Scale, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  Globe, 
  Code2, 
  Briefcase, 
  Zap,
  Layers,
  Rocket,
  BrainCircuit,
  Database,
  TrendingUp
} from 'lucide-react';
import { NavItem, ModuleTrack } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Ecossistema', href: '#mission' },
  { label: 'Os Squads', href: '#squads' },
  { label: 'Módulos', href: '#education' },
  { label: 'Estúdio Reynart', href: '#reynart' },
];

export const MODULE_1_BUSINESS = [
  { title: "Fundamentos de Direito 4.0", icon: Scale },
  { title: "Cultura de Inovação", icon: Lightbulb },
  { title: "Modelos de Negócios e Storytelling", icon: Rocket },
  { title: "Neuroinovação e Design Thinking", icon: BrainCircuit },
];

export const MODULE_1_TECH = [
  { title: "Programação com IA", icon: Code2 },
  { title: "Novas Tendências", icon: TrendingUp },
  { title: "Data Science", icon: Database },
  { title: "Cibersegurança", icon: ShieldCheck },
];

// Mantemos o export antigo como fallback ou vazio se necessário, 
// mas a lógica agora usará os dois arrays acima.
export const MODULE_1_TOPICS = [...MODULE_1_BUSINESS, ...MODULE_1_TECH];

export const MODULE_2_TRACKS: ModuleTrack[] = [
  {
    title: "Trilha de Tecnologia",
    description: "Frontend, Backend e Engenharia de IA suficiente para prototipagem rápida.",
    tags: ["UX Design", "Engenharia de IA", "Prototipagem"],
    icon: Code2
  },
  {
    title: "Trilha de Negócios",
    description: "De Design Thinking a Venture Capital e mercados de Inovação Jurídica.",
    tags: ["VC", "Design de Produto", "Mapeamento de Mercado"],
    icon: Briefcase
  },
  {
    title: "Trilha de Polinização",
    description: "A ponte obrigatória. Conectando Tech, Direito e Negócios através de mentoria.",
    tags: ["Interdisciplinar", "Mentoria", "Fusão"],
    icon: Zap
  }
];

export const SQUAD_FEATURES = [
  {
    title: "Problemas Reais",
    description: "Squads não simulam. Eles herdam desafios reais de parceiros institucionais para solucionar.",
    icon: Layers
  },
  {
    title: "Estrutura de Startup",
    description: "Operando não como grupos de estudos, mas como micro-startups ágeis com PMs, devs e engenheiros jurídicos.",
    icon: Rocket
  },
  {
    title: "Tecnologias 4IR",
    description: "Utilizando Agentes, Data Science, Blockchain e IoT para construir protótipos funcionais.",
    icon: Cpu
  }
];