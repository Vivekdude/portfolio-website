// ============================================
// VIVEK SHUKLA - PORTFOLIO DATA
// ============================================

export const personalInfo = {
  name: "Vivek Shukla",
  title: "Senior Consultant | Full-Stack & Cloud Engineer",
  tagline:
    "Crafting Scalable Cloud Solutions & Enterprise Applications",
  subtitle:
    "9+ years building robust web applications with .NET, Azure, React & Angular",
  email: "vivek1993.cs@gmail.com",
  linkedin: "https://in.linkedin.com/in/vivekshukla",
  github: "https://github.com/vivekdude",
  phone: "+91-8318892165",
  location: "Gurgaon, India",
  availableForWork: true,
  // Add your hosted resume PDF URL here (e.g. Google Drive share link or /resume.pdf in /public)
  resumeUrl: "/resume.pdf",
};

export const aboutMe = {
  paragraphs: [
    "I'm a passionate Senior Consultant at Deloitte with 9+ years of experience designing and developing robust web applications and cloud-based solutions. I specialize in .NET, Microsoft Azure, React.js, and Angular, building scalable microservices using modern development practices.",
    "Throughout my career, I've led development teams, architected cloud-native solutions on Azure, and delivered enterprise applications that drive real business value. From Azure Functions and Logic Apps to React dashboards and RESTful APIs — I bring full-stack expertise to every project.",
    "I thrive in Agile environments, collaborating closely with clients to translate complex requirements into elegant technical solutions. My focus is always on writing clean, maintainable code while fostering a culture of innovation and continuous learning.",
  ],
  highlights: [
    "Senior Consultant at Deloitte USI",
    "Led development teams on enterprise projects",
    "Azure Certified (AZ-900, AI-900, DP-900)",
    "Expert in CI/CD & Agile methodologies",
  ],
};

export type Proficiency = "Expert" | "Proficient" | "Familiar";

export const skills = {
  backend: {
    title: "Backend & Cloud",
    items: [
      { label: ".NET 8, .NET Core, ASP.NET Web API", level: "Expert" as Proficiency },
      { label: "Azure Functions, Logic Apps, APIM", level: "Expert" as Proficiency },
      { label: "Microservices, Event-Driven Architecture", level: "Expert" as Proficiency },
      { label: "Azure Service Bus, Cosmos DB, Key Vault", level: "Proficient" as Proficiency },
      { label: "Entity Framework Core, LINQ, Node.js", level: "Expert" as Proficiency },
    ],
  },
  frontend: {
    title: "Frontend & UI",
    items: [
      { label: "React 18, Redux Toolkit, React Query", level: "Expert" as Proficiency },
      { label: "Angular 14+, RxJS, NgRx", level: "Expert" as Proficiency },
      { label: "TypeScript, JavaScript (ES6+)", level: "Expert" as Proficiency },
      { label: "Tailwind CSS, Material UI, Chart.js", level: "Proficient" as Proficiency },
      { label: "Responsive Design, PWA, Web Accessibility", level: "Proficient" as Proficiency },
    ],
  },
  devops: {
    title: "DevOps & Database",
    items: [
      { label: "Azure DevOps, CI/CD Pipelines, YAML", level: "Expert" as Proficiency },
      { label: "SQL Server, Cosmos DB, Redis Cache", level: "Proficient" as Proficiency },
      { label: "Docker, Kubernetes, Container Apps", level: "Proficient" as Proficiency },
      { label: "OAuth 2.0, Azure AD B2C, JWT", level: "Expert" as Proficiency },
      { label: "Application Insights, Log Analytics", level: "Proficient" as Proficiency },
    ],
  },
};

