"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Media/Carousel/Carousel.tsx":
/*!************************************************!*\
  !*** ./components/Media/Carousel/Carousel.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/Media/Carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar imgSourcesStatic = [\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_398,w_1080/v1649490823/TP1_9536_oobzfm.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_400,w_1080,y_265/v1649490830/TP1_9579_pmpqzn.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080/v1649492162/IMG_0850_efcxd3.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080,x_2860,y_1867/v1649491859/IMG_0834_i747ll.jpg\", \n];\nvar Carousel = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), currentIndex = ref[0], setCurrentIndex = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnRight),\n                onClick: function() {\n                    return setCurrentIndex(cicleImages(currentIndex));\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnRight),\n                onClick: function() {\n                    return setCurrentIndex(cicleImages(currentIndex));\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mediaGroup),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mediaElement),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imgSourcesStatic[currentIndex],\n                        alt: \"Carousel\"\n                    }, currentIndex, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(Carousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = Carousel;\nfunction cicleImages(index) {\n    if (index < imgSourcesStatic.length) {\n        return index + 1;\n    } else {\n        return 0;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGlhL0Nhcm91c2VsL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjOztBQUd2QyxJQUFNRSxnQkFBZ0IsR0FBRztJQUN2QixnSEFBZ0g7SUFDaEgsc0hBQXNIO0lBQ3RILGdIQUFnSDtJQUNoSCw4SEFBOEg7Q0FDL0g7QUFFRCxJQUFNQyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBd0NILEdBQWlCLGtCQUFqQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsTUFBbERLLFlBQVksR0FBcUJMLEdBQWlCLEdBQXRDLEVBQUVNLGVBQWUsR0FBSU4sR0FBaUIsR0FBckI7SUFFcEMscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUCx3RUFBWTs7MEJBQzFCLDhEQUFDTSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVQLHVFQUFXO2dCQUFFVSxPQUFPLEVBQUU7MkJBQU1MLGVBQWUsQ0FBQ00sV0FBVyxDQUFDUCxZQUFZLENBQUMsQ0FBQztpQkFBQTswQkFBRyxHQUFHOzs7OztxQkFBTzswQkFDbkcsOERBQUNFLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsdUVBQVc7Z0JBQUVVLE9BQU8sRUFBRTsyQkFBTUwsZUFBZSxDQUFDTSxXQUFXLENBQUNQLFlBQVksQ0FBQyxDQUFDO2lCQUFBOzBCQUFHLEdBQUc7Ozs7O3FCQUFPOzBCQUVuRyw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFFUCx5RUFBYTswQkFDM0IsNEVBQUNNLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVAsMkVBQWU7OEJBQzdCLDRFQUFDYyxLQUFHO3dCQUVGQyxHQUFHLEVBQUVkLGdCQUFnQixDQUFDRyxZQUFZLENBQUM7d0JBQ25DWSxHQUFHLEVBQUMsVUFBVTt1QkFGVFosWUFBWTs7Ozs2QkFHakI7Ozs7O3lCQUNFOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBbkJLRixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFxQmQsU0FBU1MsV0FBVyxDQUFDTSxLQUFLLEVBQUU7SUFDMUIsSUFBSUEsS0FBSyxHQUFHaEIsZ0JBQWdCLENBQUNpQixNQUFNLEVBQ25DO1FBQ0UsT0FBT0QsS0FBSyxHQUFFLENBQUMsQ0FBQztLQUNqQixNQUVEO1FBQ0UsT0FBTyxDQUFDLENBQUM7S0FDVjtDQUNGO0FBRUQsK0RBQWVmLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZWRpYS9DYXJvdXNlbC9DYXJvdXNlbC50c3g/YTRlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdCBmcm9tICcuL0Nhcm91c2VsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IGltZ1NvdXJjZXNTdGF0aWMgPSBbXHJcbiAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL21heWRheS1zb3VuZHN5c3RlbS9pbWFnZS91cGxvYWQvY19jcm9wLGhfMzk4LHdfMTA4MC92MTY0OTQ5MDgyMy9UUDFfOTUzNl9vb2J6Zm0uanBnJyxcclxuICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWF5ZGF5LXNvdW5kc3lzdGVtL2ltYWdlL3VwbG9hZC9jX2Nyb3AsaF80MDAsd18xMDgwLHlfMjY1L3YxNjQ5NDkwODMwL1RQMV85NTc5X3BtcHF6bi5qcGcnLFxyXG4gICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9tYXlkYXktc291bmRzeXN0ZW0vaW1hZ2UvdXBsb2FkL2NfZmlsbCxoXzQwMCx3XzEwODAvdjE2NDk0OTIxNjIvSU1HXzA4NTBfZWZjeGQzLmpwZycsXHJcbiAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL21heWRheS1zb3VuZHN5c3RlbS9pbWFnZS91cGxvYWQvY19maWxsLGhfNDAwLHdfMTA4MCx4XzI4NjAseV8xODY3L3YxNjQ5NDkxODU5L0lNR18wODM0X2k3NDdsbC5qcGcnLFxyXG5dXHJcblxyXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuYnRuUmlnaHR9IG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRJbmRleChjaWNsZUltYWdlcyhjdXJyZW50SW5kZXgpKX0+eyc+J308L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LmJ0blJpZ2h0fSBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoY2ljbGVJbWFnZXMoY3VycmVudEluZGV4KSl9PnsnPid9PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3QubWVkaWFHcm91cH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0Lm1lZGlhRWxlbWVudH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGtleT17Y3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICBzcmM9e2ltZ1NvdXJjZXNTdGF0aWNbY3VycmVudEluZGV4XX1cclxuICAgICAgICAgICAgYWx0PVwiQ2Fyb3VzZWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNpY2xlSW1hZ2VzKGluZGV4KSB7XHJcbiAgaWYgKGluZGV4IDwgaW1nU291cmNlc1N0YXRpYy5sZW5ndGgpXHJcbiAge1xyXG4gICAgcmV0dXJuIGluZGV4ICsxO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdCIsImltZ1NvdXJjZXNTdGF0aWMiLCJDYXJvdXNlbCIsInVzZVN0YXRlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYnRuUmlnaHQiLCJvbkNsaWNrIiwiY2ljbGVJbWFnZXMiLCJtZWRpYUdyb3VwIiwibWVkaWFFbGVtZW50IiwiaW1nIiwic3JjIiwiYWx0IiwiaW5kZXgiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Media/Carousel/Carousel.tsx\n");

/***/ })

});