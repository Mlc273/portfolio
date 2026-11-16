// All of the personal content on the site lives here.
// Edit this file to change your name, bio, links, skills, projects, and tools.

export const profile = {
  name: "Michelle Christiansen",
  initials: "MC",
  headline: "Business owner, people person, and computer science student",
  location: "Clearfield, Utah",
  intro:
    "I'm a friendly, outgoing people person from Clearfield, Utah. After decades of managing property, running my own business, and keeping students safe on the road, I'm studying computer science at Ensign College and building for the web.",
  aboutTitle: "I'm Michelle. I live in Clearfield, Utah, and I love learning something new.",
  about: [
    "For more than 35 years I've managed properties for Cornelius and Son's: rental agreements, tenant payments, inspections, hiring subcontractors, and tax paperwork. Since 2014 I've also run my own nail business, Christiansen Creative Creations, where I handle everything from design and customer service to marketing and the books.",
    "Along the way I drove a school bus for Davis School District for 17 years, worked security at Lagoon, delivered for Amazon, managed a wellness office, and spent twelve years as a dental assistant, including time at the University of Utah Hospital.",
    "Now I'm studying computer science at Ensign College. This portfolio is my CS220 project: my group designed the template together, and I adapted it to tell my own story. It's built with Next.js and Tailwind CSS and published with GitHub Pages.",
    "When I'm not working or studying, you'll find me western swing dancing, camping, doing crafts and art projects, or spending time with my family.",
  ],
  // To show a photo, add an image such as public/profile.jpg and set photo: "/profile.jpg".
  photo: "/profile.jpg",
  links: {
    github: "https://github.com/mlc273",
    // Add your LinkedIn URL here to show a LinkedIn link, e.g. "https://www.linkedin.com/in/your-name/".
    linkedin: null,
  },
};

export const notes = [
  {
    id: "building-this-portfolio",
    date: "December 2026",
    title: "Building this portfolio",
    excerpt:
      "How my CS220 group turned a Figma design into a reusable Next.js template, and how I adapted it, added dark mode, and published it with GitHub Pages.",
  },
  {
    id: "learning-react",
    date: "November 2026",
    title: "What clicked for me with React",
    excerpt:
      "Breaking a page into small components with clear props made big layouts feel manageable. A few lessons I learned while building the pages in this site.",
  },
  {
    id: "working-in-a-group-repo",
    date: "October 2026",
    title: "Working in a shared GitHub repository",
    excerpt:
      "Branches, pull requests, and code review made group work smoother. Here's what I'd tell myself before my first group assignment.",
  },
];

export const work = [
  {
    name: "Christiansen Creative Creations",
    detail: "Owner & Nail Tech",
    years: "2014 – Present",
    mark: "CC",
    tone: "bg-rose-500",
  },
  { name: "Cornelius and Son's", detail: "Property Manager", years: "1988 – Present", mark: "CS", tone: "bg-teal-600" },
  { name: "Davis School District", detail: "Bus Driver", years: "2006 – 2023", mark: "DS", tone: "bg-amber-500" },
  { name: "Lagoon", detail: "Security", years: "2023", mark: "L", tone: "bg-sky-600" },
  { name: "Life Long Wellness", detail: "Office Manager", years: "2002 – 2004", mark: "LW", tone: "bg-violet-500" },
  {
    name: "Dental Private Practice",
    detail: "Dental Assistant",
    years: "1989 – 2001",
    mark: "DA",
    tone: "bg-zinc-500",
  },
];

export const education = [
  { name: "Ensign College", detail: "Computer Science", years: "Present" },
  { name: "DATC", detail: "Cosmetology, Nail Tech", years: "2014 – 2015" },
  { name: "Clearfield High School", detail: "Honor Roll, Academic Award", years: "1986 – 1989" },
];

export const hobbies = ["Western swing dancing", "Camping and anything outdoors", "Crafts and art", "Time with family"];

export const skills = [
  { label: "Customer service", value: "95%" },
  { label: "Business management", value: "90%" },
  { label: "HTML & CSS", value: "70%" },
  { label: "JavaScript & React", value: "55%" },
];

export const projects = [
  {
    name: "Portfolio Website",
    description: "This site: a responsive, four-page portfolio with dark mode, built with Next.js and Tailwind CSS.",
    type: "Next.js",
    href: "https://github.com/mlc273/portfolio",
  },
  {
    name: "Group Portfolio Template",
    description: "The shared template my CS220 group built from a Figma design so each of us could launch a portfolio.",
    type: "Team project",
    href: "https://github.com/Ensign-College/CS220-portfolio-template-mlc273",
  },
  {
    name: "React Coding Challenges",
    description: "A series of small React components and pages, each tested with Vitest, from CS220 coding challenges.",
    type: "React",
    href: "https://github.com/mlc273",
  },
  {
    name: "Object-Oriented Programs",
    description: "Programs from CS115 that practice classes, inheritance, and organizing larger pieces of code.",
    type: "Coursework",
    href: "https://github.com/mlc273",
  },
  {
    name: "Programming Foundations",
    description: "My first programs: variables, loops, functions, and solving problems one step at a time.",
    type: "Coursework",
    href: "https://github.com/mlc273",
  },
];

export const uses = [
  {
    name: "Development",
    items: [
      {
        title: "Visual Studio Code",
        description: "My editor for every class project, with ESLint and Prettier keeping my code tidy.",
      },
      {
        title: "GitHub",
        description: "Where I keep my projects, work with my group, and publish this site with GitHub Pages.",
      },
      { title: "Node.js & npm", description: "For running, testing, and building JavaScript projects like this one." },
      { title: "Next.js & Tailwind CSS", description: "The framework and styling tools this portfolio is built with." },
    ],
  },
  {
    name: "Design",
    items: [
      {
        title: "Figma",
        description: "Where my group's portfolio design started, and where I look when building a layout.",
      },
    ],
  },
  {
    name: "Business",
    items: [
      {
        title: "Social media",
        description: "How I market Christiansen Creative Creations and keep in touch with clients.",
      },
      {
        title: "Scheduling & bookkeeping",
        description: "Keeping appointments, supplies, and money organized for my business and rentals.",
      },
    ],
  },
  {
    name: "Workstation",
    items: [
      {
        title: "Windows 11 laptop",
        description: "My everyday computer for coursework, coding, and everything in between.",
      },
    ],
  },
];
