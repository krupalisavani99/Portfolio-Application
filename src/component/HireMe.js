import React from "react";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto items-center justify-center relative md:w-24">
        <img
          src={require("../images/Circular-Text.png")}
          className="w-full h-auto fill-black animate-spin-slow "
          alt="circular-text"
        />
        <a
          href="mailto:krupalisavani9999@gmail.com"
          target="_self"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           bg-purple-600 text-white shadow-md border border-solid border-purple-600 w-20 h-20 rounded-full font-semibold hover:bg-white
           hover:text-purple-600 md:w-10 md:my-0.3 md:h-10 md:text-[10px]"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HireMe;
