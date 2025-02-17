import { duration } from '@mui/material';
import { motion } from 'framer-motion';

const Reveal = ({ children, index }) => {


    const staggerVariants = {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 3, // Controls how long each animation takes
          }
        }
      };
      

  return (
    <motion.div
      style={{ textDecoration: 'none' }}
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
