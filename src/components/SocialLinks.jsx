import { icons, socialLinks } from "../data/social.jsx";

export default function SocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-3">
      {socialLinks.map(({ key, label, href }) => (
        <a
          aria-label={label}
          className="text-zinc-500 transition-colors hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-300"
          href={href}
          key={key}
          rel="noreferrer"
          target="_blank"
        >
          {icons[key]}
        </a>
      ))}
    </div>
  );
}
