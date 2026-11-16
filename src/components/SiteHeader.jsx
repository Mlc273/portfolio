"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { assignmentOneHref, navigation } from "../data/navigation.js";
import { profile } from "../data/profile.js";

function isActive(pathname, href) {
  const clean = (path) => path.replace(/\/$/, "") || "/";
  return clean(pathname) === clean(href);
}

function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be blocked (for example in private windows); the toggle still works for this visit.
    }
  }

  return (
    <button
      aria-label="Switch between light and dark mode"
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 dark:border-white/20 dark:text-stone-200 dark:hover:bg-white/10"
      onClick={toggleTheme}
      type="button"
    >
      <svg aria-hidden="true" className="dark:hidden" fill="none" height="18" viewBox="0 0 24 24" width="18">
        <path
          d="M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8 8.7 8.7 0 1 0 20.2 15.4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
      <svg aria-hidden="true" className="hidden dark:block" fill="none" height="18" viewBox="0 0 24 24" width="18">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    </button>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = navigation.map(({ href, label }) => {
    const active = isActive(pathname, href);
    return (
      <Link
        aria-current={active ? "page" : undefined}
        className={clsx(
          "rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
          active
            ? "bg-teal-50 text-teal-800 dark:bg-teal-300/10 dark:text-teal-200"
            : "text-stone-700 hover:bg-stone-100 hover:text-ink dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white",
        )}
        href={href}
        key={href}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    );
  });

  const assignmentOneLink = (
    <a className="btn-secondary whitespace-nowrap !px-4 !py-2" href={assignmentOneHref}>
      Assignment One
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-paper/85 backdrop-blur-md dark:border-white/10 dark:bg-ink/85">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight" href="/">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full bg-teal-700 font-sans text-sm font-bold text-white dark:bg-teal-300 dark:text-ink"
          >
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">{assignmentOneLink}</div>
          <ThemeToggle />
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-stone-300 md:hidden dark:border-white/20"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="container-page flex flex-col gap-1 border-t border-stone-200/70 pb-5 pt-3 md:hidden dark:border-white/10"
          id="mobile-menu"
        >
          {navLinks}
          <div className="mt-2">{assignmentOneLink}</div>
        </nav>
      )}
    </header>
  );
}
