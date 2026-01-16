import { CheckCircle, Zap, Users, Award, BadgeCheck } from "lucide-react";
import { aboutMe, certifications } from "@/data/portfolio-data";

const stats = [
  { icon: Zap, value: "9+", label: "Years Experience", color: "text-blue-400" },
  { icon: Users, value: "4", label: "Companies", color: "text-violet-400" },
  { icon: Award, value: "3", label: "Azure Certifications", color: "text-emerald-400" },
  { icon: BadgeCheck, value: "20+", label: "Projects Delivered", color: "text-amber-400" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"></div>

      <div className="container-max relative">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            About Me
          </span>
          <h2 className="section-title">
            Turning Complex Problems Into{" "}
            <span className="gradient-text">Elegant Solutions</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column - Text (3 cols) */}
          <div className="lg:col-span-3">
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutMe.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/30 p-4 transition-colors hover:border-slate-700"
                >
                  <CheckCircle className="mt-0.5 flex-shrink-0 text-emerald-400" size={20} />
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold text-white">Microsoft Azure Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                  >
                    <Award size={16} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats (2 cols) */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="card group text-center"
                  >
                    <div className={`mb-3 inline-flex rounded-xl bg-slate-800 p-3 ${stat.color} transition-transform group-hover:scale-110`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech Brands / Trust Signals */}
        <div className="mt-20 border-t border-slate-800 pt-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["Microsoft Azure", ".NET Core", "React.js", "Angular", "SQL Server", "Node.js"].map(
              (tech) => (
                <div
                  key={tech}
                  className="text-lg font-semibold text-slate-600 transition-colors hover:text-slate-400"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
