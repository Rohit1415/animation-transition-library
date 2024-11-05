// src/animationControls.ts
import { useAnimation, AnimationDefinition } from 'framer-motion';

export const useAnimationControl = () => {
  const controls = useAnimation();

  // Change the type from `object` to `AnimationDefinition` or appropriate type
  const startAnimation = async (animation: AnimationDefinition) => {
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
