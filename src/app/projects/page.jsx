import { profile, projects } from "../../data/profile.js";

export const metadata = {
  title: "Projects",
  description: `Selected projects and coursework by ${profile.name}.`,
};

function ProjectMark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full bg-rose-50 text-rose-500 dark:bg-rose-400/10 dark:text-rose-300">
      <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
        <path
          d="M7 17 17 7M7.5 7H17v9.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </span>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-8 sm:px-8 sm:pt-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Things I&apos;ve built while learning to code.
        </h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          A selection of class projects and coursework. Each one taught me something new about building useful things
          for people.
        </p>
      </header>

      <section aria-label="Selected projects" className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, description, type, href }) => (
          <article className="group" key={name}>
            <ProjectMark />
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
              {type}
            </p>
            <h2 className="mt-1 text-sm font-semibold">{name}</h2>
            <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{description}</p>
            <a
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-700 transition-colors group-hover:text-teal-600 dark:text-zinc-300 dark:group-hover:text-teal-300"
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
