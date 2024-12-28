import React from "react";
import "./hero.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const variantsText = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const variantsSlider = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const variantsLink = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariantsItem = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variantsText}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={variantsText}>The Nexus</motion.h2>
          <motion.h1 variants={variantsText}>Your One Stop Solution</motion.h1>
          <motion.div className="buttons" variants={variantsText}>
            <Link
              to="Portfolio" // ID of the target section
              smooth={true} // Smooth scrolling
              duration={2000} // Scroll duration in milliseconds
            >
              <motion.button variants={variantsText}>
                See Latest Work
              </motion.button>
            </Link>
            <Link
              to="Contact" // ID of the target section
              smooth={true} // Smooth scrolling
              duration={2000} // Scroll duration in milliseconds
            >
              <motion.button variants={variantsText}>Contact Us</motion.button>
            </Link>
          </motion.div>
          <motion.img
            variants={variantsText}
            animate="scrollButton"
            src="./scroll.png"
            alt="scroll"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={variantsSlider}
          initial="initial"
          animate="animate"
        >
          Marketing and Branding Experts
        </motion.div>
        <motion.div className="imageContainer">
          <motion.img
            src="/homepage/living_tree_enhanced_cropped.png"
            alt="hero image"
            variants={imageAnimation}
            animate="animate"
          />
        </motion.div>
      </div>
    </div>
  );
};

// Animation Variants
const imageAnimation = {
  animate: {
    height: ["45%", "60%", "75%", "100%"], // Changes from 30% to 45% viewport height
    transition: {
      duration: 9, // Total duration of the full animation
      // repeat: Infinity, // Infinite loop
    },
  },
};

export default Hero;
