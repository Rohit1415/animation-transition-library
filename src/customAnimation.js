// src/customAnimation.ts
import { motion } from 'framer-motion';
export const createCustomAnimation = (animationConfig) => {
    return motion.div(animationConfig);
};
