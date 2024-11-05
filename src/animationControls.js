// src/animationControls.ts
import { useAnimation } from 'framer-motion';
export const useAnimationControl = () => {
    const controls = useAnimation();
    // Change the type from `object` to `AnimationDefinition` or appropriate type
    const startAnimation = async (animation) => {
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
