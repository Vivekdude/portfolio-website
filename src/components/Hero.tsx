import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="absolute inset-0 bg-radial-gradient"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-float"></div>
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="section-padding container-max relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
        {/* Availability Badge */}
        {personalInfo.availableForWork && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
        )}

        {/* Name Badge */}
        <div className="mb-6 text-lg font-medium text-slate-400">
          Hi, I&apos;m <span className="text-white">{personalInfo.name}</span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          {personalInfo.tagline.split("&").map((part, i) =>
            i === 0 ? (
              <span key={i}>{part}<span className="gradient-text">&amp;</span></span>
            ) : (
              <span key={i} className="gradient-text">{part}</span>
            )
          )}
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mb-14 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={20} />
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats Row */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">9+</div>
            <div className="text-sm text-slate-500">Years Experience</div>
          </div>
          <div className="h-12 w-px bg-slate-800 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">4</div>
            <div className="text-sm text-slate-500">Companies</div>
          </div>
          <div className="h-12 w-px bg-slate-800 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">3</div>
            <div className="text-sm text-slate-500">Azure Certifications</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-slate-600 hover:text-white hover:bg-slate-800"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/10"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-6 rounded-full border-2 border-slate-700 p-1">
              <div className="h-2 w-1.5 mx-auto rounded-full bg-slate-500 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
