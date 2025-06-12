'use client'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const getVariants = (direction) => {
  const distance = 50;

  switch (direction) {
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const AnimationScroll = ({ children, direction = "up", delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default AnimationScroll