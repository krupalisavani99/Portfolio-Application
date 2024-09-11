import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion } from "framer-motion";

const DetailList = ({
  type,
  time,
  place,
  info,
  position,
  company,
  details,
}) => {
  const ref = useRef(null);
  console.log("details", details);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[78%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type} {position}
        </h3>
        <h4 className="capitalize font-semibold text-lg xs:text-sm">
          {company}
        </h4>
        <span className="capitalize font-medium text-black/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
        <ul className="list-disc ml-5">
          {(details || []).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default DetailList;
