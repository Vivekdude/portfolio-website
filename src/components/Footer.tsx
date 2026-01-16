import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-max px-4 py-12 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">
                {personalInfo.name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="font-semibold text-white">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-slate-600">
            Built with <Heart size={14} className="text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
