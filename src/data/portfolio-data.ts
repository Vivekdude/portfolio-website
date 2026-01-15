// ============================================
// CUSTOMIZE THIS FILE WITH YOUR INFORMATION
// ============================================

export const personalInfo = {
  name: "Vivek", // Your name
  title: "Senior Full-Stack & Cloud Engineer",
  tagline: "I build scalable, secure, cloud-ready web applications using .NET, Azure & React",
  subtitle: "10+ years experience | Enterprise systems | Startup MVPs | API-first architecture",
  email: "your.email@example.com", // UPDATE THIS
  linkedin: "https://linkedin.com/in/yourprofile", // UPDATE THIS
  github: "https://github.com/yourusername", // UPDATE THIS
  location: "India",
  availableForWork: true,
};

export const aboutMe = {
  paragraphs: [
    "I'm a Senior Full-Stack Developer with 10+ years of experience building enterprise-grade web applications and cloud platforms.",
    "I specialize in designing clean architectures, scalable APIs, and high-performance frontends. I've worked on large systems used by thousands of users and helped teams modernize legacy applications to cloud-native solutions.",
    "I take end-to-end ownership of projects — from architecture design to deployment — and pride myself on clear communication and reliable delivery.",
  ],
  highlights: [
    "Tech Lead experience across multiple projects",
    "End-to-end ownership from design to deployment",
    "Strong client communication skills",
    "Experience with global distributed teams",
  ],
};

export const skills = {
  backend: {
    title: "Backend & Cloud",
    items: [
      "C#, .NET Core, ASP.NET Web API",
      "Azure Functions, APIM, Service Bus",
      "SQL Server, Cosmos DB, Entity Framework",
      "Clean Architecture, Microservices",
      "REST API Design, gRPC",
    ],
  },
  frontend: {
    title: "Frontend",
    items: [
      "React.js, Next.js, TypeScript",
      "HTML5, CSS3, Tailwind CSS",
      "State Management (Redux, Context)",
      "Responsive Design, Accessibility",
    ],
  },
  devops: {
    title: "DevOps & Security",
    items: [
      "Azure DevOps, CI/CD Pipelines",
      "OAuth2, JWT, Azure AD B2C",
      "Docker, Container Deployments",
      "Application Insights, Logging",
    ],
  },
};

export const projects = [
  {
    id: "enterprise-platform",
    title: "Enterprise Management Platform",
    category: "Enterprise Application",
    shortDescription:
      "Large-scale enterprise platform with role-based access, complex workflows, and real-time reporting.",
    problem:
      "A growing organization needed to replace their legacy system that couldn't scale with their operations. Manual processes were causing delays and data inconsistencies.",
    solution:
      "Built a modern, cloud-native platform with role-based access control, automated workflows, and comprehensive reporting dashboards. Migrated from monolithic MVC to Azure Functions for better scalability.",
    techStack: [
      "ASP.NET Core Web API",
      "Azure Functions",
      "SQL Server",
      "React",
      "Azure AD B2C",
      "Application Insights",
    ],
    highlights: [
      "Implemented Clean Architecture for maintainability",
      "Achieved 99.9% uptime with Azure infrastructure",
      "Reduced manual processing time by 70%",
      "Handled 10,000+ concurrent users",
    ],
    role: "Lead Developer & Architect",
    image: "/projects/enterprise-platform.png",
    // liveUrl: "https://example.com", // Add if available
    // githubUrl: "https://github.com/...", // Add if public
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "SaaS Product",
    shortDescription:
      "Multi-tenant SaaS application for business analytics with real-time data visualization and reporting.",
    problem:
      "Small businesses needed affordable analytics tools but existing solutions were either too expensive or too complex for their needs.",
    solution:
      "Created a user-friendly SaaS platform with customizable dashboards, automated reports, and Stripe integration for subscription management.",
    techStack: [
      ".NET Core Web API",
      "React",
      "PostgreSQL",
      "Azure App Service",
      "Stripe",
      "Chart.js",
    ],
    highlights: [
      "Multi-tenant architecture with data isolation",
      "Real-time dashboard updates using SignalR",
      "Integrated Stripe for subscription billing",
      "Custom report builder with export options",
    ],
    role: "Full-Stack Developer",
    image: "/projects/saas-dashboard.png",
    githubUrl: "https://github.com/yourusername/saas-dashboard", // UPDATE THIS
  },
  {
    id: "cloud-api-platform",
    title: "Cloud-Native API Platform",
    category: "API & Integration",
    shortDescription:
      "Scalable API gateway platform with Azure APIM, rate limiting, and comprehensive monitoring.",
    problem:
      "Multiple internal services needed a unified, secure way to expose APIs to external partners while maintaining performance and security standards.",
    solution:
      "Designed and implemented a cloud-native API platform using Azure API Management with custom policies, rate limiting, and detailed analytics.",
    techStack: [
      "Azure API Management",
      "Azure Functions",
      ".NET Core",
      "Azure Monitor",
      "Key Vault",
      "OAuth 2.0",
    ],
    highlights: [
      "Centralized API gateway for 15+ microservices",
      "Implemented custom rate limiting policies",
      "JWT validation with Azure AD integration",
      "Real-time monitoring and alerting",
    ],
    role: "Cloud Architect",
    image: "/projects/api-platform.png",
  },
  {
    id: "legacy-migration",
    title: "Legacy System Modernization",
    category: "Migration & Modernization",
    shortDescription:
      "Complete migration of legacy .NET Framework application to modern .NET Core with Azure cloud infrastructure.",
    problem:
      "A decade-old .NET Framework MVC application was becoming unmaintainable, had security vulnerabilities, and couldn't leverage modern cloud capabilities.",
    solution:
      "Led a phased migration approach — modernizing the codebase to .NET Core, implementing Clean Architecture, and deploying to Azure with full CI/CD pipelines.",
    techStack: [
      ".NET Core 8",
      "Entity Framework Core",
      "Azure App Service",
      "Azure DevOps",
      "Application Insights",
      "Docker",
    ],
    highlights: [
      "Zero-downtime migration over 6 months",
      "50% reduction in hosting costs",
      "Improved response times by 3x",
      "Full test coverage with automated CI/CD",
    ],
    role: "Technical Lead",
    image: "/projects/legacy-migration.png",
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
