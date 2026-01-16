import { Cloud, Code, Shield } from "lucide-react";
import { skills } from "@/data/portfolio-data";

const skillCategories = [
  {
    key: "backend",
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "group-hover:shadow-blue-500/20",
  },
  {
    key: "frontend",
    icon: Code,
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "group-hover:shadow-violet-500/20",
  },
  {
    key: "devops",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "group-hover:shadow-emerald-500/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"></div>

      <div className="container-max relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-violet-400">
            Expertise
          </span>
          <h2 className="section-title mx-auto max-w-3xl">
            Technical Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Specialized in building enterprise-grade applications with modern
            technologies, cloud-first architecture, and industry best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => {
            const skillData = skills[category.key as keyof typeof skills];
            const Icon = category.icon;

            return (
              <div
                key={category.key}
                className={`card group hover:shadow-2xl ${category.bgGlow} transition-all duration-500`}
              >
                {/* Icon Header */}
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${category.gradient} p-4 text-white shadow-lg`}>
                  <Icon size={28} />
                </div>

                <h3 className="mb-6 text-2xl font-bold text-white">
                  {skillData.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {skillData.items.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-slate-400 transition-colors hover:text-slate-200"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-white">
            Tools & Technologies I Use Daily
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Git",
              "Azure DevOps",
              "Visual Studio",
              "VS Code",
              "Postman",
              "Swagger/OpenAPI",
              "Redis Cache",
              "SignalR",
              "Power BI",
              "Jira",
              "Confluence",
              "Figma",
              "Docker Desktop",
              "Azure Portal",
              "GitHub Actions",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-400 transition-all hover:border-slate-600 hover:text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
