// The large heading block at the top of the About, Projects, and Uses pages.
export default function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h1>
      {children && (
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">{children}</div>
      )}
    </header>
  );
}
