"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = exports.ZoomOut = exports.ZoomIn = exports.SlideOut = exports.SlideIn = exports.FadeOut = exports.FadeIn = void 0;
// src/AnimatedComponents.tsx
var react_1 = __importStar(require("react"));
var index_1 = require("./index");
// Fade In Component
var FadeIn = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.fadeIn)(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.FadeIn = FadeIn;
// Fade Out Component
var FadeOut = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.fadeOut)(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.FadeOut = FadeOut;
// Slide In Component
var SlideIn = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.slideIn)(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.SlideIn = SlideIn;
// Slide Out Component
var SlideOut = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.slideOut)(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.SlideOut = SlideOut;
// Zoom In Component
var ZoomIn = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.zoomIn)(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.ZoomIn = ZoomIn;
// Zoom Out Component
var ZoomOut = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.zoomOut)(ref.current, duration);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.ZoomOut = ZoomOut;
// Rotate Component
var Rotate = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, _c = _a.degrees, degrees = _c === void 0 ? 360 : _c, children = _a.children, onAnimationEnd = _a.onAnimationEnd;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            (0, index_1.rotate)(ref.current, duration, degrees);
            if (onAnimationEnd) {
                setTimeout(onAnimationEnd, duration);
            }
        }
    }, [duration, degrees, onAnimationEnd]);
    return react_1.default.createElement("div", { ref: ref }, children);
};
exports.Rotate = Rotate;
