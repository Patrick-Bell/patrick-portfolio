import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { useColorContext } from "../context/ColorContext";

const TextTransition = ({ jobs }) => {
  const [index, setIndex] = React.useState(0);
  const { color } = useColorContext()

  // Handle job title cycling
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobs.length); // Ensure we loop through all job titles
    }, 3000); // Change job title every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [jobs.length]);

  // Animation variants for flying in and out from top/bottom
  const variants = {
    enter: {
      opacity: 1,
      y: '-1005',
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
    exit: {
      opacity: 0,
      y: "100%", // Move out of the screen to the bottom
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
    initial: {
      opacity: 0,
      y: "-100%", // Start from above the screen
    },
  };

  return (
    <Typography variant="subtitle2" sx={{ mt: 1, color:'grey' }}>
      I'm a self-taught Junior{" "}
      <motion.span
        key={index} // This makes sure the animation works whenever the job title changes
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        style={{ display: "inline", color: color }} // Keep the title inline with other text
      >
        <strong>{jobs[index]}</strong> {/* Use the correct job title */}
      </motion.span>{" "}
      with a passion for building clean, user-friendly web applications. I’ve spent the last 16 months honing my skills in modern front-end frameworks, translating ideas into functional and visually appealing projects.
    </Typography>
  );
};

export default TextTransition;
