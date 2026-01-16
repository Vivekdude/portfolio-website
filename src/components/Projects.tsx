import { Github, ExternalLink, ArrowUpRight, Layers, Server, Cloud, RefreshCw } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/portfolio-data";

const categoryIcons: Record<string, typeof Layers> = {
  "Enterprise Application": Layers,
  "SaaS Product": Server,
  "API & Integration": Cloud,
  "Migration & Modernization": RefreshCw,
};

const categoryGradients: Record<string, string> = {
  "Enterprise Application": "from-blue-500 to-cyan-500",
  "SaaS Product": "from-violet-500 to-purple-500",
  "API & Integration": "from-emerald-500 to-teal-500",
  "Migration & Modernization": "from-amber-500 to-orange-500",
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/5 blur-3xl"></div>

      <div className="container-max relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-blue-400">
            Portfolio
          </span>
          <h2 className="section-title mx-auto max-w-3xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            A selection of enterprise projects showcasing my expertise in full-stack
            development, cloud architecture, and system modernization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const Icon = categoryIcons[project.category] || Layers;
  const gradient = categoryGradients[project.category] || "from-blue-500 to-cyan-500";

  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/80">
      <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"}`}>
        {/* Project Visual */}
        <div
          className={`relative flex min-h-[320px] items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 ${
            isEven ? "" : "lg:col-start-2"
          }`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="text-center p-8">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-30">
                <div className={`absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} blur-3xl`}></div>
                <div className={`absolute right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-gradient-to-br ${gradient} blur-2xl`}></div>
              </div>

              <div className="relative">
                <div className={`mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                  <Icon size={36} />
                </div>
                <p className="text-sm font-medium text-slate-400">
                  {project.category}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-8 lg:p-10">
          {/* Header */}
          <div className="mb-6">
            <span className={`mb-3 inline-block rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-xs font-semibold text-white`}>
              {project.role}
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
              {project.title}
            </h3>
            <p className="text-slate-400">{project.shortDescription}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <h4 className="mb-2 text-sm font-semibold text-slate-300">
                Challenge
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">{project.problem}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <h4 className="mb-2 text-sm font-semibold text-slate-300">
                Solution
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-slate-300">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Results */}
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-slate-300">
              Key Results
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-400"
                >
                  <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${gradient}`}></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
