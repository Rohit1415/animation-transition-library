"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomAnimation = void 0;
// src/customAnimation.ts
var framer_motion_1 = require("framer-motion");
var createCustomAnimation = function (animationConfig) {
    return framer_motion_1.motion.div(animationConfig);
};
exports.createCustomAnimation = createCustomAnimation;
