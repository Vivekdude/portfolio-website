"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Clock, ArrowRight, CheckCircle, Send } from "lucide-react";
import { personalInfo, contactServices } from "@/data/portfolio-data";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || "Project Inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40";

  return (
    <section id="contact" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl"></div>

      <div className="container-max relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Get In Touch
          </span>
          <h2 className="section-title mx-auto max-w-3xl">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Ready to transform your ideas into reality? I&apos;m available for freelance
            projects, consulting, and long-term collaborations.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side - Info */}
          <div>
            {/* Quick Info Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <MapPin className="mb-3 text-blue-400" size={24} />
                <h3 className="mb-1 font-semibold text-white">Location</h3>
                <p className="text-slate-400">{personalInfo.location}</p>
                <p className="text-sm text-slate-500">Remote Available</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <Clock className="mb-3 text-violet-400" size={24} />
                <h3 className="mb-1 font-semibold text-white">Response Time</h3>
                <p className="text-slate-400">Within 24 hours</p>
                <p className="text-sm text-slate-500">Usually same day</p>
              </div>
            </div>

            {/* Services List */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="mb-6 text-lg font-semibold text-white">How I Can Help</h3>
              <ul className="space-y-4">
                {contactServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 flex-shrink-0 text-emerald-400" size={18} />
                    <span className="text-slate-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-6 space-y-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/50 px-5 py-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0077B5] text-white">
                  <Linkedin size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">Connect on LinkedIn</div>
                </div>
                <ArrowRight size={16} className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/50 px-5 py-4 transition-all duration-300 hover:border-slate-600 hover:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-white">
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">View My GitHub</div>
                </div>
                <ArrowRight size={16} className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-white" />
              </a>
            </div>

            {/* Trust Signal */}
            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
              <p className="text-sm text-emerald-400">
                Trusted by 15+ companies globally | NDA-friendly | Flexible engagement models
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8 space-y-5"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-400">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Send Message
              </button>

              <p className="text-center text-xs text-slate-600">
                This will open your email client with the message pre-filled.
              </p>
            </form>

            {/* Direct email fallback */}
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500">
                Prefer email directly?{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 underline-offset-2 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
