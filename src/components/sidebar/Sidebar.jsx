import React, { useState } from "react";
import Links from "./links/Links";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButtons/ToggleButton";
import "./sidebar.scss";

const variantsSidebar = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      duration: 2,
      type: "smooth",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variantsSidebar}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
