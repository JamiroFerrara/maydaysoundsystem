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

/***/ "./pages/products/[handle].tsx":
/*!*************************************!*\
  !*** ./pages/products/[handle].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Ui_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Ui/Navbar */ \"./components/Ui/Navbar.tsx\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Shop_ProductPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Shop/ProductPage */ \"./components/Shop/ProductPage.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nmutation CheckoutCreate($variantId: ID!){\\n  checkoutCreate(input: {\\n    variantId: $variantId,\\n    quantity: 1\\n  })\\n  checkout {\\n    webUrl\\n  }\\n}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nfunction products(param) {\n    var product = param.product;\n    var variantId = product.variants.edges[0].node.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mayday - Shop\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Ui_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shop_ProductPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    product: product,\n                    checkoutMutation: checkoutsMutation,\n                    variantId: variantId\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\pages\\\\products\\\\[handle].tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\nvar gql = String.raw;\nvar checkoutsMutation = gql(_templateObject());\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baGFuZGxlXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ21CO0FBQ0k7QUFDUTtBQUUzRCxTQUFTSSxRQUFRLENBQUUsS0FBUyxFQUFFO1FBQVgsT0FBUSxHQUFSLEtBQVMsQ0FBUkMsT0FBTztJQUN6QixJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQ0UsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsRUFBRTtJQUVuRCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNYLGtEQUFJOztrQ0FDSCw4REFBQ1ksT0FBSztrQ0FBQyxlQUFhOzs7Ozs0QkFBUTtrQ0FDNUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsT0FBTzs7Ozs7NEJBQUc7a0NBQzNDLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUNQLDhEQUFDakIsNkRBQU07Ozs7b0JBQVU7MEJBRWYsOERBQUNrQixNQUFJO2dCQUFDQyxTQUFTLEVBQUVsQix1RUFBVzswQkFDMUIsNEVBQUNDLG9FQUFXO29CQUFDRSxPQUFPLEVBQUVBLE9BQU87b0JBQUVnQixnQkFBZ0IsRUFBRUMsaUJBQWlCO29CQUFFaEIsU0FBUyxFQUFFQSxTQUFTOzs7Ozt3QkFBRzs7Ozs7b0JBQ3RGOzs7Ozs7WUFDTCxDQUNQO0NBQ0Y7QUE4QkQsSUFBTWlCLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxHQUFHO0FBK0J0QixJQUFNSCxpQkFBaUIsR0FBR0MsR0FBRyxtQkFVNUI7O0FBRUQsK0RBQWVuQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL1toYW5kbGVdLnRzeD83ZDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdG9yZWZyb250IH0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VpL05hdmJhcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBQcm9kdWN0UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdFBhZ2UnXHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0cyAoe3Byb2R1Y3R9KSB7XHJcbiAgY29uc3QgdmFyaWFudElkID0gcHJvZHVjdC52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1heWRheSAtIFNob3A8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNdXNpY1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XHJcblxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPFByb2R1Y3RQYWdlIHByb2R1Y3Q9e3Byb2R1Y3R9IGNoZWNrb3V0TXV0YXRpb249e2NoZWNrb3V0c011dGF0aW9ufSB2YXJpYW50SWQ9e3ZhcmlhbnRJZH0vPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHN0b3JlZnJvbnQoZ3FsYFxyXG4gIHtcclxuICAgIHByb2R1Y3RzKGZpcnN0OiA2KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGhhbmRsZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBgKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogZGF0YS5wcm9kdWN0cy5lZGdlcy5tYXAocHJvZHVjdCA9PiAoe3BhcmFtczoge2hhbmRsZTogcHJvZHVjdC5ub2RlLmhhbmRsZX19KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBzdG9yZWZyb250KHNpbmdsZVByb2R1Y3RzUXVlcnksIHtoYW5kbGU6IHBhcmFtcy5oYW5kbGV9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0OiBkYXRhLnByb2R1Y3RCeUhhbmRsZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdxbCA9IFN0cmluZy5yYXc7XHJcbmNvbnN0IHNpbmdsZVByb2R1Y3RzUXVlcnkgPSBncWxgXHJcbnF1ZXJ5IFNpbmdsZVByb2R1Y3QgKCRoYW5kbGU6IFN0cmluZyEpe1xyXG4gIHByb2R1Y3RCeUhhbmRsZShoYW5kbGU6ICAkaGFuZGxlKXtcclxuICAgIHRpdGxlXHJcbiAgICBkZXNjcmlwdGlvblxyXG4gICAgdXBkYXRlZEF0XHJcbiAgICB0YWdzXHJcbiAgICBwcmljZVJhbmdlIHtcclxuICAgICAgbWluVmFyaWFudFByaWNlIHtcclxuICAgICAgICBhbW91bnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybWVkU3JjXHJcbiAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXJpYW50cyhmaXJzdDoxKSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmBcclxuY29uc3QgY2hlY2tvdXRzTXV0YXRpb24gPSBncWxgXHJcbm11dGF0aW9uIENoZWNrb3V0Q3JlYXRlKCR2YXJpYW50SWQ6IElEISl7XHJcbiAgY2hlY2tvdXRDcmVhdGUoaW5wdXQ6IHtcclxuICAgIHZhcmlhbnRJZDogJHZhcmlhbnRJZCxcclxuICAgIHF1YW50aXR5OiAxXHJcbiAgfSlcclxuICBjaGVja291dCB7XHJcbiAgICB3ZWJVcmxcclxuICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHMiXSwibmFtZXMiOlsiSGVhZCIsIk5hdmJhciIsInN0eWxlcyIsIlByb2R1Y3RQYWdlIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwidmFyaWFudElkIiwidmFyaWFudHMiLCJlZGdlcyIsIm5vZGUiLCJpZCIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiY2hlY2tvdXRNdXRhdGlvbiIsImNoZWNrb3V0c011dGF0aW9uIiwiZ3FsIiwiU3RyaW5nIiwicmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[handle].tsx\n");

/***/ })

});