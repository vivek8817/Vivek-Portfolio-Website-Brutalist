import { Link } from "react-router-dom";
import Reveal from "../components/animations/Reveal";
import FlipLink from "../components/animations/FlipLink";

import CRM_Dashboard from "../assets/Main images/CRM_Dashboard.png";
import CRM_Website from "../assets/Main images/CRM_Website.png";
import macOS_Portfolio from "../assets/Main images/Macos_Portolio.png";
import Taskify from "../assets/Main images/Taskify.png";
import Trello_Dnd from "../assets/Main images/Trello_Dnd.png";

const projects = [
  {
    id: "crm-dashboard",
    title: "CRM Dashboard",
    year: "2026",
    category: "Frontend",
    image: CRM_Dashboard,
    alt: "CRM Dashboard preview",
  },
  {
    id: "crm-website",
    title: "macOS Style Portfolio",
    year: "2026",
    category: "Frontend",
    image: CRM_Website,
    alt: "macOS Style Portfolio preview",
  },
  {
    id: "taskify",
    title: "Taskify",
    year: "2026",
    category: "MERN Stack",
    image: Taskify,
    alt: "Taskify preview",
  },
  {
    id: "macos-portfolio",
    title: "MacOs Style Portfolio",
    year: "2026",
    category: "React",
    image: macOS_Portfolio,
    alt: "macOS Portfolio preview",
  },
  {
    id: "trello-dnd-manager",
    title: "Trello Style DnD Manager",
    year: "2025",
    category: "React + DnD",
    image: Trello_Dnd,
    alt: "Trello Style DnD Manager preview",
  },
];

const Home = () => {
  return (
    <>
      <Reveal
        as="section"
        className="w-full max-w-container mx-auto px-4 mt-32 md:mt-48 mb-16 flex flex-row"
        delay="300ms"
      >
        <div className="hidden sm:block sm:w-[35%] lg:w-[35%]"></div>

        <div className="w-full sm:w-[65%] md:w-[50%] lg:w-[50%]">
          <p className="text-body lg:text-title font-medium leading-[1.3] text-gray-900 tracking-tight">
            I'm a full stack web developer building modern, scalable, and
            high-performance digital experiences powered by clean frontend
            systems, robust backend architecture, and AI-driven workflows.{" "}
            <span className="text-gray-400 font-normal">
              My work combines design, development, and functionality to create
              products that feel intuitive, fast, and meaningful.
            </span>
          </p>
        </div>

        <div className="hidden md:block md:w-[15%] lg:w-[15%]"></div>
      </Reveal>

      <Reveal
        as="section"
        id="projects"
        className="w-full max-w-container mx-auto px-4 mb-32 flex flex-col sm:flex-row"
      >
        <div className="w-full sm:w-[35%] lg:w-[35%] mb-8 sm:mb-0">
          <div className="flex flex-col">
            <h2 className="text-nav font-medium text-black">
              Featured Projects
            </h2>
            <p className="text-nav text-gray-500">2025 - 2026</p>
          </div>
        </div>

        <div className="w-full sm:w-[65%] md:w-[50%] lg:w-[50%]">
          <div className="flex justify-between items-center mb-12 text-nav font-medium text-black">
            <FlipLink
              href="https://github.com/vivek8817"
              className="text-nav"
              hoverColor="text-gray-500"
              target="_blank"
            >
              Check all projects &rarr;
            </FlipLink>
            <FlipLink
              href="mailto:vivekfathom@gmail.com"
              className="text-nav"
              hoverColor="text-gray-500"
            >
              Contact Me &rarr;
            </FlipLink>
          </div>

          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block mb-16 text-current no-underline"
            >
              <article className="flex flex-col gap-y-4 group cursor-pointer">
                <div className="flex justify-between items-end text-nav font-medium">
                  <h3 className="text-black">{project.title}</h3>
                  <div className="flex gap-x-2">
                    <span className="bg-black text-white px-2 py-2 text-sm leading-none">
                      {project.year}
                    </span>
                    <span className="bg-black text-white px-2 py-2 text-sm leading-none">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500 ease-out">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="hidden md:block md:w-[15%] lg:w-[15%]"></div>
      </Reveal>

      <Reveal
        as="section"
        className="w-full max-w-container mx-auto px-4 mb-24 flex flex-col sm:flex-row"
      >
        <div className="w-full sm:w-[35%] lg:w-[35%] mb-8 sm:mb-0">
          <div className="flex flex-col">
            <h2 className="text-nav font-medium text-black">About me</h2>
            <p className="text-nav text-gray-400">Vivek Ahirwar</p>
          </div>
        </div>

        <div className="w-full sm:w-[65%] md:w-[50%] lg:w-[50%]">
          <div className="text-24 leading-[1.3] tracking-tight">
            <span className="text-black font-medium">
              I care about building digital products that people genuinely
              enjoy using. Whether it's a modern frontend interface, a scalable
              backend system, or an AI-powered workflow,
            </span>{" "}
            <span className="text-gray-500 font-normal">
              my approach is guided by simplicity, performance, scalability, and
              a constant drive to create better user experiences through code
              and design.
            </span>
          </div>

          <div
            id="tech-stack"
            className="flex flex-col sm:flex-row mt-12 gap-y-8 sm:gap-y-0 sm:gap-x-24 lg:gap-x-32"
          >
            <div className="flex flex-col">
              <h3 className="text-nav font-medium text-black mb-4">
                Tech Stack
              </h3>
              <ul className="text-nav text-gray-500 flex flex-col gap-y-2">
                <li>React, JavaScript, TypeScript</li>
                <li>Tailwind CSS, Framer Motion</li>
                <li>Node.js, Express.js</li>
                <li>MongoDB, PostgreSQL</li>
                <li>OpenAI APIs & AI Workflows</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-[15%] lg:w-[15%]"></div>
      </Reveal>
    </>
  );
};

export default Home;
