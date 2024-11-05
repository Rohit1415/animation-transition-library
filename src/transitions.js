"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slideIn = exports.fadeIn = void 0;
// src/transitions.ts
exports.fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
exports.slideIn = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
};
// You can also export more transition effects as needed.