export const projects = [
  {
    id: "enterprise-cloud-platform",
    title: "Enterprise Cloud Migration Platform",
    category: "Enterprise Application",
    shortDescription:
      "Led the architecture and development of a large-scale cloud migration platform serving 50,000+ users across multiple regions with 99.9% uptime.",
    problem:
      "A Fortune 500 client needed to modernize their legacy on-premise systems to Azure cloud while ensuring zero downtime and maintaining strict compliance requirements across global operations.",
    solution:
      "Architected a microservices-based platform using .NET Core and Azure Functions with event-driven architecture. Implemented Azure Service Bus for async messaging, Cosmos DB for global distribution, and Azure AD B2C for enterprise SSO.",
    techStack: [
      ".NET Core 8",
      "Azure Functions",
      "Cosmos DB",
      "Azure Service Bus",
      "Azure AD B2C",
      "Application Insights",
    ],
    highlights: [
      "99.9% uptime with auto-scaling",
      "50,000+ active users globally",
      "60% reduction in infrastructure costs",
      "Sub-100ms API response times",
    ],
    role: "Lead Architect & Developer",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "realtime-analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    category: "SaaS Product",
    shortDescription:
      "Built a high-performance analytics platform processing 1M+ events daily with real-time visualizations and AI-powered insights.",
    problem:
      "Business teams needed real-time visibility into operational metrics but existing tools couldn't handle the data volume or provide actionable insights quickly enough for decision-making.",
    solution:
      "Developed a React-based dashboard with Azure SignalR for real-time updates, integrated with .NET Core APIs and Azure Stream Analytics. Implemented Chart.js and D3.js for interactive visualizations with drill-down capabilities.",
    techStack: [
      "React 18",
      "TypeScript",
      ".NET Core",
      "Azure SignalR",
      "Azure Stream Analytics",
      "Power BI Embedded",
    ],
    highlights: [
      "1M+ events processed daily",
      "Real-time updates via SignalR",
      "Custom report builder with exports",
      "AI-powered anomaly detection",
    ],
    role: "Full-Stack Developer",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "api-gateway-platform",
    title: "Microservices API Gateway",
    category: "API & Integration",
    shortDescription:
      "Designed and implemented a centralized API gateway managing 25+ microservices with advanced security, rate limiting, and comprehensive monitoring.",
    problem:
      "Multiple development teams were building independent services without standardized security, logging, or API management, leading to inconsistent client experiences and security vulnerabilities.",
    solution:
      "Built a unified API layer using Azure API Management with custom policies for authentication, rate limiting, and request transformation. Implemented OAuth 2.0/OpenID Connect with Azure AD and comprehensive logging via Application Insights.",
    techStack: [
      "Azure APIM",
      "Azure Functions",
      ".NET Core",
      "OAuth 2.0",
      "Azure Key Vault",
      "Application Insights",
    ],
    highlights: [
      "25+ microservices unified",
      "Zero-trust security model",
      "99.95% gateway availability",
      "Reduced API latency by 40%",
    ],
    role: "Cloud Architect",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "angular-enterprise-portal",
    title: "Enterprise Workflow Portal",
    category: "Enterprise Application",
    shortDescription:
      "Developed a comprehensive Angular-based enterprise portal with complex workflow automation, reducing manual processing by 70%.",
    problem:
      "An organization's approval workflows were entirely manual, involving multiple departments with paper-based processes causing delays of 5-7 days for routine approvals.",
    solution:
      "Created a modular Angular 14 application with dynamic form generation, multi-level approval workflows, and Azure Logic Apps integration. Implemented role-based dashboards with real-time notifications via Azure Notification Hubs.",
    techStack: [
      "Angular 14",
      "TypeScript",
      "RxJS",
      "Azure Logic Apps",
      ".NET Core API",
      "SQL Server",
    ],
    highlights: [
      "70% faster approval cycles",
      "Dynamic workflow engine",
      "Automated email notifications",
      "Audit trail & compliance reports",
    ],
    role: "Senior Developer",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
];

export const experience = [
  {
    company: "Deloitte USI",
    location: "Gurgaon",
    role: "Senior Consultant",
    period: "Aug 2021 – Present",
    highlights: [
      "Lead cross-functional teams of 5-8 developers on enterprise cloud projects",
      "Architected microservices solutions on Azure serving 50K+ users",
      "Reduced deployment time by 80% through CI/CD automation",
      "Mentored junior developers and conducted technical interviews",
    ],
  },
  {
    company: "IBM India Pvt Ltd",
    location: "Noida",
    role: "Application Developer",
    period: "Sep 2018 – Jun 2021",
    highlights: [
      "Built scalable REST APIs handling 100K+ daily requests",
      "Migrated legacy systems to cloud-native architecture",
      "Collaborated with global teams across 3 time zones",
      "Received 'Excellence Award' for delivering critical projects ahead of schedule",
    ],
  },
  {
    company: "Ishir Technology",
    location: "Noida",
    role: "Software Developer",
    period: "Dec 2017 – Sep 2018",
    highlights: [
      "Developed full-stack applications using .NET and Angular",
      "Optimized database queries improving performance by 40%",
      "Implemented responsive UI components for mobile-first design",
    ],
  },
  {
    company: "ACS Pvt. Ltd.",
    location: "Indore",
    role: "Software Engineer",
    period: "Dec 2015 – Dec 2017",
    highlights: [
      "Built enterprise web applications from ground up",
      "Gained expertise in .NET ecosystem and SQL Server",
      "Delivered 10+ projects with 100% client satisfaction",
    ],
  },
];

export const certifications = [
  "AZ-900: Microsoft Azure Fundamentals",
  "AI-900: Microsoft Azure AI Fundamentals",
  "DP-900: Microsoft Azure Data Fundamentals",
];

// Update with your actual education details
export const education = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Your University Name",
    location: "City, India",
    year: "2015",
  },
];

export const contactServices = [
  "Full-stack web application development",
  "Cloud architecture & Azure solutions",
  "API design and microservices",
  "Legacy system modernization",
  "Technical consulting & code reviews",
];
