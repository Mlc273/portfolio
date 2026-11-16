import PageIntro from "../../components/PageIntro.jsx";
import { profile, projects } from "../../data/profile.js";

export const metadata = {
  title: "Projects",
  description: `Selected projects and coursework by ${profile.name}.`,
};

export default function Projects() {
  return (
    <div className="container-page pt-12 sm:pt-16 lg:pt-20">
      <PageIntro eyebrow="Projects" title="Things I've built while learning to code.">
        <p>
          A selection of class projects and coursework. Each one taught me something new about building useful things
          for people.
        </p>
      </PageIntro>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, description, type, href }) => (
          <li key={name}>
            <a
              className="card group flex h-full flex-col transition hover:-translate-y-1 hover:border-teal-600/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 dark:hover:border-teal-300/40"
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="w-fit rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 dark:bg-teal-300/10 dark:text-teal-200">
                {type}
              </span>
              <h2 className="mt-5 text-xl font-semibold leading-snug">{name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-stone-700 dark:text-stone-300">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-300">
                View on GitHub
                <svg
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path
                    d="M7 17 17 7M8 7h9v9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
