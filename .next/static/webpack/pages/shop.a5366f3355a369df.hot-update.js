"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./components/Shop/ProductList.tsx":
/*!*****************************************!*\
  !*** ./components/Shop/ProductList.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ \"./components/Shop/ProductItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductList = function(param) {\n    var title = param.title, products = param.products;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), searchTerm = ref[0], setSearchTerm = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl w-3/5 font-extrabold tracking-tight text-gray-900\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"title w-2/5 border rounded p-1 border-slate-900\",\n                            placeholder: \"Search\",\n                            onChange: function(event) {\n                                setSearchTerm(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.edges.filter(function(val) {\n                        console.log(val);\n                        return val;\n                    }).map(function(item) {\n                        var product = item.node;\n                        var image = product.images.edges[0].node;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            product: product,\n                            image: image\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductList, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF1QztBQUNQOztBQUdoQyxJQUFNRSxXQUFXLEdBQUcsZ0JBQXVCO1FBQXJCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFROzs7SUFDbkMsSUFBb0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMbEQsVUFLbUIsR0FBbUJBLEdBQVksR0FBL0IsRUFMbkIsYUFLa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUVoQyxxQkFDRTtrQkFDSSw0RUFBQ00sS0FBRztZQUFDQyxTQUFTLEVBQUMsaUVBQWlFOzs4QkFDOUUsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOztzQ0FDbkIsOERBQUNDLElBQUU7NEJBQUNELFNBQVMsRUFBQyw0REFBNEQ7c0NBQ3ZFTCxLQUFLOzs7OztpQ0FDSDtzQ0FDTCw4REFBQ08sT0FBSzs0QkFBQ0YsU0FBUyxFQUFDLGlEQUFpRDs0QkFBQ0csV0FBVyxFQUFDLFFBQVE7NEJBQUNDLFFBQVEsRUFBRUMsU0FBQUEsS0FBSyxFQUFJO2dDQUFDUCxhQUFhLENBQUNPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7NkJBQUM7Ozs7O2lDQUFHOzs7Ozs7eUJBQzdJOzhCQUVOLDhEQUFDUixLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUZBQWlGOzhCQUM3RkosUUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxHQUFHLEVBQUk7d0JBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO3dCQUNoQixPQUFPQSxHQUFHO3FCQUNYLENBQUMsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSzt3QkFFZixJQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsSUFBSTt3QkFDekIsSUFBTUMsS0FBSyxHQUFHRixPQUFPLENBQUNHLE1BQU0sQ0FBQ1YsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxJQUFJO3dCQUUxQyxxQkFDRSw4REFBQ3hCLG9EQUFXOzRCQUFDdUIsT0FBTyxFQUFFQSxPQUFPOzRCQUFFRSxLQUFLLEVBQUVBLEtBQUs7Ozs7O2tDQUFnQixDQUM5RDtxQkFBQyxDQUFDOzs7Ozt5QkFDQzs7Ozs7O2lCQUNGO3FCQUNQLENBQ0o7Q0FDRjtHQTdCS3ZCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQStCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0LnRzeD85NDRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuL1Byb2R1Y3RJdGVtJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0b3JlZnJvbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgUHJvZHVjdExpc3QgPSAoe3RpdGxlLCBwcm9kdWN0c30pID0+IHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMTAgbWItOCBiZy1ncmF5LTEwMCByb3VuZGVkIHNtOnB4LTYgbGc6bWF4LXctN3hsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdy0zLzUgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpdGxlIHctMi81IGJvcmRlciByb3VuZGVkIHAtMSBib3JkZXItc2xhdGUtOTAwXCIgcGxhY2Vob2xkZXI9J1NlYXJjaCcgb25DaGFuZ2U9e2V2ZW50ID0+IHtzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbXQtNiBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5lZGdlcy5maWx0ZXIoKHZhbCk9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgfSkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gaXRlbS5ub2RlXG4gICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gcHJvZHVjdC5pbWFnZXMuZWRnZXNbMF0ubm9kZVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IGltYWdlPXtpbWFnZX0+PC9Qcm9kdWN0SXRlbT5cbiAgICAgICAgICAgICl9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcbiJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInVzZVN0YXRlIiwiUHJvZHVjdExpc3QiLCJ0aXRsZSIsInByb2R1Y3RzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlZGdlcyIsImZpbHRlciIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwicHJvZHVjdCIsIm5vZGUiLCJpbWFnZSIsImltYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shop/ProductList.tsx\n");

/***/ })

});