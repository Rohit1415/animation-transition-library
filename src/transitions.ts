// src/transitions.ts
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  
  export const slideIn = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
  };
  
  // You can also export more transition effects as needed.
  