import { Link, useParams } from "react-router-dom";
import Reveal from "../components/animations/Reveal";
import CRM_Dashboard from "../assets/Main images/CRM_Dashboard.png";
import CRM_Website from "../assets/Main images/CRM_Website.png";
import macOS_Portfolio from "../assets/Main images/Macos_Portolio.png";
import Taskify from "../assets/Main images/Taskify.png";
import Trello_Dnd from "../assets/Main images/Trello_Dnd.png";
import CRM_Left from "../assets/left right images/CRM left.png";
import CRM_Right from "../assets/left right images/CRM Right.png";
import CRM_Website_Left from "../assets/left right images/CRMweb-left.png";
import CRM_Website_Right from "../assets/left right images/CRMweb-right.png";
import macOS_Left from "../assets/left right images/macOs-left.png";
import macOS_Right from "../assets/left right images/macOs-Right.png";
import Taskify_Left from "../assets/left right images/Taskify-left.png";
import Taskify_Right from "../assets/left right images/Taskify-right.png";
import Trello_Left from "../assets/left right images/trello-left.png";
import Trello_Right from "../assets/left right images/trello-right.png";
import CRM_Last from "../assets/last images/CRM Dashboard.png";
import CRM_Website_Last from "../assets/last images/CRM website.png";
import macOS_Last from "../assets/last images/Macos Portolio.png";
import Taskify_Last from "../assets/last images/TaskManager.png";
import Trello_Last from "../assets/last images/Trello Dnd.png";


