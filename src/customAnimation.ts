// src/customAnimation.ts
import { motion } from 'framer-motion';

export const createCustomAnimation = (animationConfig: object) => {
  return motion.div(animationConfig);
};
