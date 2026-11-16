import Link from "next/link";
import Photo from "../components/Photo.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import WorkTimeline from "../components/WorkTimeline.jsx";
import { highlights, notes, profile, skills } from "../data/profile.js";

export const metadata = {
  title: { absolute: `${profile.name} — Portfolio` },
  description: `Notes, projects, and experience from ${profile.name}, a computer science student.`,
};

function Hero() {
  return (
    <section className="container-page grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:pb-24 lg:pt-20">
      <div>
        <p className="eyebrow">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-5 text-balance font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-700 sm:text-xl sm:leading-relaxed dark:text-stone-300">
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/about/">
            More about me
          </Link>
          <Link className="btn-secondary" href="/projects/">
            See my projects
          </Link>
        </div>
        <SocialLinks className="mt-6" />
      </div>
      <Photo className="mx-auto w-full max-w-sm lg:max-w-none" priority />
    </section>
  );
}

function Highlights() {
  return (
    <section aria-label="Highlights" className="container-page">
      <dl className="grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
        {highlights.map(({ value, label }) => (
          <div className="flex flex-col-reverse bg-white px-6 py-7 sm:px-8 dark:bg-ink" key={label}>
            <dt className="mt-2 text-[0.95rem] leading-snug text-stone-700 dark:text-stone-300">{label}</dt>
            <dd className="font-display text-4xl font-semibold text-teal-700 sm:text-5xl dark:text-teal-300">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Notes() {
  return (
    <section aria-labelledby="notes-heading">
      <p className="eyebrow">Notes</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight" id="notes-heading">
        What I&apos;m learning
      </h2>
      <div className="mt-8 space-y-5">
        {notes.map(({ id, title, excerpt }) => (
          <article className="card" id={id} key={id}>
            <h3 className="text-xl font-semibold leading-snug">{title}</h3>
            <p className="mt-3 leading-relaxed text-stone-700 dark:text-stone-300">{excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="card">
      <h2 className="text-xl font-semibold" id="skills-heading">
        Skills
      </h2>
      <p className="mt-2 text-stone-600 dark:text-stone-400">
        Strengths from my career, and the coding skills I&apos;m growing.
      </p>
      <ul className="mt-6 space-y-5">
        {skills.map(({ label, value }) => (
          <li key={label}>
            <div className="mb-2 flex justify-between text-[0.95rem]">
              <span className="font-medium">{label}</span>
              <span className="tabular-nums text-stone-600 dark:text-stone-400">{value}%</span>
            </div>
            <div
              aria-label={`${label}: ${value}%`}
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={value}
              className="h-2.5 overflow-hidden rounded-full bg-stone-200 dark:bg-white/10"
              role="meter"
            >
              <div className="h-full rounded-full bg-teal-600 dark:bg-teal-300" style={{ width: `${value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <div className="container-page mt-20 grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <Notes />
        <div className="space-y-8">
          <section aria-labelledby="work-heading" className="card">
            <h2 className="text-xl font-semibold" id="work-heading">
              Recent work
            </h2>
            <div className="mt-6">
              <WorkTimeline limit={3} showSummary={false} />
            </div>
            <Link className="link mt-6 inline-block" href="/about/">
              Full work history
            </Link>
          </section>
          <Skills />
        </div>
      </div>
    </>
  );
}
