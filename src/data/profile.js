// All of the personal content on the site lives here.
// Edit this file to change your name, bio, links, experience, projects, and tools.

export const profile = {
  name: "Michelle Christiansen",
  firstName: "Michelle",
  initials: "MC",
  role: "Computer Science Student",
  location: "Clearfield, Utah",
  headline: "Decades of serving people. Now I'm learning to build for them on the web.",
  intro:
    "I'm a friendly, outgoing people person who has managed properties, run my own business, and kept students safe on the road. Today I'm studying computer science at Ensign College and building websites that are clear, welcoming, and easy to use.",
  aboutTitle: "I'm Michelle. I love people, hard work, and learning something new.",
  about: [
    "For more than 35 years I've managed properties for Cornelius and Son's: rental agreements, tenant payments, inspections, hiring subcontractors, and tax paperwork. Since 2014 I've also run my own nail business, Christiansen Creative Creations, where I handle everything from design and customer service to marketing and the books.",
    "Along the way I drove a school bus for Davis School District for 17 years, worked security at Lagoon, delivered for Amazon, managed a wellness office, and spent twelve years as a dental assistant, including time at the University of Utah Hospital.",
    "Now I'm studying computer science at Ensign College. This portfolio is my CS220 project: my group designed the template together, and I adapted it to tell my own story. It's built with Next.js and Tailwind CSS and published with GitHub Pages.",
    "When I'm not working or studying, you'll find me western swing dancing, camping, doing crafts and art projects, or spending time with my family.",
  ],
  // To change the photo, replace public/profile.webp (or point this at another file in public/).
  photo: "/profile.webp",
  links: {
    github: "https://github.com/mlc273",
    // Add your LinkedIn URL here to show a LinkedIn link, e.g. "https://www.linkedin.com/in/your-name/".
    linkedin: null,
  },
};

// Big numbers shown near the top of the Home page.
export const highlights = [
  { value: "35+", label: "years managing rental properties" },
  { value: "17", label: "years driving for Davis School District" },
  { value: "10+", label: "years running my own business" },
];

export const notes = [
  {
    id: "building-this-portfolio",
    title: "Building this portfolio",
    excerpt:
      "How my CS220 group turned a Figma design into a reusable Next.js template, and how I adapted it, added dark mode, and published it with GitHub Pages.",
  },
  {
    id: "learning-react",
    title: "What clicked for me with React",
    excerpt:
      "Breaking a page into small components with clear props made big layouts feel manageable, a lot like breaking a busy workday into a checklist.",
  },
  {
    id: "working-in-a-group-repo",
    title: "Working in a shared GitHub repository",
    excerpt:
      "Branches, pull requests, and code review made group work smoother. Here's what I'd tell myself before my first group assignment.",
  },
];

export const work = [
  {
    name: "Christiansen Creative Creations",
    role: "Owner & Nail Technician",
    years: "2014 – Present",
    summary:
      "Run every part of the business: scheduling, supplies, money, customer service, nail design, marketing, and social media.",
  },
  {
    name: "Cornelius and Son's",
    role: "Property Manager",
    years: "1988 – Present",
    summary:
      "Handle rental agreements and tenant payments, show and inspect properties, hire subcontractors, and keep tax records.",
  },
  {
    name: "Davis School District",
    role: "Bus Driver",
    years: "2006 – 2023",
    summary:
      "Safely transported students to school and activities with a CDL and passenger endorsement, CPR, and defensive driver training.",
  },
  {
    name: "Lagoon",
    role: "Security",
    years: "2023",
    summary: "Patrolled the park, documented incidents, checked security equipment, and worked with EMT staff.",
  },
  {
    name: "Amazon (contracted)",
    role: "Delivery Driver",
    years: "2021 – 2022",
    summary: "Picked up and delivered crates to post offices, a role that required federal clearance.",
  },
  {
    name: "Life Long Wellness",
    role: "Office Manager",
    years: "2002 – 2004",
    summary: "Scheduled appointments, managed patient flow, verified insurance, and took payments.",
  },
  {
    name: "Dental Private Practice",
    role: "Dental Assistant",
    years: "1989 – 2001",
    summary:
      "Certified in radiology and chair-side assisting across several offices and the University of Utah Hospital.",
  },
];

export const education = [
  { name: "Ensign College", detail: "Computer Science", years: "Present" },
  { name: "DATC", detail: "Cosmetology, Nail Technician", years: "2014 – 2015" },
  { name: "Clearfield High School", detail: "Honor Roll and Academic Award", years: "1986 – 1989" },
];

export const hobbies = ["Western swing dancing", "Camping and the outdoors", "Crafts and art", "Time with family"];

export const skills = [
  { label: "Customer service", value: 95 },
  { label: "Business management", value: 90 },
  { label: "HTML & CSS", value: 70 },
  { label: "JavaScript & React", value: 55 },
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
