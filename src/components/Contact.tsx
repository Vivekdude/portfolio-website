import { Mail, Linkedin, Github, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const services = [
  "Full-stack web application development",
  "Cloud architecture & Azure solutions",
  "API design and microservices",
  "Legacy system modernization",
  "Technical consulting & code reviews",
];

export default function Contact() {
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
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 flex-shrink-0 text-emerald-400" size={18} />
                    <span className="text-slate-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Signal */}
            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
              <p className="text-sm text-emerald-400">
                Trusted by 15+ companies globally | NDA-friendly | Flexible engagement models
              </p>
            </div>
          </div>

          {/* Right Side - Contact Methods */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              {/* Email - Primary CTA */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20">
                  <Mail size={26} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Email Me</div>
                  <div className="text-slate-400">{personalInfo.email}</div>
                </div>
                <div className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400">
                  <ArrowRight size={20} />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077B5] text-white shadow-lg shadow-blue-500/20">
                  <Linkedin size={26} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Connect on LinkedIn</div>
                  <div className="text-slate-400">Let&apos;s connect professionally</div>
                </div>
                <div className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400">
                  <ArrowRight size={20} />
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-700 text-white shadow-lg">
                  <Github size={26} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">View My Code</div>
                  <div className="text-slate-400">Check out my repositories</div>
                </div>
                <div className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-white">
                  <ArrowRight size={20} />
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <a
                href={`mailto:${personalInfo.email}?subject=Project Inquiry`}
                className="btn-primary w-full sm:w-auto"
              >
                Start a Conversation
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
