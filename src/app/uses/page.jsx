export const metadata = {
  title: "Uses",
  description: "Software, gadgets, and other things Jane Doe recommends.",
};

const groups = [
  {
    name: "Workstation",
    items: [
      {
        title: "MacBook Pro",
        description: "My everyday computer for building, writing, and everything in between.",
      },
      {
        title: "Studio Display",
        description: "A crisp, spacious display that makes long days at the desk a little easier.",
      },
      {
        title: "Keychron K2",
        description: "A compact mechanical keyboard with a satisfying feel and a great layout.",
      },
      {
        title: "Logitech MX Master",
        description: "A comfortable mouse with useful shortcuts for switching between tasks.",
      },
    ],
  },
  {
    name: "Development",
    items: [
      {
        title: "Visual Studio Code",
        description: "My editor of choice for its speed, extensions, and thoughtful workflow.",
      },
      {
        title: "GitHub",
        description: "Where I keep projects, collaborate with teammates, and share open source work.",
      },
      {
        title: "iTerm2",
        description: "A flexible terminal that keeps everyday command-line work close at hand.",
      },
    ],
  },
  {
    name: "Design",
    items: [
      {
        title: "Figma",
        description: "For exploring ideas, working through a flow, and collaborating on a design.",
      },
      {
        title: "FigJam",
        description: "A relaxed space for mapping ideas and making sense of a problem together.",
      },
    ],
  },
  {
    name: "Productivity",
    items: [
      {
        title: "Notion",
        description: "A flexible home for notes, plans, and the details I want to remember.",
      },
      {
        title: "Things",
        description: "A simple task manager that helps me focus on what needs doing next.",
      },
    ],
  },
];

export default function Uses() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-8 sm:px-8 sm:pt-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Here&apos;s a list of the tools and gear I use to do my work and make everyday life a bit better.
        </p>
      </header>

      <div className="mt-10 space-y-12">
        {groups.map(({ name, items }) => (
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
