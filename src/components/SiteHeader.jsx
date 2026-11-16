"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-5 sm:px-8">
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-0.5 rounded-full border border-zinc-100 bg-white/90 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-900/90"
      >
        {navigation.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "rounded-full px-2.5 py-2 text-[11px] font-medium transition-colors sm:px-3 sm:text-xs",
                isActive
                  ? "text-teal-600 dark:text-teal-300"
                  : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
              )}
              href={href}
              key={href}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <button
        aria-label="Toggle color theme"
        className="absolute right-5 grid h-9 w-9 place-items-center rounded-full border border-zinc-100 bg-white text-teal-600 shadow-sm transition hover:scale-105 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:border-white/10 dark:bg-zinc-900 dark:text-teal-300 dark:hover:bg-zinc-800 sm:right-8"
        onClick={toggleTheme}
        type="button"
      >
        <svg aria-hidden="true" className="dark:hidden" fill="none" height="17" viewBox="0 0 24 24" width="17">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.7"
          />
        </svg>
        <svg aria-hidden="true" className="hidden dark:block" fill="none" height="17" viewBox="0 0 24 24" width="17">
          <path
            d="M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8 8.7 8.7 0 1 0 20.2 15.4Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      </button>
    </header>
  );
}
