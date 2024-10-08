import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import { experienceData } from "../constants";
import DetailList from "./DetailList";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-[120px]">
      <h2 className="font-bold text-5xl mb-28 w-full text-center sm:!text-4xl xs:!text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative sm:w-[100%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experienceData.map((exp, index) => (
            <DetailList
              key={index}
              position={exp.position}
              company={exp.company}
              time={exp.time}
              place={exp.place}
              info={exp.info}
              details={exp.details}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

// const Details = ({ position, company, time, work, address }) => {
//   const ref = useRef(null);
//   return (
//     <li
//       ref={ref}
//       className="my-8 first:mt-0 last:mb-0 w-[78%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
//     >
//       <LiIcon reference={ref} />
//       <motion.div
//         initial={{ y: 50 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 0.5, type: "spring" }}
//       >
//         <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
//           {position}
//         </h3>
//         <h4 className="capitalize font-semibold text-lg xs:text-sm">
//           {company}
//         </h4>
//         <span className="capitalize font-medium text-black/75 xs:text-sm">
//           {time} | {address}
//         </span>
//         <p className="font-medium w-full md:text-sm">{work}</p>
//       </motion.div>
//     </li>
//   );
// };

// const Experience = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center start"],
//   });
//   return (
//     <div className="mb-[120px]">
//       <h2 className="font-bold text-6xl mb-28 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
//         Experience
//       </h2>

//       <div ref={ref} className="w-[75%] mx-auto relative">
//         <motion.div
//           style={{ scaleY: scrollYProgress }}
//           className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
//         />
//         <ul className="w-full flex flex-col items-start justify-between ml-4">
//           <Details
//             position="React developer"
//             company="Freelance"
//             time="2021-2022"
//             address="Surat"
//             work="Worked on a team responsible for developing some features like filtering, searching
//         , including to do solve UI problems."
//           />
//           <Details
//             position="Front End developer"
//             company="SKAP Solutions"
//             time="2022-2023"
//             address="Surat"
//             work="Worked on a React framework at sharepoint platform and my roles and responsibilities
//             are developing UI, Unit Testing and Web Designing."
//           />
//         </ul>
//       </div>
//     </div>
//   );
// };

export default Experience;
