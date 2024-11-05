// src/AnimatedComponents.tsx
import React, { useEffect, useRef } from 'react';
import { fadeIn, fadeOut, slideIn, slideOut, zoomIn, zoomOut, rotate } from './index';
// Fade In Component
export const FadeIn = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            fadeIn(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
// Fade Out Component
export const FadeOut = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            fadeOut(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
// Slide In Component
export const SlideIn = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            slideIn(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
// Slide Out Component
export const SlideOut = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            slideOut(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
// Zoom In Component
export const ZoomIn = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            zoomIn(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
// Zoom Out Component
export const ZoomOut = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            zoomOut(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
// Rotate Component
export const Rotate = ({ duration = 500, degrees = 360, children, onAnimationEnd }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            rotate(ref.current, duration, degrees);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, degrees, onAnimationEnd]);
    return React.createElement("div", { ref: ref }, children);
};
