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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/Media/Carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar imgSourcesStatic = [\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_398,w_1080/v1649490823/TP1_9536_oobzfm.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_400,w_1080,y_265/v1649490830/TP1_9579_pmpqzn.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080/v1649492162/IMG_0850_efcxd3.jpg\",\n    \"https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080,x_2860,y_1867/v1649491859/IMG_0834_i747ll.jpg\", \n];\nvar Carousel = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), currentIndex = ref[0], setCurrentIndex = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnRight),\n                onClick: function() {\n                    return setCurrentIndex(addIndex(currentIndex));\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnRight),\n                onClick: function() {\n                    return setCurrentIndex(currentIndex + 1);\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mediaGroup),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mediaElement),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imgSourcesStatic[currentIndex],\n                        alt: \"Carousel\"\n                    }, currentIndex, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\GitHub\\\\Personal\\\\websites\\\\maydaysoundsystem\\\\components\\\\Media\\\\Carousel\\\\Carousel.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(Carousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = Carousel;\nfunction cicleImages(index) {\n    if (index != imgSourcesStatic.length) {\n        return index + 1;\n    } else {\n        return 0;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGlhL0Nhcm91c2VsL0Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjOztBQUd2QyxJQUFNRSxnQkFBZ0IsR0FBRztJQUN2QixnSEFBZ0g7SUFDaEgsc0hBQXNIO0lBQ3RILGdIQUFnSDtJQUNoSCw4SEFBOEg7Q0FDL0g7QUFFRCxJQUFNQyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBd0NILEdBQWlCLGtCQUFqQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsTUFBbERLLFlBQVksR0FBcUJMLEdBQWlCLEdBQXRDLEVBQUVNLGVBQWUsR0FBSU4sR0FBaUIsR0FBckI7SUFFcEMscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUCx3RUFBWTs7MEJBQzFCLDhEQUFDTSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVQLHVFQUFXO2dCQUFFVSxPQUFPLEVBQUU7MkJBQU1MLGVBQWUsQ0FBQ00sUUFBUSxDQUFDUCxZQUFZLENBQUMsQ0FBQztpQkFBQTswQkFBRyxHQUFHOzs7OztxQkFBTzswQkFDaEcsOERBQUNFLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsdUVBQVc7Z0JBQUVVLE9BQU8sRUFBRTsyQkFBTUwsZUFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUFBOzBCQUFHLEdBQUc7Ozs7O3FCQUFPOzBCQUUxRiw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFFUCx5RUFBYTswQkFDM0IsNEVBQUNNLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVAsMkVBQWU7OEJBQzdCLDRFQUFDYyxLQUFHO3dCQUVGQyxHQUFHLEVBQUVkLGdCQUFnQixDQUFDRyxZQUFZLENBQUM7d0JBQ25DWSxHQUFHLEVBQUMsVUFBVTt1QkFGVFosWUFBWTs7Ozs2QkFHakI7Ozs7O3lCQUNFOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBbkJLRixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFxQmQsU0FBU2UsV0FBVyxDQUFDQyxLQUFLLEVBQUU7SUFDMUIsSUFBSUEsS0FBSyxJQUFJakIsZ0JBQWdCLENBQUNrQixNQUFNLEVBQ3BDO1FBQ0UsT0FBT0QsS0FBSyxHQUFFLENBQUMsQ0FBQztLQUNqQixNQUVEO1FBQ0UsT0FBTyxDQUFDLENBQUM7S0FDVjtDQUNGO0FBRUQsK0RBQWVoQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVkaWEvQ2Fyb3VzZWwvQ2Fyb3VzZWwudHN4P2E0ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3QgZnJvbSAnLi9DYXJvdXNlbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBpbWdTb3VyY2VzU3RhdGljID0gW1xyXG4gICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9tYXlkYXktc291bmRzeXN0ZW0vaW1hZ2UvdXBsb2FkL2NfY3JvcCxoXzM5OCx3XzEwODAvdjE2NDk0OTA4MjMvVFAxXzk1MzZfb29iemZtLmpwZycsXHJcbiAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL21heWRheS1zb3VuZHN5c3RlbS9pbWFnZS91cGxvYWQvY19jcm9wLGhfNDAwLHdfMTA4MCx5XzI2NS92MTY0OTQ5MDgzMC9UUDFfOTU3OV9wbXBxem4uanBnJyxcclxuICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWF5ZGF5LXNvdW5kc3lzdGVtL2ltYWdlL3VwbG9hZC9jX2ZpbGwsaF80MDAsd18xMDgwL3YxNjQ5NDkyMTYyL0lNR18wODUwX2VmY3hkMy5qcGcnLFxyXG4gICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9tYXlkYXktc291bmRzeXN0ZW0vaW1hZ2UvdXBsb2FkL2NfZmlsbCxoXzQwMCx3XzEwODAseF8yODYwLHlfMTg2Ny92MTY0OTQ5MTg1OS9JTUdfMDgzNF9pNzQ3bGwuanBnJyxcclxuXVxyXG5cclxuY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3QuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LmJ0blJpZ2h0fSBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoYWRkSW5kZXgoY3VycmVudEluZGV4KSl9PnsnPid9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5idG5SaWdodH0gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCArIDEpfT57Jz4nfTwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0Lm1lZGlhR3JvdXB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5tZWRpYUVsZW1lbnR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBrZXk9e2N1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgc3JjPXtpbWdTb3VyY2VzU3RhdGljW2N1cnJlbnRJbmRleF19XHJcbiAgICAgICAgICAgIGFsdD1cIkNhcm91c2VsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaWNsZUltYWdlcyhpbmRleCkge1xyXG4gIGlmIChpbmRleCAhPSBpbWdTb3VyY2VzU3RhdGljLmxlbmd0aClcclxuICB7XHJcbiAgICByZXR1cm4gaW5kZXggKzE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0IiwiaW1nU291cmNlc1N0YXRpYyIsIkNhcm91c2VsIiwidXNlU3RhdGUiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJidG5SaWdodCIsIm9uQ2xpY2siLCJhZGRJbmRleCIsIm1lZGlhR3JvdXAiLCJtZWRpYUVsZW1lbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJjaWNsZUltYWdlcyIsImluZGV4IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Media/Carousel/Carousel.tsx\n");

/***/ })

});