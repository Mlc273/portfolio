"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          autoComplete="email"
          className="min-w-0 flex-1 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-zinc-950 dark:text-white"
          id="newsletter-email"
          name="email"
          onChange={() => setSubmitted(false)}
          placeholder="Email address"
          required
          type="email"
        />
        <button
          className="rounded-md bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-teal-200"
          type="submit"
        >
          Join
        </button>
      </div>
      <p aria-live="polite" className="mt-2 min-h-4 text-[11px] text-teal-700 dark:text-teal-300">
        {submitted ? "Thanks! Connect a newsletter service to receive updates." : ""}
      </p>
    </form>
  );
}
