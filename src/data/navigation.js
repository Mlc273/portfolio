export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/uses/", label: "Uses" },
];

// The first version of this site, saved as plain files in public/assignment-one.
// It's a separate static copy, so it's linked with a normal <a> tag instead of next/link.
export const assignmentOneHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assignment-one/`;
