import PageIntro from "../../components/PageIntro.jsx";
import { profile, uses } from "../../data/profile.js";

export const metadata = {
  title: "Uses",
  description: `Software and tools ${profile.name} uses and recommends.`,
};

export default function Uses() {
  return (
    <div className="container-page pt-12 sm:pt-16 lg:pt-20">
      <PageIntro eyebrow="Uses" title="Software I use, tools I love, and things I recommend.">
        <p>The tools that help me with school, coding, design, and running my business.</p>
      </PageIntro>

      <div className="mt-14 space-y-6">
        {uses.map(({ name, items }) => {
          const headingId = `uses-${name.toLowerCase()}`;
          return (
            <section
              aria-labelledby={headingId}
              className="card grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
              key={name}
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight" id={headingId}>
                {name}
              </h2>
              <ul className="divide-y divide-stone-200 dark:divide-white/10">
                {items.map(({ title, description }) => (
                  <li className="py-5 first:pt-0 last:pb-0" key={title}>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1.5 max-w-2xl leading-relaxed text-stone-700 dark:text-stone-300">{description}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
