// src/AnimatedComponents.tsx
import React, { useEffect, useRef } from 'react';
import { fadeIn, fadeOut, slideIn, slideOut, zoomIn, zoomOut, rotate } from './index';

// Fade In Component
export const FadeIn: React.FC<{ duration?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            fadeIn(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};

// Fade Out Component
export const FadeOut: React.FC<{ duration?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            fadeOut(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};

// Slide In Component
export const SlideIn: React.FC<{ duration?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            slideIn(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};

// Slide Out Component
export const SlideOut: React.FC<{ duration?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            slideOut(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};

// Zoom In Component
export const ZoomIn: React.FC<{ duration?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            zoomIn(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};

// Zoom Out Component
export const ZoomOut: React.FC<{ duration?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            zoomOut(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};

// Rotate Component
export const Rotate: React.FC<{ duration?: number; degrees?: number; children: React.ReactNode; onAnimationEnd?: () => void; }> = ({ duration = 500, degrees = 360, children, onAnimationEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            rotate(ref.current, duration, degrees);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, degrees, onAnimationEnd]);

    return <div ref={ref}>{children}</div>;
};
