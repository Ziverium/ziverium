import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallex.scss";

// Variants for continuous sliding
const variantsSlider = {
  animate: {
    x: ["0%", "-100%"], // Start at 0%, move to -100% (scroll off screen)
    transition: {
      x: {
        repeat: Infinity, // Infinite repeat
        repeatType: "loop", // Loop the animation back
        duration: 60, // Total duration for one cycle
        ease: "linear", // Smooth continuous scrolling
      },
    },
  },
};
const Parallex = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d"
            : "linear-gradient(180deg,#111132,#505064",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do" : "What We Did"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <div></div>
      <motion.div className="stars" variants={variantsSlider} animate="animate">
        <img src="/stars.png" alt="Star 1" />
        <img src="/stars.png" alt="Star 2" />
      </motion.div>
    </div>
  );
};

export default Parallex;
