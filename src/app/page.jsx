import Link from "next/link";
import Avatar from "../components/Avatar.jsx";
import NewsletterForm from "../components/NewsletterForm.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import { notes, profile, skills, work } from "../data/profile.js";

export const metadata = {
  title: { absolute: `${profile.name} — Portfolio` },
  description: `Notes, projects, and ideas from ${profile.name}, a computer science student.`,
};

const cardClasses =
  "rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900/70";

function WorkCard() {
  return (
    <section className={cardClasses}>
      <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden="true" className="text-zinc-400">
          ▱
        </span>
        Work
      </h2>
      <p className="mb-5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        Decades of serving people, managing money, and running a business.
      </p>
      <ul className="space-y-4">
        {work.map(({ name, detail, years, mark, tone }) => (
          <li className="flex items-center gap-3" key={name}>
            <span
              className={`${tone} grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[10px] font-bold text-white`}
            >
              {mark}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold">{name}</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-wide text-zinc-400">{detail}</p>
            </div>
            <span className="whitespace-nowrap text-[9px] text-zinc-400">{years}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SkillsCard() {
  return (
    <section className={cardClasses}>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden="true" className="text-zinc-400">
          ⌁
        </span>
        Skills
      </h2>
      <p className="mb-5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        Strengths from my career, and the coding skills I&apos;m growing.
      </p>
      <ul className="space-y-4">
        {skills.map(({ label, value }) => (
          <li key={label}>
            <div className="mb-1.5 flex justify-between text-[10px]">
              <span>{label}</span>
              <span className="text-zinc-400">{value}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-sm bg-zinc-200 dark:bg-zinc-700">
              <div className="h-full rounded-sm bg-teal-500" style={{ width: value }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-7 sm:px-8 sm:pt-10">
      <section className="max-w-2xl">
        <Avatar size="sm" />
        <h1 className="mt-4 max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {profile.headline}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{profile.intro}</p>
        <SocialLinks />
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(270px,0.8fr)] lg:gap-14">
        <section aria-label="Recent notes" className="space-y-9">
          {notes.map(({ id, date, title, excerpt }) => (
            <article id={id} key={id}>
              <p className="text-[11px] text-zinc-400">{date}</p>
              <h2 className="mt-2 text-sm font-semibold">{title}</h2>
              <p className="mt-2 line-clamp-3 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{excerpt}</p>
            </article>
          ))}
          <Link
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 transition hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
            href="/projects"
          >
            See my projects <span aria-hidden="true">›</span>
          </Link>
        </section>

        <aside className="space-y-5">
          <section className={cardClasses}>
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <svg aria-hidden="true" className="text-zinc-400" fill="none" height="16" viewBox="0 0 24 24" width="16">
                <rect height="15" rx="2" stroke="currentColor" strokeWidth="1.6" width="20" x="2" y="4.5" />
                <path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              Stay up to date
            </h2>
            <p className="my-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <NewsletterForm />
          </section>
          <WorkCard />
          <SkillsCard />
        </aside>
      </div>
    </div>
  );
}
