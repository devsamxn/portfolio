import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  harvard,
  express,
  reactquery,
  next,
  mysql,
  delieats,
  highlandhaven,
  employee,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "socials",
  //   title: "Socials",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  { name: "Express JS", icon: express },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  { name: "React Query", icon: reactquery },
  { name: "Next JS", icon: next },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: harvard,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: harvard,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Deli Eats",
    description:
      "Food ordering platform with a seamless UI, offering cuisine and location-based filtering for an intuitive user experience. Developed tools for restaurant owners to manage listings, upload images, and update delivery statuses. Designed with a responsive layout, ensuring a seamless experience across both desktop and mobile devices.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },

      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: delieats,
    source_code_link: "https://github.com/devsamxn/DeliEats-frontend",
    live_link: "https://eats-4yyn.onrender.com/",
  },
  {
    name: "The Highland Haven",
    description:
      "Resort booking platform with an intuitive and user-friendly experience, offering detailed resort and room information, advanced cabin filtering, and hassle-free reservation management. Designed to provide a smooth and efficient booking experience for users across all devices.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },

      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      // Next.js, React.js, Node.js, Tailwind CSS, NextAuth.js, Supabase
    ],
    image: highlandhaven,
    source_code_link: "https://github.com/devsamxn/the-highland-haven",
    live_link: "https://thehighlandhaven.vercel.app/",
  },
  {
    name: "The Highland Haven-Admin App",
    description:
      "Internal resort management platform designed for admins and employees to streamline user administration, booking and sales management. Features an interactive dashboard for visualizing sales, stay durations, and occupancy trends. Equipped with tools for analyzing bookings and  monitoring check-ins/check-outs, and optimizing operational efficiency to enhance decision-making and workflow management.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "recharts",
        color: "pink-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      // Used React for UI, Supabase for BaaS, Styled-components for component level styling, React-Queryfor server state management, and Recharts for dynamic data visualizations.
    ],
    image: employee,
    source_code_link:
      "https://github.com/devsamxn/the-highland-haven-employee-app",
    live_link: "https://thehighlandhaven-staff.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
