"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <nav className="container-max flex items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="text-xl font-bold text-primary-600">
          {personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 transition-colors hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
