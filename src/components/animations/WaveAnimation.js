import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const WaveAnimation = () => {
  return (
    <Typography
      variant="subtitle2"
      sx={{ color: 'text.secondary', display: 'inline-flex', alignItems: 'center' }}
    >
      Hi
      <motion.span
        style={{ display: 'inline-block', margin:'0 5px' }}
        animate={{
          rotate: [0, 10, 0, -10, 0], // Rotate back and forth
        }}
        transition={{
          duration: 1, // Duration of one full animation cycle
          repeat: Infinity, // Infinite loop
          ease: 'easeInOut',
        }}
      >
        👋
      </motion.span>
      My name is Patrick.
    </Typography>
  );
};

export default WaveAnimation;
