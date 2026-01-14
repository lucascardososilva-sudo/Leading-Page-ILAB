import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export interface ModuleTrack {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export enum SectionId {
  HERO = 'hero',
  MISSION = 'mission',
  SQUADS = 'squads',
  EDUCATION = 'education',
  REYNART = 'reynart',
  CONTACT = 'contact',
}