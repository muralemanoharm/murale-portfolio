export const personalInfo = {
  name: "Murale Manohar M",
  role: "Backend Java Developer",
  tagline: "Software Engineer · Backend Systems · Java",
  email: "muralemanoharm@gmail.com",
  phone: "+91 9361144291",
  location: "Tiruchirappalli, India",
  github: "https://github.com/muralemanoharm",
  linkedin: "www.linkedin.com/in/murale-manohar-m-646284190",
  summary:
    "Backend Java Developer with 3+ years of experience designing and scaling REST APIs, automation frameworks, and internal developer tooling at Zoho. Proficient in Java, Spring Boot, MySQL, Maven, Docker, and TestNG. Experienced in CI/CD pipelines, test automation, and AI-assisted development. Strong foundation in OOP, multithreading, and distributed system concepts.",
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
    id: "packlio",
    name: "Packlio",
    type: "Personal Project",
    typeColor: "indigo",
    description:
      "AI-powered SaaS tool that converts product images into marketplace listings for Etsy, Gumroad, and Creative Market sellers via a multi-agent pipeline (Claude API, Ideogram v3). Includes Razorpay payment integration with a four-tier subscription model and automated email workflows via Resend. Serverless backend on Supabase with Row Level Security and multi-tenant auth.",
    stack: ["Next.js 14", "Supabase", "Claude API", "Ideogram v3", "Razorpay", "Docker", "TypeScript"],
    impact: "Target 1K+ users",
    status: "Building",
    statusColor: "amber",
    highlight: true,
  },
  {
    id: "eclipse-plugin",
    name: "Eclipse Project Builder Plugin",
    type: "Work Project",
    typeColor: "teal",
    description:
      "Extended Eclipse's Incremental Project Builder API to automate builds on file save, eliminating manual build triggers during development. Implemented delta-based build targeting, only modified files are compiled, reducing build time by 60% and boosting team productivity by 80%.",
    stack: ["Java", "Eclipse API", "Apache Ant", "Incremental Build API"],
    impact: "60% faster builds",
    status: "Shipped",
    statusColor: "green",
  },
  {
    id: "cud-framework",
    name: "CUD Framework",
    type: "Work Project",
    typeColor: "teal",
    description:
      "Architected a configuration-driven Create-Update-Delete framework over Java Servlets, eliminating 80% of boilerplate code and cutting development time by 40%. Implemented automatic table relationship management and dynamic query generation, adopted team-wide to standardise database operations.",
    stack: ["Java", "MySQL", "Java Servlets", "JDBC"],
    impact: "40% faster dev cycles",
    status: "Shipped",
    statusColor: "green",
  },
  {
    id: "product-assets",
    name: "Product Assets Module",
    type: "Work Project",
    typeColor: "teal",
    description:
      "Contributed to the Product Assets module at Zoho, centralising inventory of 50,000+ servers and domain records for audit and compliance workflows. The platform serves 500+ internal users. Built and maintained a large portion of the backend API surface across the module.",
    stack: ["Java", "Java Servlets", "MySQL", "REST APIs"],
    impact: "500+ internal users",
    status: "Shipped",
    statusColor: "green",
  },
];

export const techStack = {
  languages: ["Java", "SQL", "Python"],
  frameworks: ["Spring Boot", "TestNG"],
  databases: ["MySQL"],
  tools: ["Apache Kafka", "Apache Maven", "Apache Ant", "Docker", "Git", "CI/CD Pipelines"],
  aiTools: [
    {
      name: "Claude (Anthropic)",
      use: "Code review, daily assistant",
      icon: "bot",
    },
    {
      name: "Claude Code",
      use: "Agentic coding, full-project scaffolding",
      icon: "terminal",
    },
    {
      name: "GitHub Copilot",
      use: "Inline autocomplete + Agents for code generation",
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
    role: "Software Engineer",
    period: "Jan 2023 – Present",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Full-Time",
    highlights: [
      "Designed and maintained 100+ REST APIs using Java Servlets, enabling seamless integrations across internal systems and reducing inter-team dependency resolution time",
      "Built and owned the Product Assets module serving 500+ internal users, centralising inventory of 50,000+ servers and domains to support audit and compliance workflows",
      "Engineered an automation testing framework using TestNG with MySQL-backed result persistence, enabling data-driven build validation and cutting manual QA effort by 30%",
      "Optimised critical MySQL queries and schema design for test result storage and validation records, improving report generation performance",
      "Contributed to a centralised logging system by implementing enhancements on the Apache Kafka pipeline, improving log routing reliability across multiple backend services",
      "Applied multithreading and concurrent programming to build high-throughput backend components handling parallel API requests",
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
  publicationUrl: "https://link.springer.com/chapter/10.1007/978-981-99-4577-1_6",
};
