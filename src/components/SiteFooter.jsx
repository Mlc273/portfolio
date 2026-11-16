import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-100 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <nav aria-label="Footer navigation" className="flex items-center gap-5">
          {navigation.map(({ href, label }) => (
            <Link className="transition-colors hover:text-zinc-900 dark:hover:text-white" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <p>© 2024 John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
}
