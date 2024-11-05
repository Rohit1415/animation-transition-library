// src/index.ts

export const fadeIn = (element: HTMLElement, duration: number = 500) => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });
  };
  
  export const fadeOut = (element: HTMLElement, duration: number = 500) => {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    requestAnimationFrame(() => {
      element.style.opacity = '0';
    });
  };
  
  export const slideIn = (element: HTMLElement, duration: number = 500) => {
    element.style.transform = 'translateY(100%)';
    element.style.transition = `transform ${duration}ms ease-in-out`;
    requestAnimationFrame(() => {
      element.style.transform = 'translateY(0)';
    });
  };
  
  export const slideOut = (element: HTMLElement, duration: number = 500) => {
    element.style.transform = 'translateY(0)';
    element.style.transition = `transform ${duration}ms ease-in-out`;
    requestAnimationFrame(() => {
      element.style.transform = 'translateY(100%)';
    });
  };
  