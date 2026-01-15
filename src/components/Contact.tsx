import { Mail, Linkedin, Github, MapPin, Clock } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-900 text-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side - CTA */}
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mb-8 text-lg text-slate-300">
              I&apos;m available for freelance projects, consulting, and
              long-term collaborations. Whether you need a full application
              built or help with a specific technical challenge, let&apos;s
              talk.
            </p>

            {/* Quick Info */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} className="text-primary-400" />
                <span>{personalInfo.location} (Remote Available)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock size={20} className="text-primary-400" />
                <span>Response within 24 hours</span>
              </div>
            </div>

            {/* What I Help With */}
            <div className="rounded-lg bg-slate-800 p-6">
              <h3 className="mb-4 font-semibold text-white">I can help with:</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400"></span>
                  Building new web applications from scratch
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400"></span>
                  Adding features to existing .NET/React applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400"></span>
                  Migrating legacy systems to modern cloud architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400"></span>
                  API design and integration work
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400"></span>
                  Code review and architecture consulting
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Methods */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Email - Primary */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 rounded-xl bg-slate-800 p-6 transition-all hover:bg-slate-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Me</div>
                  <div className="text-slate-400">{personalInfo.email}</div>
                </div>
                <div className="ml-auto text-slate-500 transition-transform group-hover:translate-x-1">
                  &rarr;
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl bg-slate-800 p-6 transition-all hover:bg-slate-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0077B5] text-white">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Connect on LinkedIn
                  </div>
                  <div className="text-slate-400">Let&apos;s connect professionally</div>
                </div>
                <div className="ml-auto text-slate-500 transition-transform group-hover:translate-x-1">
                  &rarr;
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl bg-slate-800 p-6 transition-all hover:bg-slate-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-600 text-white">
                  <Github size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">View My Code</div>
                  <div className="text-slate-400">Check out my GitHub repositories</div>
                </div>
                <div className="ml-auto text-slate-500 transition-transform group-hover:translate-x-1">
                  &rarr;
                </div>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 rounded-lg border border-slate-700 p-4 text-center">
              <p className="text-sm text-slate-400">
                Trusted by companies globally | NDA-friendly | Flexible
                engagement models
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
