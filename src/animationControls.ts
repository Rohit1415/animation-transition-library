// src/animationControls.ts
import { useAnimation } from 'framer-motion';

export const useAnimationControl = () => {
  const controls = useAnimation();

  const startAnimation = async (animation: object) => {
    await controls.start(animation);
  };

  const stopAnimation = () => {
    controls.stop();
  };

  return {
    controls,
    startAnimation,
    stopAnimation,
  };
};
