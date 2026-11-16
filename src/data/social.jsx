import { profile } from "./profile.js";

export const icons = {
  github: (
    <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
      <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.2 18 4.5 18 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3.2c0 .3.2.6.8.5A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  ),
  linkedin: (
    <svg aria-hidden="true" fill="currentColor" height="15" viewBox="0 0 24 24" width="15">
      <path d="M5.2 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.7 8.5h3v11h-3v-11Zm4.9 0h2.9V10h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v6.5h-3v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1v5.9h-3v-11Z" />
    </svg>
  ),
};

export const socialLinks = [
  { key: "github", label: "GitHub", href: profile.links.github },
  { key: "linkedin", label: "LinkedIn", href: profile.links.linkedin },
].filter(({ href }) => href);
