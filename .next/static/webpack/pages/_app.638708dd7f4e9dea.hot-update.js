"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Media/Carousel/Carousel.tsx":
/*!************************************************!*\
  !*** ./components/Media/Carousel/Carousel.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar imgSourcesStatic = [\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_398,w_1080/v1649490823/TP1_9536_oobzfm.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_400,w_1080,y_265/v1649490830/TP1_9579_pmpqzn.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080/v1649492162/IMG_0850_efcxd3.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080,x_2860,y_1867/v1649491859/IMG_0834_i747ll.jpg\", \n];\nvar Carousel = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        spaceBetween: 0,\n        slidesPerView: 1,\n        children: imgSourcesStatic.map(function(element) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: element\n                }, void 0, false, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Media/Carousel/Carousel.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 24\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Media/Carousel/Carousel.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Media/Carousel/Carousel.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_c = Carousel;\nfunction cicleImages(index) {\n    if (index < imgSourcesStatic.length - 1) {\n        return index + 1;\n    } else {\n        return 0;\n    }\n}\nfunction cicleImagesBack(index) {\n    if (index < imgSourcesStatic.length - 1) {\n        return index + 1;\n    } else {\n        return 0;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGlhL0Nhcm91c2VsL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5QjtBQUUwQjtBQUMvQjtBQUVwQixJQUFNRyxnQkFBZ0IsR0FBRztJQUN2QixnSEFBZ0g7SUFDaEgsc0hBQXNIO0lBQ3RILGdIQUFnSDtJQUNoSCw4SEFBOEg7Q0FDL0g7QUFFRCxJQUFNQyxRQUFRLEdBQUcsV0FBTTs7SUFDckIscUJBQ0UsOERBQUNILGdEQUFNO1FBQUNJLFlBQVksRUFBRSxDQUFDO1FBQUVDLGFBQWEsRUFBRSxDQUFDO2tCQUVyQ0gsZ0JBQWdCLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7MEJBQ2hDLDhEQUFDTixxREFBVzswQkFBQyw0RUFBQ08sS0FBRztvQkFBQ0MsR0FBRyxFQUFFRixPQUFPOzs7OzswQkFBRzs7Ozs7c0JBQWM7U0FDaEQsQ0FBQzs7Ozs7YUFFRyxDQUNWO0NBQ0Y7QUFWS0osS0FBQUEsUUFBUTtBQVlkLFNBQVNPLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO0lBQzFCLElBQUlBLEtBQUssR0FBR1QsZ0JBQWdCLENBQUNVLE1BQU0sR0FBRSxDQUFDLEVBQ3RDO1FBQ0UsT0FBT0QsS0FBSyxHQUFFLENBQUMsQ0FBQztLQUNqQixNQUVEO1FBQ0UsT0FBTyxDQUFDLENBQUM7S0FDVjtDQUNGO0FBRUQsU0FBU0UsZUFBZSxDQUFDRixLQUFLLEVBQUU7SUFDOUIsSUFBSUEsS0FBSyxHQUFHVCxnQkFBZ0IsQ0FBQ1UsTUFBTSxHQUFFLENBQUMsRUFDdEM7UUFDRSxPQUFPRCxLQUFLLEdBQUUsQ0FBQyxDQUFDO0tBQ2pCLE1BRUQ7UUFDRSxPQUFPLENBQUMsQ0FBQztLQUNWO0NBQ0Y7QUFFRCwrREFBZVIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lZGlhL0Nhcm91c2VsL0Nhcm91c2VsLnRzeD9hNGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdCBmcm9tICcuL0Nhcm91c2VsLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuXG5jb25zdCBpbWdTb3VyY2VzU3RhdGljID0gW1xuICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWF5ZGF5LXNvdW5kc3lzdGVtL2ltYWdlL3VwbG9hZC9jX2Nyb3AsaF8zOTgsd18xMDgwL3YxNjQ5NDkwODIzL1RQMV85NTM2X29vYnpmbS5qcGcnLFxuICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWF5ZGF5LXNvdW5kc3lzdGVtL2ltYWdlL3VwbG9hZC9jX2Nyb3AsaF80MDAsd18xMDgwLHlfMjY1L3YxNjQ5NDkwODMwL1RQMV85NTc5X3BtcHF6bi5qcGcnLFxuICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWF5ZGF5LXNvdW5kc3lzdGVtL2ltYWdlL3VwbG9hZC9jX2ZpbGwsaF80MDAsd18xMDgwL3YxNjQ5NDkyMTYyL0lNR18wODUwX2VmY3hkMy5qcGcnLFxuICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWF5ZGF5LXNvdW5kc3lzdGVtL2ltYWdlL3VwbG9hZC9jX2ZpbGwsaF80MDAsd18xMDgwLHhfMjg2MCx5XzE4NjcvdjE2NDk0OTE4NTkvSU1HXzA4MzRfaTc0N2xsLmpwZycsXG5dXG5cbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTd2lwZXIgc3BhY2VCZXR3ZWVuPXswfSBzbGlkZXNQZXJWaWV3PXsxfT5cbiAgICAgIHtcbiAgICAgICAgaW1nU291cmNlc1N0YXRpYy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+PGltZyBzcmM9e2VsZW1lbnR9Lz48L1N3aXBlclNsaWRlPlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvU3dpcGVyPlxuICApXG59XG5cbmZ1bmN0aW9uIGNpY2xlSW1hZ2VzKGluZGV4KSB7XG4gIGlmIChpbmRleCA8IGltZ1NvdXJjZXNTdGF0aWMubGVuZ3RoIC0xKVxuICB7XG4gICAgcmV0dXJuIGluZGV4ICsxO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNpY2xlSW1hZ2VzQmFjayhpbmRleCkge1xuICBpZiAoaW5kZXggPCBpbWdTb3VyY2VzU3RhdGljLmxlbmd0aCAtMSlcbiAge1xuICAgIHJldHVybiBpbmRleCArMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbCJdLCJuYW1lcyI6WyJSZWFjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiaW1nU291cmNlc1N0YXRpYyIsIkNhcm91c2VsIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsIm1hcCIsImVsZW1lbnQiLCJpbWciLCJzcmMiLCJjaWNsZUltYWdlcyIsImluZGV4IiwibGVuZ3RoIiwiY2ljbGVJbWFnZXNCYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Media/Carousel/Carousel.tsx\n");

/***/ })

});