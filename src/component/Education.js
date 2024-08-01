import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-center justify-start md:w-[80%] mr-64"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}
        </h3>
        <span className="capitalize font-medium text-black/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[100%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelors in Computer Applications(BCA)"
            time="2017-2020"
            place="SDJ International College"
            work="Worked on a team responsible for developing some features like filtering, searching
        , including to do solve UI problems."
          />
          <Details
            type="Higher School(HSC) 12th science"
            time="2015-2017"
            place="Jay Ambe Vidhyabhavan"
            work="Worked on a team responsible for developing some features like filtering, searching
        , including to do solve UI problems."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
