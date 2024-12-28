import React, { useRef } from "react";
import "./services.scss";
import { color, motion, useInView } from "framer-motion";

const varaintService = {
  initial: {
    y: 200, // Adjusted to a more reasonable value
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.2,
    },
  },
};
const Services = () => {
  const textContainerRef = useRef();
  const isTextContainerInView = useInView(textContainerRef, {
    margin: "-100px",
  });

  return (
    <motion.div
      className="services"
      variants={varaintService}
      ref={textContainerRef}
      initial="initial"
      // animate="animate"
      animate={isTextContainerInView && "animate"}
    >
      <motion.div className="textContainer" variants={varaintService}>
        <p>
          We Focus On Helping Your Brand Grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={varaintService}>
        <div className="title">
          <img src="/people.webp" alt="Title" />
          <h1>
            <motion.b whileHover={{ color: "purple" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            For Your
            <motion.b whileHover={{ color: "orange" }}> Business</motion.b>
          </h1>
          <button style={{ pointerEvents: "none" }}>WHAT WE DO</button>
        </div>
      </motion.div>
      <ServicesSections />
    </motion.div>
  );
};

const ServicesSections = () => {
  return (
    <motion.div
      className="listContainer w-full h-full overflow-auto mt-5"
      variants={varaintService}
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 space-x-0 md:space-x-5 px-5 md:px-20">
        {/* Card 1 */}
        <div className="card w-full flex flex-col justify-start items-start p-10 min-h-[320px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl">
          <div className="icon-container bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-factory"
            >
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
              <path d="M17 18h1"></path>
              <path d="M12 18h1"></path>
              <path d="M7 18h1"></path>
            </svg>
          </div>
          <h4 className="scroll-m-20 text-2xl font-medium mb-4">
            Marketing and Branding
          </h4>
          <p className="text-lg font-light text-neutral-300">
            Empowering businesses to unify their operations, optimize their
            strategies, and accelerate growth—all from one intuitive interface.
          </p>
        </div>
        {/* Card 2 */}
        <div className="card w-full flex flex-col justify-start items-start p-10 min-h-[320px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl">
          <div className="icon-container bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-factory"
            >
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
              <path d="M17 18h1"></path>
              <path d="M12 18h1"></path>
              <path d="M7 18h1"></path>
            </svg>
          </div>
          <h4 className="scroll-m-20 text-2xl font-medium mb-4">
            IT Solutions
          </h4>
          <p className="text-lg font-light text-neutral-300">
            Empowering businesses to unify their operations, optimize their
            strategies, and accelerate growth—all from one intuitive interface.
          </p>
        </div>
        {/* Card 3 */}
        <div className="card w-full flex flex-col justify-start items-start p-10 min-h-[320px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl">
          <div className="icon-container bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-factory"
            >
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
              <path d="M17 18h1"></path>
              <path d="M12 18h1"></path>
              <path d="M7 18h1"></path>
            </svg>
          </div>
          <h4 className="scroll-m-20 text-2xl font-medium mb-4">
            Mobile App Development
          </h4>
          <p className="text-lg font-light text-neutral-300">
            Empowering businesses to unify their operations, optimize their
            strategies, and accelerate growth—all from one intuitive interface.
          </p>
        </div>

        {/** Add additional cards here */}
      </div>
    </motion.div>
  );
};

export default Services;
