import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-4 py-8 text-center text-slate-400">
      <div className="container-max">
        <p>
          &copy; {currentYear} {personalInfo.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
