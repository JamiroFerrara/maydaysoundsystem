"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[handle]",{

/***/ "./components/Shop/ProductPage.tsx":
/*!*****************************************!*\
  !*** ./components/Shop/ProductPage.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ProductPage(param) {\n    var product = param.product;\n    var image = product.images.edges[0].node;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white px-4 sm:py-10 sm:px-6 lg:max-w-7xl w-full rounded mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-2 border-red-700 w-3/5 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image.transformedSrc,\n                            alt: image.altText,\n                            className: \"h-full w-full object-cover object-center rounded lg:h-full lg:w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-2 border-green-700 w-2/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-sm text-gray\",\n                            children: [\n                                \" \",\n                                product.updatedAt\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBeUI7QUFJekIsU0FBU0MsV0FBVyxDQUFFLEtBQVMsRUFBRTtRQUFYLE9BQVEsR0FBUixLQUFTLENBQVJDLE9BQU87SUFFOUIsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJO0lBRXhDLHFCQUNNLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpRUFBaUU7OzBCQUM5RSw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLHNEQUFzRDswQkFDL0ROLE9BQU8sQ0FBQ1EsS0FBSzs7Ozs7b0JBQ2I7MEJBRUgsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztrQ0FDakIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7a0NBQzlDLDRFQUFDRyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVULEtBQUssQ0FBQ1UsY0FBYzs0QkFBRUMsR0FBRyxFQUFFWCxLQUFLLENBQUNZLE9BQU87NEJBQ2xEUCxTQUFTLEVBQUMsc0VBQXNFOzs7OztnQ0FDOUU7Ozs7OzRCQUNBO2tDQUNOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsc0NBQXNDO2tDQUVqRCw0RUFBQ1EsSUFBRTs0QkFBQ1IsU0FBUyxFQUFDLG1CQUFtQjs7Z0NBQUMsR0FBQztnQ0FBQ04sT0FBTyxDQUFDZSxTQUFTOzs7Ozs7Z0NBQU07Ozs7OzRCQUN6RDs7Ozs7O29CQUNKOzs7Ozs7WUFDSixDQUNYO0NBQ0Y7QUF2QlFoQixLQUFBQSxXQUFXO0FBeUJwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdFBhZ2UudHN4PzI2ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHMgZnJvbSAnLi9Qcm9kdWN0UGFnZS5tb2R1bGUuc2NzcydcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RQYWdlICh7cHJvZHVjdH0pIHtcclxuXHJcbmNvbnN0IGltYWdlID0gcHJvZHVjdC5pbWFnZXMuZWRnZXNbMF0ubm9kZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNCBzbTpweS0xMCBzbTpweC02IGxnOm1heC13LTd4bCB3LWZ1bGwgcm91bmRlZCBtYi04XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItcmVkLTcwMCB3LTMvNSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UudHJhbnNmb3JtZWRTcmN9IGFsdD17aW1hZ2UuYWx0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQgbGc6aC1mdWxsIGxnOnctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci0yIGJvcmRlci1ncmVlbi03MDAgdy0yLzVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5XCI+IHtwcm9kdWN0LnVwZGF0ZWRBdH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9kdWN0UGFnZSIsInByb2R1Y3QiLCJpbWFnZSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGl0bGUiLCJpbWciLCJzcmMiLCJ0cmFuc2Zvcm1lZFNyYyIsImFsdCIsImFsdFRleHQiLCJoMSIsInVwZGF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shop/ProductPage.tsx\n");

/***/ })

});