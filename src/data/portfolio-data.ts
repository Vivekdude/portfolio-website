// ============================================
// CUSTOMIZE THIS FILE WITH YOUR INFORMATION
// ============================================

export const personalInfo = {
  name: "Vivek Shukla",
  title: "Senior Full-Stack & Cloud Engineer",
  tagline:
    "Building enterprise-grade cloud solutions that scale",
  subtitle:
    "Transforming complex business challenges into elegant, high-performance applications",
  email: "meetvivekshukla@gmail.com",
  linkedin: "https://linkedin.com/in/vivekshukl",
  github: "https://github.com/Vivekdude",
  location: "India",
  availableForWork: true,
};

export const aboutMe = {
  paragraphs: [
    "I'm a Senior Full-Stack Engineer who thrives on building systems that matter. With over a decade of experience, I've architected and delivered enterprise platforms that serve thousands of users and process millions of transactions.",
    "My expertise lies at the intersection of robust backend systems (.NET, Azure) and modern frontends (React, TypeScript). I don't just write code — I design solutions that are maintainable, scalable, and built to last.",
    "From modernizing legacy monoliths to architecting cloud-native microservices, I bring a strategic mindset to every project. I believe in clean code, clear communication, and delivering real business value.",
  ],
  highlights: [
    "Led teams of 5+ developers on enterprise projects",
    "Architected systems handling 10K+ concurrent users",
    "Achieved 99.9% uptime on critical applications",
    "Delivered 50+ projects across 4 continents",
  ],
};

export const skills = {
  backend: {
    title: "Backend & Cloud",
    items: [
      "C#, .NET Core 8, ASP.NET Web API",
      "Azure Functions, APIM, Service Bus",
      "SQL Server, Cosmos DB, PostgreSQL",
      "Clean Architecture, DDD, CQRS",
      "REST APIs, gRPC, GraphQL",
    ],
  },
  frontend: {
    title: "Frontend & UI",
    items: [
      "React 18, Next.js 14, TypeScript",
      "Tailwind CSS, Styled Components",
      "Redux Toolkit, Zustand, React Query",
      "Responsive Design, Web Accessibility",
      "Testing: Jest, React Testing Library",
    ],
  },
  devops: {
    title: "DevOps & Platform",
    items: [
      "Azure DevOps, GitHub Actions",
      "Docker, Kubernetes, Terraform",
      "OAuth2, JWT, Azure AD B2C",
      "Application Insights, ELK Stack",
      "CI/CD Pipelines, Infrastructure as Code",
    ],
  },
};

export const projects = [
  {
    id: "enterprise-platform",
    title: "Enterprise Management Platform",
    category: "Enterprise Application",
    shortDescription:
      "A comprehensive enterprise platform serving 10,000+ users with complex workflows, role-based access, and real-time analytics.",
    problem:
      "A rapidly growing organization was struggling with a legacy system that couldn't scale. Manual processes caused delays, data inconsistencies, and frustrated stakeholders.",
    solution:
      "Architected a cloud-native platform from the ground up with event-driven architecture, automated workflows, and comprehensive reporting. Implemented Clean Architecture for long-term maintainability.",
    techStack: [
      "ASP.NET Core",
      "Azure Functions",
      "SQL Server",
      "React",
      "Azure AD B2C",
      "Application Insights",
    ],
    highlights: [
      "99.9% uptime with Azure infrastructure",
      "70% reduction in manual processing time",
      "10,000+ concurrent users supported",
      "Sub-200ms API response times",
    ],
    role: "Lead Developer & Architect",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "SaaS Product",
    shortDescription:
      "A multi-tenant analytics platform with real-time data visualization, custom reports, and integrated billing.",
    problem:
      "SMBs needed powerful analytics but found existing solutions either prohibitively expensive or overwhelmingly complex for their teams.",
    solution:
      "Built an intuitive SaaS platform with drag-and-drop dashboards, automated insights, and seamless Stripe integration. Focused on delivering enterprise features at SMB-friendly pricing.",
    techStack: [
      ".NET Core",
      "React",
      "PostgreSQL",
      "SignalR",
      "Stripe",
      "Chart.js",
    ],
    highlights: [
      "Multi-tenant architecture with data isolation",
      "Real-time updates via SignalR",
      "Stripe subscription management",
      "Custom report builder with PDF export",
    ],
    role: "Full-Stack Developer",
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/Vivekdude/saas-dashboard",
  },
  {
    id: "cloud-api-platform",
    title: "Cloud-Native API Gateway",
    category: "API & Integration",
    shortDescription:
      "A centralized API platform managing 15+ microservices with advanced security, rate limiting, and comprehensive monitoring.",
    problem:
      "Internal services needed a unified, secure gateway for external partner integrations while maintaining strict performance and security standards.",
    solution:
      "Designed a robust API management layer using Azure APIM with custom policies, OAuth 2.0 security, intelligent rate limiting, and real-time analytics for partner consumption tracking.",
    techStack: [
      "Azure APIM",
      "Azure Functions",
      ".NET Core",
      "Azure Monitor",
      "Key Vault",
      "OAuth 2.0",
    ],
    highlights: [
      "Gateway for 15+ microservices",
      "Custom rate limiting & throttling",
      "Zero-trust security with JWT validation",
      "Real-time monitoring & alerting",
    ],
    role: "Cloud Architect",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "legacy-migration",
    title: "Legacy System Modernization",
    category: "Migration & Modernization",
    shortDescription:
      "Zero-downtime migration of a decade-old .NET Framework monolith to modern .NET 8 with cloud-native architecture.",
    problem:
      "A critical business application built on .NET Framework was becoming unmaintainable, had accumulating security debt, and couldn't leverage modern cloud capabilities.",
    solution:
      "Led a strategic phased migration using the strangler fig pattern. Modernized to .NET 8 with Clean Architecture, containerized deployments, and full CI/CD automation — all while maintaining 100% business continuity.",
    techStack: [
      ".NET 8",
      "Entity Framework Core",
      "Azure App Service",
      "Azure DevOps",
      "Docker",
      "Application Insights",
    ],
    highlights: [
      "Zero-downtime 6-month migration",
      "50% reduction in hosting costs",
      "3x improvement in response times",
      "95% test coverage achieved",
    ],
    role: "Technical Lead",
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
];

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using .NET Core and React. From database design to deployment.",
    icon: "code",
  },
  {
    title: "API Development",
    description:
      "Scalable REST APIs with clean architecture, proper documentation, and comprehensive testing.",
    icon: "server",
  },
  {
    title: "Cloud Architecture",
    description:
      "Azure-based solutions including Functions, APIM, Service Bus, and cost-optimized infrastructure.",
    icon: "cloud",
  },
  {
    title: "Legacy Modernization",
    description:
      "Migrate .NET Framework applications to modern .NET Core with cloud-native architecture.",
    icon: "refresh",
  },
];
