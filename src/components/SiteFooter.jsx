import Link from "next/link";
import { assignmentOneHref, navigation } from "../data/navigation.js";
import { profile } from "../data/profile.js";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-stone-200 dark:border-white/10">
      <div className="container-page flex flex-col gap-6 py-10 text-[0.95rem] text-stone-600 sm:flex-row sm:items-center sm:justify-between dark:text-stone-400">
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navigation.map(({ href, label }) => (
            <Link className="transition-colors hover:text-ink dark:hover:text-white" href={href} key={href}>
              {label}
            </Link>
          ))}
          <a className="transition-colors hover:text-ink dark:hover:text-white" href={assignmentOneHref}>
            Assignment One
          </a>
        </nav>
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
