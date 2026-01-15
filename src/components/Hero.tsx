import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-primary-50 pt-20">
      <div className="section-padding container-max flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
        {/* Availability Badge */}
        {personalInfo.availableForWork && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Available for new projects
          </div>
        )}

        {/* Main Headline */}
        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
          {personalInfo.tagline}
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={20} />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-slate-900"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-primary-600"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-500 transition-colors hover:text-primary-600"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-slate-400">
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-slate-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
