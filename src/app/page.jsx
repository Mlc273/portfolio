import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm.jsx";

export const metadata = {
  title: "Home",
  description: "Notes, work, and ideas from Jane Doe, a software engineer.",
};

const articles = [
  {
    id: "building-for-the-web",
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit diam. Pellentesque sit amet sapien quis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
  },
  {
    id: "finding-a-good-rhythm",
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit diam. Pellentesque sit amet sapien quis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
  },
  {
    id: "small-details",
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit diam. Pellentesque sit amet sapien quis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
  },
];

const experience = [
  { company: "Slack", role: "Software Engineer", years: "2018 – Present", mark: "S", tone: "bg-violet-500" },
  { company: "Spotify", role: "Software Engineer", years: "2016 – 2018", mark: "●", tone: "bg-green-500" },
  { company: "Audible", role: "Software Engineer", years: "2012 – 2016", mark: "A", tone: "bg-amber-500" },
  { company: "Microsoft", role: "Software Engineer", years: "2010 – 2012", mark: "M", tone: "bg-sky-500" },
];

const skills = [
  { label: "HTML", value: "88%" },
  { label: "CSS", value: "72%" },
  { label: "JavaScript", value: "64%" },
];

function SocialLink({ label, children, href }) {
  return (
    <a
      aria-label={label}
      className="text-zinc-500 transition-colors hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-300"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function HomeSocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-3">
      <SocialLink href="https://www.linkedin.com/" label="LinkedIn">
        <svg aria-hidden="true" fill="currentColor" height="15" viewBox="0 0 24 24" width="15">
          <path d="M5.2 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.7 8.5h3v11h-3v-11Zm4.9 0h2.9V10h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v6.5h-3v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1v5.9h-3v-11Z" />
        </svg>
      </SocialLink>
      <SocialLink href="https://x.com/" label="X">
        <svg aria-hidden="true" fill="currentColor" height="15" viewBox="0 0 24 24" width="15">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.5L1.8 2h6.4l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
        </svg>
      </SocialLink>
      <SocialLink href="https://github.com/" label="GitHub">
        <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
          <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.2 18 4.5 18 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3.2c0 .3.2.6.8.5A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      </SocialLink>
    </div>
  );
}

function WorkCard() {
  return (
    <section className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
      <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden="true" className="text-zinc-400">
          ▱
        </span>
        Work
      </h2>
      <p className="mb-5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      </p>
      <ul className="space-y-4">
        {experience.map(({ company, role, years, mark, tone }) => (
          <li className="flex items-center gap-3" key={company}>
            <span
              className={`${tone} grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold text-white`}
            >
              {mark}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold">{company}</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-wide text-zinc-400">{role}</p>
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
    <section className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden="true" className="text-zinc-400">
          ⌁
        </span>
        Skills
      </h2>
      <p className="mb-5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
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
        <img
          alt="Jane Doe"
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-zinc-800"
          height="40"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80"
          width="40"
        />
        <h1 className="mt-4 max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Software engineer, father, and believer
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        </p>
        <HomeSocialLinks />
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(270px,0.8fr)] lg:gap-14">
        <section aria-label="Recent articles" className="space-y-9">
          {articles.map(({ id, date, title, excerpt }) => (
            <article id={id} key={id}>
              <p className="text-[11px] text-zinc-400">{date}</p>
              <h2 className="mt-2 text-sm font-semibold">{title}</h2>
              <p className="mt-2 line-clamp-3 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{excerpt}</p>
              <Link
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 transition hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
                href={`#${id}`}
              >
                Read article <span aria-hidden="true">›</span>
              </Link>
            </article>
          ))}
        </section>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
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
