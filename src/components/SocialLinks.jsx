import { icons, socialLinks } from "../data/social.jsx";

// Labeled links (icon + text) are easier to read and to tap than icons alone.
export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map(({ key, label, href }) => (
        <li key={key}>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-[0.95rem] font-medium text-stone-700 transition hover:border-teal-700 hover:text-teal-800 dark:border-white/20 dark:text-stone-200 dark:hover:border-teal-300 dark:hover:text-teal-200"
            href={href}
            rel="noreferrer"
            target="_blank"
          >
            {icons[key]}
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
