import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development and cloud architecture.
          </p>
        </div>

        <div className="space-y-12">
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

  return (
    <div className="card overflow-hidden border border-slate-100 p-0">
      <div
        className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"}`}
      >
        {/* Project Image Placeholder */}
        <div
          className={`flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 p-8 lg:p-12 ${
            isEven ? "" : "lg:col-start-2"
          }`}
        >
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-600 shadow-md">
              <Code size={32} />
            </div>
            <p className="text-sm font-medium text-primary-700">
              {project.category}
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 lg:p-8">
          <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
            {project.role}
          </span>
          <h3 className="mb-3 text-2xl font-bold text-slate-900">
            {project.title}
          </h3>
          <p className="mb-4 text-slate-600">{project.shortDescription}</p>

          {/* Problem & Solution */}
          <div className="mb-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-slate-700">
                The Challenge
              </h4>
              <p className="text-sm text-slate-600">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-700">
                The Solution
              </h4>
              <p className="text-sm text-slate-600">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold text-slate-700">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-slate-700">
              Key Results
            </h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-primary-600"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Code({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}
