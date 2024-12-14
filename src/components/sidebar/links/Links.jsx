import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
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

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variantsLink}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariantsItem}
          whileHover={{ scale: 1.2 }}
        >
          <Link
            to={item} // This corresponds to the ID of the section you want to scroll to
            smooth={true} // Enables smooth scrolling
            duration={1000} // Scroll duration in ms
            offset={-70} // Optional offset to add space above
          >
            {item}
          </Link>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
