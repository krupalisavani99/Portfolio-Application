import React, { useState } from "react";
import Logo from "./Logo";
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <NavLink
      to={href}
      className={`${className} relative group `}
      style={({ isActive }) =>
        isActive
          ? {
              textDecorationLine: "underline",
              height: "5px",
              // display: "inline-block",
              // position: "absolute",
              // left: "0px",
              // bottom: "-0.125rem",
              width: "100%",
            }
          : { color: "#545e6f" }
      }
    >
      {/* ${(className = "active" ? "w-full underline" : "")} */}
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-[#9333ea]
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </NavLink>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  return (
    <NavLink
      to={href}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={toggle}
    >
      {title}
      <span
        className="h-[1px] inline-block w-0 bg-black
      absolute left-0 
      "
      >
        &nbsp;
      </span>
    </NavLink>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-white relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="fixed flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/skills" title="Skills" className="mx-4" />
          {/* <CustomLink href="/contact" title="Contact" className="ml-4" /> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-2 ">
          <motion.a
            href="https://www.linkedin.com/in/krupali-savani-432a53221/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/krupalisavani99/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1 bg-white rounded-full"
          >
            <GitHubIcon />
          </motion.a>
          <button
            className="ml-3 flex items-center justify-center rounded-full p-1"
            onClick={() => setMode(mode === "white" ? "black" : "white")}
          >
            {mode === "black" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-black"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-purple-600 dark:bg-white/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            {/* <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            /> */}
          </nav>
          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href="https://www.linkedin.com/in/krupali-savani-432a53221/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/krupalisavani99/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GitHubIcon />
            </motion.a>
            <button
              className="ml-3 flex items-center justify-center rounded-full p-1"
              onClick={() => setMode(mode === "white" ? "black" : "white")}
            >
              {mode === "black" ? (
                <SunIcon className={"fill-black"} />
              ) : (
                <MoonIcon className={"fill-black"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
