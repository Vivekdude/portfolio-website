import { Cloud, Code, Shield } from "lucide-react";
import { skills, Proficiency } from "@/data/portfolio-data";
import ScrollReveal from "@/components/ScrollReveal";

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

const proficiencyStyles: Record<Proficiency, string> = {
  Expert: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Proficient: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Familiar: "bg-slate-700/50 text-slate-400 border-slate-600/40",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"></div>

      <div className="container-max relative">
        {/* Section Header */}
        <ScrollReveal>
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
            {/* Proficiency legend */}
            <div className="mt-6 inline-flex items-center gap-4 rounded-full border border-slate-800 bg-slate-900/50 px-5 py-2 text-xs">
              {(["Expert", "Proficient", "Familiar"] as Proficiency[]).map((level) => (
                <span key={level} className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-medium ${proficiencyStyles[level]}`}>
                  {level}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const skillData = skills[category.key as keyof typeof skills];
            const Icon = category.icon;

            return (
              <ScrollReveal key={category.key} delay={(catIndex % 3) as 0 | 1 | 2 | 3}>
                <div
                  className={`card group hover:shadow-2xl ${category.bgGlow} transition-all duration-500 h-full`}
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
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-slate-200">
                          <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                          {skill.label}
                        </span>
                        <span className={`flex-shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${proficiencyStyles[skill.level]}`}>
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Additional Skills Bar */}
        <ScrollReveal delay={1}>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
