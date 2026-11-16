import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Selected projects and things Jane Doe has made.",
};

const projects = [
  {
    name: "Portfolio Template",
    description: "A thoughtful, responsive portfolio for sharing the projects, tools, and ideas that matter.",
    type: "Web design",
  },
  {
    name: "Open Source Toolkit",
    description: "A collection of small, accessible components that make everyday product work a little easier.",
    type: "Open source",
  },
  {
    name: "Community Journal",
    description: "A calm place for a community to publish stories, discover new voices, and connect.",
    type: "Product",
  },
  {
    name: "Field Notes",
    description: "A lightweight writing experience designed to make it easier to capture an idea as it arrives.",
    type: "Web app",
  },
  {
    name: "Design System",
    description: "A flexible set of patterns and principles that helps teams create consistent digital products.",
    type: "Design systems",
  },
  {
    name: "Local First",
    description: "An experiment in making personal tools that are fast, private, and useful offline.",
    type: "Experiment",
  },
];

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
          Things I&apos;ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          A selection of projects, experiments, and ideas I&apos;ve worked on. Each one has taught me something new
          about making useful things for people.
        </p>
      </header>

      <section aria-label="Selected projects" className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, description, type }) => (
          <article className="group" key={name}>
            <ProjectMark />
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
              {type}
            </p>
            <h2 className="mt-1 text-sm font-semibold">{name}</h2>
            <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{description}</p>
            <Link
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-700 transition-colors group-hover:text-teal-600 dark:text-zinc-300 dark:group-hover:text-teal-300"
              href="mailto:jane@example.com?subject=Project%20inquiry"
            >
              View project <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
