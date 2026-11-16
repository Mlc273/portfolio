export const metadata = {
  title: "About",
  description: "A little more about Jane Doe and her work as a software engineer.",
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-8 sm:px-8 sm:pt-12">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] md:gap-14">
        <article className="max-w-xl">
          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
            I&apos;m Jane. I live in New York City, where I develop the future.
          </h1>
          <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>
        </article>

        <aside className="md:pt-1">
          <img
            alt="Jane smiling outdoors"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
            height="525"
            loading="lazy"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
            width="700"
          />
          <nav aria-label="Social profiles" className="mt-5 space-y-3">
            <a
              className="flex items-center gap-3 text-xs text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-300"
              href="https://x.com/"
              rel="noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="w-4 text-center font-semibold">
                𝕏
              </span>
              Follow me on X
            </a>
            <a
              className="flex items-center gap-3 text-xs text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-300"
              href="https://github.com/"
              rel="noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" fill="currentColor" height="15" viewBox="0 0 24 24" width="15">
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.2 18 4.5 18 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3.2c0 .3.2.6.8.5A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              Follow me on GitHub
            </a>
            <a
              className="flex items-center gap-3 text-xs text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-300"
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" fill="currentColor" height="15" viewBox="0 0 24 24" width="15">
                <path d="M5.2 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.7 8.5h3v11h-3v-11Zm4.9 0h2.9V10h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v6.5h-3v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1v5.9h-3v-11Z" />
              </svg>
              Follow me on LinkedIn
            </a>
            <a
              className="flex items-center gap-3 text-xs text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-300"
              href="mailto:jane@example.com"
            >
              <svg aria-hidden="true" fill="none" height="15" viewBox="0 0 24 24" width="15">
                <rect height="15" rx="2" stroke="currentColor" strokeWidth="1.6" width="20" x="2" y="4.5" />
                <path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              jane@example.com
            </a>
          </nav>
        </aside>
      </div>
    </div>
  );
}
