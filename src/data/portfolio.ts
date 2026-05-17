export const personalInfo = {
  name: "Murale Manohar M",
  role: "Backend Java Developer",
  tagline: "Building scalable systems at Zoho. Targeting FAANG.",
  email: "muralemanoharm@gmail.com",
  phone: "+91 9361144291",
  location: "Tiruchirappalli, India",
  github: "https://github.com/muralemanoharm",
  linkedin: "www.linkedin.com/in/murale-manohar-m-646284190",
  summary:
    "Backend Java Developer with 3+ years at Zoho building scalable APIs, automation frameworks, and productivity tools. Skilled in Java, Servlets, TestNG, MySQL, Apache Ant, and Maven. Experienced in CI/CD pipelines, Eclipse plugin development, and custom framework design.",
};

export interface Project {
  id: string;
  name: string;
  type: string;
  typeColor: "teal" | "indigo";
  description: string;
  stack: string[];
  impact: string;
  status: string;
  statusColor: "green" | "amber";
  highlight?: boolean;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "eclipse-plugin",
    name: "Eclipse Project Builder Plugin",
    type: "Work Project",
    typeColor: "teal",
    description:
      "Custom Eclipse plugin extending the Incremental Project Builder API — enables automated builds on file save, targeting only modified files. Boosted developer productivity by 80% by eliminating manual build triggers.",
    stack: ["Java", "Eclipse API", "Apache Ant", "Incremental Build API"],
    impact: "80% productivity boost",
    status: "Shipped",
    statusColor: "green",
  },
  {
    id: "cud-framework",
    name: "CUD Framework",
    type: "Work Project",
    typeColor: "teal",
    description:
      "Configuration-driven Create-Update-Delete framework that auto-manages table relationships and executes database operations. Cut boilerplate servlet code by 80% and reduced development time by 40% across the team.",
    stack: ["Java", "MySQL", "Java Servlets", "JDBC"],
    impact: "40% faster dev cycles",
    status: "Shipped",
    statusColor: "green",
  },
  {
    id: "product-assets",
    name: "Product Assets System",
    type: "Work Project",
    typeColor: "teal",
    description:
      "Internal asset inventory platform serving 200+ Zoho users. Centralises and displays 10,000+ servers and domain records for audit and compliance workflows. Built and maintained 70+ backend APIs.",
    stack: ["Java", "Java Servlets", "MySQL", "REST APIs"],
    impact: "200+ internal users",
    status: "Shipped",
    statusColor: "green",
  },
  {
    id: "packlio",
    name: "Packlio",
    type: "Personal Project",
    typeColor: "indigo",
    description:
      "AI-powered product listing generator for global marketplace sellers on Etsy, Gumroad, and Creative Market. Upload a product image — Claude Vision generates SEO-optimised titles, descriptions, and tags instantly.",
    stack: ["Next.js 14", "Supabase", "Claude API", "Razorpay", "Vercel", "TypeScript"],
    impact: "Target $1K MRR",
    status: "Building",
    statusColor: "amber",
    highlight: true,
    url: "https://packlio.app",
  },
];

export const techStack = {
  languages: ["Java", "SQL", "Python"],
  frameworks: ["Spring Boot", "TestNG", "Apache Maven", "Apache Ant"],
  databases: ["MySQL"],
  tools: ["Git", "Eclipse", "VS Code", "Kafka", "CI/CD"],
  aiTools: [
    {
      name: "Claude (Anthropic)",
      use: "Code review, Packlio API, daily assistant",
      icon: "bot",
    },
    {
      name: "Claude Code",
      use: "Agentic coding, full-project scaffolding",
      icon: "terminal",
    },
    {
      name: "GitHub Copilot",
      use: "Inline autocomplete in Eclipse & VS Code",
      icon: "zap",
    },
  ],
};

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Zoho Corporation Pvt Ltd",
    role: "Software Developer",
    period: "Jan 2023 – Present",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Full-Time",
    highlights: [
      "Developed and maintained 70+ backend APIs using Java Servlets across internal systems",
      "Built automation testing framework on TestNG that captures results in MySQL for data-driven build validation",
      "Contributed to Product Assets platform serving 200+ internal users with 10,000+ server and domain records",
      "Applied Java OOPS, multithreading, and collections to build scalable concurrent backend components",
      "Worked with Git for version control and collaborated across engineering teams",
    ],
  },
  {
    company: "Packlio",
    role: "Founder & Solo Developer",
    period: "2025 – Present",
    location: "Remote",
    type: "Personal Venture",
    highlights: [
      "Building AI-powered SaaS for marketplace sellers using Next.js, Supabase, and Claude API",
      "Designed full product: pricing model, user flows, AI listing pipeline, and payment integration",
      "Tech stack: Next.js 14, Supabase, Claude Sonnet (vision), Razorpay, Vercel",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering in Mechatronics",
  institution: "Thiagarajar College of Engineering",
  period: "Jul 2019 – May 2023",
  location: "Madurai, Tamil Nadu",
  cgpa: "8.86",
  publication:
    "Vijayalakshmi, M., Shaambhavi, S., Murale Manohar, M (2023). Mobile Malware Detection: A Comparative Study of Machine Learning Models. Springer, Singapore. CVR 2023.",
};
