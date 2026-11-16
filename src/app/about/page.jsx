import Avatar from "../../components/Avatar.jsx";
import { icons, socialLinks } from "../../data/social.jsx";
import { education, hobbies, profile } from "../../data/profile.js";

export const metadata = {
  title: "About",
  description: `A little more about ${profile.name} and the work behind this portfolio.`,
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-8 sm:px-8 sm:pt-12">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] md:gap-14">
        <article className="max-w-xl">
          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">{profile.aboutTitle}</h1>
          <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="md:pt-1">
          <Avatar size="lg" />
          <nav aria-label="Social profiles" className="mt-5 space-y-3">
            {socialLinks.map(({ key, label, href }) => (
              <a
                className="flex items-center gap-3 text-xs text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-300"
                href={href}
                key={key}
                rel="noreferrer"
                target="_blank"
              >
                {icons[key]}
                Follow me on {label}
              </a>
            ))}
          </nav>

          <section className="mt-8">
            <h2 className="text-sm font-semibold">Education</h2>
            <ul className="mt-3 space-y-3">
              {education.map(({ name, detail, years }) => (
                <li className="flex justify-between gap-4 text-xs" key={name}>
                  <span>
                    <span className="font-semibold">{name}</span>
                    <span className="block text-zinc-500 dark:text-zinc-400">{detail}</span>
                  </span>
                  <span className="whitespace-nowrap text-zinc-400">{years}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-sm font-semibold">Hobbies</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <li
                  className="rounded-full bg-teal-50 px-3 py-1 text-[11px] text-teal-700 dark:bg-teal-400/10 dark:text-teal-200"
                  key={hobby}
                >
                  {hobby}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
