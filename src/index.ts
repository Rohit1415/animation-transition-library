// src/index.ts

// Fade In Animation
export const fadeIn = (element: HTMLElement, duration: number = 500) => {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.opacity = '1';
  });
};

// Fade Out Animation
export const fadeOut = (element: HTMLElement, duration: number = 500) => {
  element.style.opacity = '1';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.opacity = '0';
  });
};

// Slide In Animation
export const slideIn = (element: HTMLElement, duration: number = 500) => {
  element.style.transform = 'translateY(100%)';
  element.style.transition = `transform ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.transform = 'translateY(0)';
  });
};

// Slide Out Animation
export const slideOut = (element: HTMLElement, duration: number = 500) => {
  element.style.transform = 'translateY(0)';
  element.style.transition = `transform ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.transform = 'translateY(100%)';
  });
};

// Zoom In Animation
export const zoomIn = (element: HTMLElement, duration: number = 500) => {
  element.style.transform = 'scale(0)';
  element.style.transition = `transform ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.transform = 'scale(1)';
  });
};

// Zoom Out Animation
export const zoomOut = (element: HTMLElement, duration: number = 500) => {
  element.style.transform = 'scale(1)';
  element.style.transition = `transform ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.transform = 'scale(0)';
  });
};

// Rotate Animation
export const rotate = (element: HTMLElement, duration: number = 500, degrees: number = 360) => {
  element.style.transform = `rotate(0deg)`;
  element.style.transition = `transform ${duration}ms ease-in-out`;
  requestAnimationFrame(() => {
      element.style.transform = `rotate(${degrees}deg)`;
  });
};

// Combined Animation Function
export const animateMultiple = (element: HTMLElement, animations: Array<(el: HTMLElement, duration?: number) => void>, duration: number = 500) => {
  const animateNext = (index: number) => {
      if (index < animations.length) {
          animations[index](element, duration);
          setTimeout(() => {
              animateNext(index + 1);
          }, duration);
      }
  };
  animateNext(0);
};

// Easing Functions
export const easeIn = 'cubic-bezier(0.42, 0, 1, 1)';
export const easeOut = 'cubic-bezier(0, 0, 0.58, 1)';
export const easeInOut = 'cubic-bezier(0.42, 0, 0.58, 1)';


export * from './AnimatedComponents'; // Add this line to export your new components
