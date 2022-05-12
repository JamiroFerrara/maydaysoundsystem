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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ \"./components/Shop/ProductItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ \"./node_modules/fuse.js/dist/fuse.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProductList = function(param) {\n    var title = param.title, products = param.products;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), searchTerm = ref[0], setSearchTerm = ref[1];\n    var fItems = filterJSONFuse(products.edges, searchTerm);\n    console.log(fItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl group-hover:text-red-900 group-hover:translate-x-1 transition duration-1000 w-3/5 font-extrabold tracking-tight text-gray-900\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"title w-2/5 border rounded p-1 border-slate-900 hover:shadow-md transition\",\n                            placeholder: \"Search\",\n                            onChange: function(event) {\n                                setSearchTerm(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.edges.filter(function(val) {\n                        return filterJSON(val, searchTerm);\n                    }).map(function(item) {\n                        var product = item.node;\n                        var image = product.images.edges[0].node;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            product: product,\n                            image: image\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductList, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = ProductList;\nfunction filterJSON(value, searchTerm) {\n    var sVal = JSON.stringify(value);\n    if (searchTerm == \"\") {\n        return value;\n    } else if (sVal.includes(searchTerm)) {\n        return value;\n    }\n}\nfunction filterJSONFuse(items, searchTerm) {\n    var options = {\n        keys: [\n            \"node.title\"\n        ]\n    };\n    var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](items, options);\n    return fuse.search(searchTerm);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDUDtBQUVOOztBQUUxQixJQUFNRyxXQUFXLEdBQUcsZ0JBQXVCO1FBQXJCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFROzs7SUFDbkMsSUFBb0NKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFObEQsVUFNbUIsR0FBbUJBLEdBQVksR0FBL0IsRUFObkIsYUFNa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNoQyxJQUFNTyxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLEVBQUVKLFVBQVUsQ0FBQztJQUN6REssT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztJQUVuQixxQkFDRTtrQkFDSSw0RUFBQ0ssS0FBRztZQUFDQyxTQUFTLEVBQUMsaUVBQWlFOzs4QkFDOUUsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxZQUFZOztzQ0FDekIsOERBQUNDLElBQUU7NEJBQUNELFNBQVMsRUFBQyx3SUFBd0k7c0NBQ25KVixLQUFLOzs7OztpQ0FDSDtzQ0FDTCw4REFBQ1ksT0FBSzs0QkFBQ0YsU0FBUyxFQUFDLDRFQUE0RTs0QkFBQ0csV0FBVyxFQUFDLFFBQVE7NEJBQUNDLFFBQVEsRUFBRUMsU0FBQUEsS0FBSyxFQUFJO2dDQUFDWixhQUFhLENBQUNZLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7NkJBQUM7Ozs7O2lDQUFHOzs7Ozs7eUJBQ3hLOzhCQUVOLDhEQUFDUixLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUZBQWlGOzhCQUM3RlQsUUFBUSxDQUFDSyxLQUFLLENBQUNZLE1BQU0sQ0FBQyxTQUFDQyxHQUFHLEVBQUk7d0JBQUUsT0FBT0MsVUFBVSxDQUFDRCxHQUFHLEVBQUVqQixVQUFVLENBQUM7cUJBQ2xFLENBQUMsQ0FBQ21CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7d0JBRWYsSUFBTUMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLElBQUk7d0JBQ3pCLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxNQUFNLENBQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNrQixJQUFJO3dCQUUxQyxxQkFDRSw4REFBQzVCLG9EQUFXOzRCQUFDMkIsT0FBTyxFQUFFQSxPQUFPOzRCQUFFRSxLQUFLLEVBQUVBLEtBQUs7Ozs7O2tDQUFnQixDQUM5RDtxQkFBQyxDQUFDOzs7Ozt5QkFDQzs7Ozs7O2lCQUNGO3FCQUNQLENBQ0o7Q0FDRjtHQTdCSzFCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQStCakIsU0FBU3FCLFVBQVUsQ0FBQ0gsS0FBSyxFQUFFZixVQUFVLEVBQ3JDO0lBQ0UsSUFBTXlCLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNaLEtBQUssQ0FBQztJQUNsQyxJQUFJZixVQUFVLElBQUksRUFBRSxFQUFFO1FBQ3BCLE9BQU9lLEtBQUs7S0FDYixNQUFNLElBQUlVLElBQUksQ0FBQ0csUUFBUSxDQUFDNUIsVUFBVSxDQUFDLEVBQUM7UUFDbkMsT0FBT2UsS0FBSztLQUNQO0NBQ1I7QUFFRCxTQUFTWixjQUFjLENBQUMwQixLQUFLLEVBQUU3QixVQUFVLEVBQ3pDO0lBQ0UsSUFBTThCLE9BQU8sR0FBRztRQUNkQyxJQUFJLEVBQUU7WUFBQyxZQUFZO1NBQUM7S0FDckI7SUFDRCxJQUFNQyxJQUFJLEdBQUcsSUFBSXBDLCtDQUFJLENBQUNpQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQztJQUNyQyxPQUFPRSxJQUFJLENBQUNDLE1BQU0sQ0FBQ2pDLFVBQVUsQ0FBQztDQUMvQjtBQUVELCtEQUFlSCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0TGlzdC50c3g/OTQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi9Qcm9kdWN0SXRlbSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yZWZyb250IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJ1xuXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7dGl0bGUsIHByb2R1Y3RzfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBmSXRlbXMgPSBmaWx0ZXJKU09ORnVzZShwcm9kdWN0cy5lZGdlcywgc2VhcmNoVGVybSlcbiAgY29uc29sZS5sb2coZkl0ZW1zKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0xMCBtYi04IGJnLWdyYXktMTAwIHJvdW5kZWQgc206cHgtNiBsZzptYXgtdy03eGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBncm91cC1ob3Zlcjp0ZXh0LXJlZC05MDAgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMDAgdy0zLzUgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpdGxlIHctMi81IGJvcmRlciByb3VuZGVkIHAtMSBib3JkZXItc2xhdGUtOTAwIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uXCIgcGxhY2Vob2xkZXI9J1NlYXJjaCcgb25DaGFuZ2U9e2V2ZW50ID0+IHtzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbXQtNiBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5lZGdlcy5maWx0ZXIoKHZhbCk9PiB7IHJldHVybiBmaWx0ZXJKU09OKHZhbCwgc2VhcmNoVGVybSlcbiAgICAgICAgICAgIH0pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGl0ZW0ubm9kZVxuICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHByb2R1Y3QuaW1hZ2VzLmVkZ2VzWzBdLm5vZGVcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBwcm9kdWN0PXtwcm9kdWN0fSBpbWFnZT17aW1hZ2V9PjwvUHJvZHVjdEl0ZW0+XG4gICAgICAgICAgICApfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIGZpbHRlckpTT04odmFsdWUsIHNlYXJjaFRlcm0pXG57XG4gIGNvbnN0IHNWYWwgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfSBlbHNlIGlmIChzVmFsLmluY2x1ZGVzKHNlYXJjaFRlcm0pKXtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJKU09ORnVzZShpdGVtcywgc2VhcmNoVGVybSlcbntcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBrZXlzOiBbJ25vZGUudGl0bGUnXVxuICB9XG4gIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShpdGVtcywgb3B0aW9ucylcbiAgcmV0dXJuIGZ1c2Uuc2VhcmNoKHNlYXJjaFRlcm0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XG4iXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJ1c2VTdGF0ZSIsIkZ1c2UiLCJQcm9kdWN0TGlzdCIsInRpdGxlIiwicHJvZHVjdHMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImZJdGVtcyIsImZpbHRlckpTT05GdXNlIiwiZWRnZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwidmFsIiwiZmlsdGVySlNPTiIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0Iiwibm9kZSIsImltYWdlIiwiaW1hZ2VzIiwic1ZhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbmNsdWRlcyIsIml0ZW1zIiwib3B0aW9ucyIsImtleXMiLCJmdXNlIiwic2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shop/ProductList.tsx\n");

/***/ })

});