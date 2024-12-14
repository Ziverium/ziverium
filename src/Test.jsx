import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  function AnimatedComponent() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hello, Animation!
      </motion.div>
    );
  }
};

export default Test;
