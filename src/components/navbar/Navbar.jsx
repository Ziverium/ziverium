import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const spanVariants = {
    hidden: { opacoty: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1.2,
      transition: { delay: 0.5, duration: 1 },
    },
  };
  return (
    <div>
      <div className="navbar">
        <div className="wrapper">
          {/* Sidebar */}
          <Sidebar />
          <motion.span
            variants={spanVariants}
            initial="hidden"
            animate="visible"
          >
            Ziverium
          </motion.span>
          <div className="social">
            <a href="#">
              <img src="/facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/youtube.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/dribbble.png" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
