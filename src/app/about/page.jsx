import PageIntro from "../../components/PageIntro.jsx";
import Photo from "../../components/Photo.jsx";
import SocialLinks from "../../components/SocialLinks.jsx";
import WorkTimeline from "../../components/WorkTimeline.jsx";
import { education, hobbies, profile } from "../../data/profile.js";

export const metadata = {
  title: "About",
  description: `A little more about ${profile.name}: work history, education, and life outside of work.`,
};

export default function About() {
  return (
    <div className="container-page pt-12 sm:pt-16 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
        <div>
          <PageIntro eyebrow="About me" title={profile.aboutTitle} />
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <SocialLinks className="mt-8" />
        </div>
        <Photo className="mx-auto w-full max-w-sm lg:mt-4" priority />
      </div>

      <div className="mt-24 grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
        <section aria-labelledby="experience-heading">
          <p className="eyebrow">Experience</p>
          <h2 className="mb-10 mt-3 font-display text-3xl font-semibold tracking-tight" id="experience-heading">
            Where I&apos;ve worked
          </h2>
          <WorkTimeline />
        </section>

        <div className="space-y-8">
          <section aria-labelledby="education-heading" className="card">
            <h2 className="text-xl font-semibold" id="education-heading">
              Education
            </h2>
            <ul className="mt-5 divide-y divide-stone-200 dark:divide-white/10">
              {education.map(({ name, detail, years }) => (
                <li className="py-4 first:pt-0 last:pb-0" key={name}>
                  <p className="font-semibold">{name}</p>
                  <p className="text-stone-700 dark:text-stone-300">{detail}</p>
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{years}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="hobbies-heading" className="card">
            <h2 className="text-xl font-semibold" id="hobbies-heading">
              When I&apos;m not working
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <li
                  className="rounded-full bg-teal-50 px-4 py-2 text-[0.95rem] font-medium text-teal-900 dark:bg-teal-300/10 dark:text-teal-100"
                  key={hobby}
                >
                  {hobby}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
