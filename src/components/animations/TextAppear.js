import { motion } from "framer-motion";

const TypingEffect = ({ text }) => {
  const words = text.split("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{ fontSize: "24px", fontWeight: "bold" }}
    >
      {words.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingEffect;
