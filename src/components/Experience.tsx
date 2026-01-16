import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"></div>

      <div className="container-max relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            Career Journey
          </span>
          <h2 className="section-title mx-auto max-w-3xl">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            9+ years of progressive growth in software development, from building
            foundational skills to leading enterprise teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-4 border-slate-950 hidden md:block"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="card group hover:border-blue-500/30">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={16} className="text-violet-400" />
                          <span className="text-violet-400 font-medium">{job.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar size={14} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                          <MapPin size={14} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
