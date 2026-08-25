import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Abdul Moiz",
    title: "Front-end & Full-Stack Developer",
    location: "Rawalpindi / Islamabad, Pakistan",
    email: "moizfreelance01@gmail.com",
    phone: "0331-9948876",
    tagline: "Building scalable web applications, multi-tenant portals, and modern digital experiences.",
    github: "https://github.com/moiz962748-ai",
    linkedin: "https://linkedin.com/in/abdul-moiz-malik112",
    portfolioUrl: "https://abdulmoiz-webportfolio.netlify.app",
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Academic CGPA", value: "3.74" },
      { label: "Core Focus", value: "100% Modern Web" }
    ]
  },
  services: [
    {
      id: "01",
      title: "Frontend & Web App Development",
      description: "Pixel-perfect, mobile-first responsive interfaces using Next.js, React, Tailwind CSS, and Framer Motion.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"]
    },
    {
      id: "02",
      title: "Multi-Tenant Portals & CMS",
      description: "Architecture and frontend styling for admin, partner, and customer-facing multi-tenant web platforms.",
      tags: ["Next.js", "NestJS Integration", "RBAC", "Tailwind CSS"]
    },
    {
      id: "03",
      title: "WordPress & WooCommerce Solutions",
      description: "Custom elementor themes, high-converting checkout flows, variable products, SEO, and performance optimization.",
      tags: ["WordPress", "WooCommerce", "Elementor", "On-Page SEO"]
    },
    {
      id: "04",
      title: "Full-Stack & API Integrations",
      description: "Connecting intuitive frontends with secure backend architectures, JWT auth, Supabase, and REST APIs.",
      tags: ["REST APIs", "Supabase", "MongoDB", "PostgreSQL"]
    }
  ],
  marqueeTech: [
    "React.js", "Next.js", "JavaScript (ES6)", "Tailwind CSS", "TypeScript",
    "WordPress", "WooCommerce", "Supabase", "MongoDB", "NestJS", "PostgreSQL", "Git/GitHub"
  ],
  projects: [
    {
      title: "KaamYab Pakistan Platform",
      category: "Full-Stack Web App",
      description: "Opportunity finder connecting youth with jobs, scholarships, and internships across 20+ cities with dynamic CV Builder & PDF export.",
      tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      demoUrl: "#",
      featured: true
    },
    {
      title: "JazzWorld Multi-Tenant CMS",
      category: "Enterprise System",
      description: "Engineered user-facing portals across Admin, Partner, and Customer views integrated with NestJS backend.",
      tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      demoUrl: "#",
      featured: true
    },
    {
      title: "Nexus Investor & Entrepreneur Platform",
      category: "SaaS & Networking",
      description: "Role-based dashboards, meeting scheduling, document uploads, and MongoDB Atlas data pipelines.",
      tech: ["React.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      demoUrl: "#",
      featured: true
    },
    {
      title: "Truck Dispatching Management System",
      category: "Logistics & Dashboard",
      description: "Responsive React frontend with JWT authentication and full REST API backend integration.",
      tech: ["React.js", "MongoDB", "REST APIs", "Bootstrap"],
      demoUrl: "#",
      featured: false
    },
    {
      title: "E-Commerce Shopping Mart",
      category: "WordPress & WooCommerce",
      description: "Responsive storefront with variable products, custom attributes, localized COD checkout, and optimized cart flows.",
      tech: ["WordPress", "WooCommerce", "Elementor", "SEO"],
      demoUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      category: "Productivity",
      description: "Component-based architecture with React hooks, Supabase Auth, and SQL-based real-time CRUD operations.",
      tech: ["React.js", "Supabase", "SQL", "Tailwind CSS"],
      demoUrl: "#",
      featured: false
    }
  ],
  arsenal: {
    frontend: ["React.js", "Next.js", "JavaScript (ES6)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "jQuery", "Framer Motion"],
    backendAndDb: ["Node.js", "NestJS (Working Knowledge)", "Supabase", "MongoDB", "PostgreSQL", "MySQL", "REST APIs", "JWT Auth"],
    cmsAndTools: ["WordPress", "WooCommerce", "Elementor", "Git & GitHub", "Postman", "VS Code", "Chrome DevTools"],
    designAndMedia: ["Adobe Photoshop", "Adobe Premiere Pro", "Responsive UI Design", "Cross-browser Testing"]
  },
  experience: [
    {
      company: "Jazz World (Teknosys)",
      role: "Software Development Intern",
      period: "July 2026 - Present",
      location: "Islamabad, Pakistan",
      highlights: [
        "Built and styled user-facing pages for a multi-tenant CMS e-commerce system across Admin, Partner, and Customer portals using Next.js and Tailwind CSS.",
        "Collaborated with backend engineers (NestJS, PostgreSQL via Supabase) to ensure seamless UI and API data flow.",
        "Followed structured Git/GitHub workflows for daily version control and feature delivery."
      ],
      skills: ["Next.js", "React", "Tailwind CSS", "NestJS", "PostgreSQL", "Supabase"]
    },
    {
      company: "Developers Hub Corporation",
      role: "Full Stack Web Development Intern",
      period: "Apr 2026 - May 2026",
      location: "Islamabad, Pakistan",
      highlights: [
        "Designed and implemented a responsive React frontend for a Truck Dispatching Management System, integrating backend REST APIs.",
        "Performed cross-browser testing and UI debugging to guarantee consistent performance across devices.",
        "Collaborated with team leads using Git/GitHub to maintain clean, modular code."
      ],
      skills: ["React.js", "REST APIs", "Cross-browser Testing", "Git/GitHub"]
    },
    {
      company: "Watch Times (Media House)",
      role: "WordPress Development Intern",
      period: "Jul 2024 - Sep 2024",
      location: "Islamabad, Pakistan",
      highlights: [
        "Designed and developed professional WordPress portfolio sites and WooCommerce online stores.",
        "Customized premium themes and built mobile-responsive layouts with Elementor Page Builder.",
        "Configured on-page SEO, security, and performance plugins while producing media assets using Photoshop and Premiere Pro."
      ],
      skills: ["WordPress", "WooCommerce", "Elementor", "Photoshop", "Premiere Pro"]
    }
  ],
  education: {
    institution: "SZABIST University",
    degree: "B.S. Computer Science",
    period: "Sep 2023 - Expected Jun 2027",
    cgpa: "3.74 / 4.00"
  },
  certifications: [
    { title: "WordPress Development", issuer: "DigiSkills 3.0 (Govt. of Pakistan / Virtual University)" },
    { title: "Freelancing & Graphic Designing", issuer: "DigiSkills (Govt. of Pakistan / Virtual University)" },
    { title: "Data Analytics & Business Intelligence", issuer: "DigiSkills (Govt. of Pakistan / Virtual University)" }
  ]
};