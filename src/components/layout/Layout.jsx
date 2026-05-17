import { useState, useEffect } from "react";
import Reveal from "../animations/Reveal";
import FlipLink from "../animations/FlipLink";

const Layout = ({ children }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const resumeUrl = "/resume.pdf";

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans">
      {/* Navbar Container */}
      <nav className="w-full  max-w-container mx-auto px-4 pt-2  flex flex-col md:flex-row   justify-start items-start border-b border-gray-200">
        {/* Left: Logo */}
        <Reveal className="mr-24" delay="100ms">
          <h1 className="text-[8rem] lg:text-logo font-bold text-black tracking-tight  flex items-start">
            Vivek<span className="text-logo mt-3 ml-1 font-medium">®</span>
          </h1>
        </Reveal>


        {/* Right: Info Columns */}
        <Reveal className=" flex flex-wrap justify-between  pt-4 text-nav text-gray-500 font-medium gap-x-24 lg:gap-x-64" delay="200ms">
          {/* Column 1 */}
          <div className="flex flex-col ">
            <FlipLink href="/#projects" className="text-nav">
              Projects
            </FlipLink>
            <FlipLink href="/#tech-stack" className="text-nav">
              Tech Stack
            </FlipLink>
          </div>

          {/* Column 2 */}
          <div className=" flex flex-col ">
            <FlipLink href="https://github.com/vivek8817" className="text-nav" target="_blank">
              GitHub
            </FlipLink>
            <FlipLink href="https://www.linkedin.com/in/vivekahirwar/" className="text-nav" target="_blank">
              LinkedIn
            </FlipLink>
            <FlipLink href="https://x.com/awake3255068264" className="text-nav" target="_blank">
              X (Twitter)
            </FlipLink>
            <FlipLink
              href={resumeUrl}
              className="text-nav"
              target="_blank"
              rel="noreferrer"
              download="Vivek-Ahirwar-Resume.pdf"
              aria-label="Download Vivek Ahirwar resume PDF"
            >
              Resume
            </FlipLink>
          </div>

          {/* Column 3 */}
          <div className="  flex-col ">
            <p>India</p>
            <p>{time}</p>
          </div>
        </Reveal>
      </nav>

      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer Section */}
      <Reveal as="footer" className="w-full max-w-container mx-auto px-4 pb-16 flex flex-col mt-auto">
        {/* Top Info Row */}
        <div className="flex flex-col sm:flex-row w-full mb-16 sm:mb-24 text-body">
          {/* Left Column (35%) */}
          <div className="w-full sm:w-[35%] mb-8 sm:mb-0">
            <div className="flex flex-col">
              <span className="text-black font-medium">
                Vivek Ahirwar ©2026
              </span>
              <span className="text-gray-400">All rights reserved</span>
            </div>
          </div>

          {/* Middle & Right Columns Container (65%) */}
          <div className="w-full sm:w-[65%] flex flex-col sm:flex-row justify-between md:pr-[15%]">
            {/* Middle Column */}
            <div className="flex flex-col mb-8 sm:mb-0">
              <span className="text-black font-medium">Built with</span>
              <span className="text-gray-400">React, JavaScript & Tailwind</span>
            </div>
            {/* Right Column */}
            <div className="flex flex-col">
              <span className="text-black font-medium">
                Interested in building something together?
              </span>
              <FlipLink
                href="mailto:vivekfathom@gmail.com"
                className="text-gray-400"
              >
                vivekfathom@gmail.com
              </FlipLink>
            </div>
          </div>
        </div>

        {/* Massive Name Text */}
        <Reveal className="w-full flex justify-center items-center overflow-hidden pt-8">
          <h1 className="text-[16vw] xl:text-[14rem] font-bold text-black tracking-tighter leading-none select-none">
            VivekAhirwar
          </h1>
        </Reveal>
      </Reveal>
    </div>
  );
};

export default Layout;
