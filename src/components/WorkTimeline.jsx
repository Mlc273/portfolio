import { work } from "../data/profile.js";

// A vertical timeline of jobs. Pass `limit` to show only the most recent ones.
export default function WorkTimeline({ limit, showSummary = true }) {
  const jobs = limit ? work.slice(0, limit) : work;

  return (
    <ol className="relative space-y-8 border-l-2 border-stone-200 pl-7 dark:border-white/10">
      {jobs.map(({ name, role, years, summary }) => (
        <li className="relative" key={name}>
          <span
            aria-hidden="true"
            className="absolute -left-[2.15rem] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-paper bg-teal-600 dark:border-ink dark:bg-teal-300"
          />
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{years}</p>
          <h3 className="mt-1 text-lg font-semibold leading-snug">{role}</h3>
          <p className="font-medium text-teal-800 dark:text-teal-200">{name}</p>
          {showSummary && <p className="mt-2 leading-relaxed text-stone-700 dark:text-stone-300">{summary}</p>}
        </li>
      ))}
    </ol>
  );
}
