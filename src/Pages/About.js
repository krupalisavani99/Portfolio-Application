import React from "react";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import profilePic from "../images/Profile-pic.png";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import TransitionEffect from "../component/TransitionEffect";
import Education from "../component/Education";

const About = () => {
  return (
    <>
      <head>
        <title> {(document.title = "About Page")}</title>
        <meta name="description" content="any description" />
      </head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 ">
                Biography
              </h2>
              <p className="font-medium">
                {" "}
                Hi, I'm Krupali Savani, a front-end web developer and React
                developer with a passion for creating beautiful,functional, and
                user-centered digital experiences. With 1 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>

              {/* <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p> */}

              <p className="my-4 font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to work excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black 
            bg-white p-8 xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-purple-600" />
              <img
                src={profilePic}
                alt="profile"
                className="w-full h-auto rounded-2xl "
              />
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default About;
