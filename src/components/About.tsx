import { CheckCircle } from "lucide-react";
import { aboutMe, personalInfo } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div>
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-slate-600">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex flex-col justify-center">
            <div className="card border border-slate-100">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Why Work With Me
              </h3>
              <ul className="space-y-4">
                {aboutMe.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 flex-shrink-0 text-green-500"
                      size={20}
                    />
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-slate-500">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
