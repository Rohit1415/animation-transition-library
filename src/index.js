"use strict";
// src/index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInOut = exports.easeOut = exports.easeIn = exports.animateMultiple = exports.rotate = exports.zoomOut = exports.zoomIn = exports.slideOut = exports.slideIn = exports.fadeOut = exports.fadeIn = void 0;
// Fade In Animation
var fadeIn = function (element, duration) {
    if (duration === void 0) { duration = 500; }
    element.style.opacity = '0';
    element.style.transition = "opacity ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.opacity = '1';
    });
};
exports.fadeIn = fadeIn;
// Fade Out Animation
var fadeOut = function (element, duration) {
    if (duration === void 0) { duration = 500; }
    element.style.opacity = '1';
    element.style.transition = "opacity ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.opacity = '0';
    });
};
exports.fadeOut = fadeOut;
// Slide In Animation
var slideIn = function (element, duration) {
    if (duration === void 0) { duration = 500; }
    element.style.transform = 'translateY(100%)';
    element.style.transition = "transform ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.transform = 'translateY(0)';
    });
};
exports.slideIn = slideIn;
// Slide Out Animation
var slideOut = function (element, duration) {
    if (duration === void 0) { duration = 500; }
    element.style.transform = 'translateY(0)';
    element.style.transition = "transform ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.transform = 'translateY(100%)';
    });
};
exports.slideOut = slideOut;
// Zoom In Animation
var zoomIn = function (element, duration) {
    if (duration === void 0) { duration = 500; }
    element.style.transform = 'scale(0)';
    element.style.transition = "transform ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.transform = 'scale(1)';
    });
};
exports.zoomIn = zoomIn;
// Zoom Out Animation
var zoomOut = function (element, duration) {
    if (duration === void 0) { duration = 500; }
    element.style.transform = 'scale(1)';
    element.style.transition = "transform ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.transform = 'scale(0)';
    });
};
exports.zoomOut = zoomOut;
// Rotate Animation
var rotate = function (element, duration, degrees) {
    if (duration === void 0) { duration = 500; }
    if (degrees === void 0) { degrees = 360; }
    element.style.transform = "rotate(0deg)";
    element.style.transition = "transform ".concat(duration, "ms ease-in-out");
    requestAnimationFrame(function () {
        element.style.transform = "rotate(".concat(degrees, "deg)");
    });
};
exports.rotate = rotate;
// Combined Animation Function
var animateMultiple = function (element, animations, duration) {
    if (duration === void 0) { duration = 500; }
    var animateNext = function (index) {
        if (index < animations.length) {
            animations[index](element, duration);
            setTimeout(function () {
                animateNext(index + 1);
            }, duration);
        }
    };
    animateNext(0);
};
exports.animateMultiple = animateMultiple;
// Easing Functions
exports.easeIn = 'cubic-bezier(0.42, 0, 1, 1)';
exports.easeOut = 'cubic-bezier(0, 0, 0.58, 1)';
exports.easeInOut = 'cubic-bezier(0.42, 0, 0.58, 1)';
__exportStar(require("./AnimatedComponents"), exports); // Add this line to export your new components