const projectDetails = {
  "crm-dashboard": {
    eyebrowTitle: "N'001-CRM\nDash-\nboard",
    headline: "CRM Dashboard: Building Operational Clarity for Modern Teams",
    description:
      "A modern CRM dashboard focused on helping teams manage customers, monitor sales activity, and analyze business performance through a clean and distraction-free interface.",
    metadata: {
      Stack: "React, JavaScript, Tailwind CSS",
      Category: "Frontend Dashboard Application",
      Timeline: "2026",
      Status: "Still-going",
      Role: "UI/UX Design & Frontend Development",
      Overview:
        "Designed with a strong focus on usability, hierarchy, and dashboard readability, the interface prioritizes fast workflows, responsive layouts, and structured information architecture.",
      Features:
        "Analytics cards, responsive sidebar, charts, activity tracking, sales overview, dark mode UI",
      Challenges:
        "Creating a visually dense dashboard while maintaining readability and spacing consistency.",
      Learnings:
        "Improved frontend architecture, reusable component systems, and responsive dashboard design patterns.",
    },
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/vivek8817/CRM-Employee-Management-Dashboard",
      live: "https://crm-employee-management-five.vercel.app/",
    },
    image: CRM_Dashboard,
    galleryImages: {
      left: CRM_Left,
      right: CRM_Right,
      last: CRM_Last,
    },
    alt: "CRM Dashboard project preview",
  },

  "crm-website": {
    eyebrowTitle: "N'002-CRM\nWebsite",
    headline: "CRM Landing Website: Presenting SaaS Products with Clarity",
    description:
      "A modern SaaS marketing website designed to showcase CRM features, business workflows, analytics, and product value through structured layouts and smooth visual interactions.",
    metadata: {
      Stack: "React, Tailwind CSS, Framer Motion",
      Category: "Frontend Marketing Website",
      Timeline: "2026",
      Status: "Completed",
      Role: "Frontend Development & UI Design",
      Overview:
        "Built to communicate product features with clarity using modern typography, smooth animations, and responsive section-based layouts.",
      Features:
        "Hero sections, animated cards, pricing layouts, testimonials, responsive navigation, smooth scrolling",
      Challenges:
        "Balancing modern motion design with fast performance and accessibility.",
      Learnings:
        "Improved animation workflow, responsive design systems, and visual storytelling through frontend design.",
    },
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/vivek8817/CRM-Website-Modern-SAAS-Style",
      live: "https://crm-website-modern-saas-style.vercel.app/",
    },
    image: CRM_Website,
    galleryImages: {
      left: CRM_Website_Left,
      right: CRM_Website_Right,
      last: CRM_Website_Last,
    },
    alt: "CRM Landing Website project preview",
  },

  taskify: {
    eyebrowTitle: "N'003-\nTaskify",
    headline: "Taskify: A Full Stack MERN Task Management Platform",
    description:
      "A fully responsive MERN stack productivity platform built entirely with TypeScript, focused on project organization, task tracking, and team productivity through a clean and scalable architecture.",
    metadata: {
      Stack:
        "MongoDB, Express.js, React, Node.js, TypeScript, Tailwind CSS",
      Category: "Full Stack MERN Application",
      Timeline: "2026",
      Status: "In Progress",
      Role: "Full Stack Development",
      Overview:
        "Taskify combines authentication, task workflows, project organization, and responsive UI systems into a modern productivity-focused application.",
      Features:
        "JWT authentication, protected routes, drag-and-drop boards, task priorities, filtering, responsive dashboard, REST APIs",
      Challenges:
        "Managing scalable backend architecture and keeping frontend state predictable across task workflows.",
      Learnings:
        "Deepened understanding of TypeScript architecture, backend structuring, API design, and scalable MERN workflows.",
    },
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/vivek8817/Taskify-full-stack-MERN-project",
      live: "https://taskify-full-stack-mern-project.vercel.app/login",
    },
    image: Taskify,
    galleryImages: {
      left: Taskify_Left,
      right: Taskify_Right,
      last: Taskify_Last,
    },
    alt: "Taskify project preview",
  },

  "macos-portfolio": {
    eyebrowTitle: "N'004-macOS\nPortfolio",
    headline: "macOS Portfolio: Recreating Desktop Interaction on the Web",
    description:
      "A macOS-inspired portfolio experience designed around desktop interaction patterns, floating windows, smooth transitions, and immersive frontend animations.",
    metadata: {
      Stack: "React, JavaScript, Tailwind CSS, Framer Motion",
      Category: "Interactive Frontend Experience",
      Timeline: "2026",
      Status: "Completed",
      Role: "Frontend Development & UI Engineering",
      Overview:
        "This project translates desktop-inspired experiences into the browser using layered layouts, animated windows, and responsive interaction systems.",
      Features:
        "Window management UI, dock animations, smooth transitions, responsive layouts, custom interactions",
      Challenges:
        "Recreating desktop-like interaction patterns while keeping animations smooth and lightweight.",
      Learnings:
        "Learned advanced UI composition, animation orchestration, and interaction-focused frontend engineering.",
    },
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/vivek8817/MacOs-Operating-System-Portoflio-",
      live: "https://mac-os-operating-system-portoflio.vercel.app/",
    },
    image: macOS_Portfolio,
    galleryImages: {
      left: macOS_Left,
      right: macOS_Right,
      last: macOS_Last,
    },
    alt: "macOS Portfolio project preview",
  },

  "trello-dnd-manager": {
    eyebrowTitle: "N'005-Trello\nDnD",
    headline: "Trello Style Task Manager: Visual Workflow Through Drag & Drop",
    description:
      "A kanban-inspired task management interface built around intuitive drag-and-drop interactions, visual workflow organization, and lightweight productivity systems.",
    metadata: {
      Stack: "React, JavaScript, Tailwind CSS, DnD Kit",
      Category: "Interactive Frontend Application",
      Timeline: "2025",
      Status: "Completed",
      Role: "Frontend Development",
      Overview:
        "The application focuses on direct manipulation, fast task movement, and clear visual status tracking using modern drag-and-drop systems.",
      Features:
        "Kanban boards, drag-and-drop tasks, task columns, responsive design, smooth interactions",
      Challenges:
        "Handling drag interactions cleanly across responsive layouts and maintaining UI performance.",
      Learnings:
        "Improved understanding of state management, interaction systems, and dynamic UI rendering.",
    },
    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "DnD Kit",
    ],
    links: {
      github: "https://github.com/vivek8817/react-kanban-board",
      live: "https://react-kanban-board-alpha.vercel.app/",
    },
    image: Trello_Dnd,
    galleryImages: {
      left: Trello_Left,
      right: Trello_Right,
      last: Trello_Last,
    },
    alt: "Trello DnD Manager project preview",
  },
};

