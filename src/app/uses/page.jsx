import { profile, uses } from "../../data/profile.js";

export const metadata = {
  title: "Uses",
  description: `Software and tools ${profile.name} uses and recommends.`,
};

export default function Uses() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-8 sm:px-8 sm:pt-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Software I use, tools I love, and other things I recommend.
        </h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Here&apos;s a list of the tools and gear I use for school, coding, and design.
        </p>
      </header>

      <div className="mt-10 space-y-12">
        {uses.map(({ name, items }) => (
          <section
            aria-labelledby={`uses-${name.toLowerCase()}`}
            className="grid gap-5 border-l-2 border-zinc-200 pl-4 dark:border-white/15 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8 sm:pl-5"
            key={name}
          >
            <h2
              className="text-sm font-bold sm:text-xs sm:font-semibold sm:text-zinc-500 sm:dark:text-zinc-400"
              id={`uses-${name.toLowerCase()}`}
            >
              {name}
            </h2>
            <div className="space-y-7">
              {items.map(({ title, description }) => (
                <article key={title}>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 max-w-2xl text-xs leading-5 text-zinc-600 dark:text-zinc-400">{description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
