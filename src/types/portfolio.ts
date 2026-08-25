export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  detail?: string;
}

export interface PersonalDetails {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  tagline: string;
  github: string;
  linkedin: string;
  portfolioUrl?: string;
  stats: StatItem[];
  timezone?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id?: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verifyUrl?: string;
}

export interface PortfolioData {
  personal: PersonalDetails;
  services: ServiceItem[];
  marqueeTech: string[];
  projects: ProjectItem[];
  arsenal: {
    frontend: string[];
    backendAndDb: string[];
    cmsAndTools: string[];
    designAndMedia: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem;
  certifications: CertificationItem[];
}
