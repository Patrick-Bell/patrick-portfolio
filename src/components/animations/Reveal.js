import { motion } from 'framer-motion';

const Reveal = ({ children, index, direction }) => {
  const staggerVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index, // Adjust delay for better stagger
      }
    })
  };

  return (
    <motion.div
      style={{ textDecoration: 'none' }}
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