const fallbackProject = projectDetails["crm-website"];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id] ?? fallbackProject;
  const {
    Stack,
    Category,
    Timeline,
    Status,
    Role,
    Overview,
    Features,
    Challenges,
    Learnings,
  } = project.metadata;
  const summaryRows = [
    ["Stack", Stack],
    ["Category", Category],
    ["Timeline", Timeline],
    ["Status", Status],
    ["Role", Role],
  ];
  const detailSections = [
    ["Overview", Overview],
    ["Features", Features],
    ["Challenges", Challenges],
    ["Learnings", Learnings],
  ];
  const linkRows = Object.entries(project.links ?? {});


  return (
    <section className="w-full bg-white text-black font-sans">
      <div className="max-w-[1440px] mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 ">
          <aside className="lg:col-span-4 ">
            <div className="lg:sticky lg:top-8">
              <Reveal delay="600ms">
                <Link
                  to="/"
                  className="inline-block mb-16 text-base font-medium text-gray-500 hover:text-black transition-colors duration-300"
                >
                  &larr; Back
                </Link>
              </Reveal>
              <Reveal delay="200ms">
                <h1 className="whitespace-pre-line text-[clamp(3.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-tight text-black">
                  {project.eyebrowTitle}
                </h1>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Reveal
              className="max-w-[760px] mb-16"
              delay="600ms"
            >
              <h2 className="mb-8 text-2xl font-bold leading-tight text-black">
                {project.headline}
              </h2>
              <p className="text-base font-medium leading-relaxed text-gray-500">
                {project.description}
              </p>
            </Reveal>

            <Reveal
              as="dl"
              className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
              delay="600ms"
            >
              {summaryRows.map(([label, value]) => (
                <div key={label} className="border-t border-dashed border-gray-300 pt-4">
                  <dt className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
                    {label}
                  </dt>
                  <dd className="text-base font-medium leading-relaxed text-gray-500">
                    {value}
                  </dd>
                </div>
              ))}
            </Reveal>

            <div className="flex flex-col gap-8">
              <Reveal
                className="w-full aspect-video bg-gray-200 overflow-hidden"
                delay="600ms"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover object-top"
                />
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Reveal
                  className="w-full aspect-square bg-gray-200 overflow-hidden"
                  delay="600ms"
                >
                  <img
                    src={project.galleryImages.left}
                    alt={`${project.alt} left detail`}
                    className="h-full w-full object-cover object-top"
                  />
                </Reveal>
                <Reveal
                  className="w-full aspect-square bg-gray-200 overflow-hidden"
                  delay="600ms"
                >
                  <img
                    src={project.galleryImages.right}
                    alt={`${project.alt} right detail`}
                    className="h-full w-full object-cover object-top"
                  />
                </Reveal>
              </div>

              <Reveal
                className="w-full aspect-video bg-gray-200 overflow-hidden"
                delay="600ms"
              >
                <img
                  src={project.galleryImages.last}
                  alt={`${project.alt} wide detail`}
                  className="h-full w-full object-cover object-top"
                />
              </Reveal>
            </div>

            <div className="mt-16 max-w-[760px] ml-auto">
              {detailSections.map(([label, value], index) => (
                <Reveal
                  as="section"
                  key={label}
                  className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 border-b border-dashed border-gray-300 pb-8 mb-8"
                  delay={`${index * 100}ms`}
                >
                  <h3 className="text-base font-bold text-black">{label}</h3>
                  <p className="text-base font-medium leading-relaxed text-gray-500">
                    {value}
                  </p>
                </Reveal>
              ))}

              <Reveal
                as="section"
                className="border-b border-dashed border-gray-300 pb-8 mb-8"
                delay="100ms"
              >
                <h3 className="mb-4 text-base font-bold text-black">
                  Tech Stack
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="bg-black px-3 py-2 text-sm font-medium leading-none text-white"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {linkRows.length > 0 && (
                <Reveal as="section" delay="100ms">
                  <h3 className="mb-4 text-base font-bold text-black">
                    Project Links
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {linkRows.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center border border-black px-4 py-3 text-sm font-bold capitalize text-black transition-colors duration-300 hover:bg-black hover:text-white"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
