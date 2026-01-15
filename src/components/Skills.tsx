import { Cloud, Code, Shield } from "lucide-react";
import { skills } from "@/data/portfolio-data";

const iconMap = {
  backend: Cloud,
  frontend: Code,
  devops: Shield,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Specialized in building enterprise-grade applications with modern
            technologies and best practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Backend & Cloud */}
          <div className="card group">
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              <Cloud size={24} />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              {skills.backend.title}
            </h3>
            <ul className="space-y-2">
              {skills.backend.items.map((skill, index) => (
                <li key={index} className="text-slate-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend */}
          <div className="card group">
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              <Code size={24} />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              {skills.frontend.title}
            </h3>
            <ul className="space-y-2">
              {skills.frontend.items.map((skill, index) => (
                <li key={index} className="text-slate-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps & Security */}
          <div className="card group">
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
              <Shield size={24} />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              {skills.devops.title}
            </h3>
            <ul className="space-y-2">
              {skills.devops.items.map((skill, index) => (
                <li key={index} className="text-slate-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
