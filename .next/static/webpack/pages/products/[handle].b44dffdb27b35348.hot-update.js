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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Jamiro_Ferrara_Desktop_maydaysoundsystem_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Jamiro_Ferrara_Desktop_maydaysoundsystem_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jamiro_Ferrara_Desktop_maydaysoundsystem_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nfunction ProductPage(param) {\n    var product = param.product, checkoutMutation = param.checkoutMutation, variantId = param.variantId;\n    var image = product.images.edges[0].node;\n    function checkout() {\n        return _checkout.apply(this, arguments);\n    }\n    function _checkout() {\n        _checkout = _asyncToGenerator(C_Users_Jamiro_Ferrara_Desktop_maydaysoundsystem_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data, webUrl;\n            return C_Users_Jamiro_Ferrara_Desktop_maydaysoundsystem_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.storefront)(checkoutMutation, {\n                            variantId: variantId\n                        });\n                    case 2:\n                        data = _ctx.sent.data;\n                        console.log(checkoutMutation, variantId);\n                        webUrl = data.checkoutCreate.checkout.webUrl;\n                        window.location.href = webUrl;\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkout.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"h-screen align-middle md:items-center flex p-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"bg-white px-4 mt-2 lg:max-w-7xl w-full rounded mb-8 align-middle p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl mx-4 font-extrabold tracking-tight text-gray-900\",\n                    children: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"relative md:h-full w-full ...\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        className: \"text-xs text-gray\",\n                        children: [\n                            \"Updated: \",\n                            product.updatedAt\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductPage.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFJNEI7QUFFckQsU0FBU0UsV0FBVyxDQUFFLEtBQXNDLEVBQUU7UUFBdkNDLE9BQU8sR0FBUixLQUFzQyxDQUFyQ0EsT0FBTyxFQUFFQyxnQkFBZ0IsR0FBMUIsS0FBc0MsQ0FBNUJBLGdCQUFnQixFQUFFQyxTQUFTLEdBQXJDLEtBQXNDLENBQVZBLFNBQVM7SUFDM0QsSUFBTUMsS0FBSyxHQUFHSCxPQUFPLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJO2FBRTNCQyxRQUFRO2VBQVJBLFNBQVE7O2FBQVJBLFNBQVE7UUFBUkEsU0FBUSxHQUF2QixpTUFBeUI7Z0JBQ2RDLElBQUksRUFFSkMsTUFBTTs7Ozs7K0JBRlFYLGtEQUFVLENBQUNHLGdCQUFnQixFQUFFOzRCQUFDQyxTQUFTLEVBQVRBLFNBQVM7eUJBQUMsQ0FBQzs7d0JBQXhELElBQUssYUFBSk0sSUFBSSxDQUFtRDt3QkFDOURFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixnQkFBZ0IsRUFBRUMsU0FBUyxDQUFDO3dCQUNsQyxNQUFPLEdBQUlNLElBQUksQ0FBQ0ksY0FBYyxDQUFDTCxRQUFRLENBQXRDRSxNQUFNLENBQWlDO3dCQUM5Q0ksTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBR04sTUFBTSxDQUFDOzs7Ozs7U0FDakM7ZUFMY0YsU0FBUTs7SUFPckIscUJBQ00sOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdEQUFnRDtrQkFDM0QsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNFQUFzRTs7OEJBQ25GLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsMkRBQTJEOzhCQUNwRWpCLE9BQU8sQ0FBQ21CLEtBQUs7Ozs7O3dCQUNiOzhCQUdILDhEQUFDSCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsK0JBQStCOzhCQUMxQyw0RUFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjs7NEJBQUMsV0FBUzs0QkFBQ2pCLE9BQU8sQ0FBQ29CLFNBQVM7Ozs7Ozs0QkFBTTs7Ozs7d0JBQ2pFOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0osQ0FDWDtDQUNGO0FBeEJRckIsS0FBQUEsV0FBVztBQTBCcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RQYWdlLnRzeD8yNmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VaS9CdXR0b24nXHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuL1Byb2R1Y3RJdGVtJ1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9Qcm9kdWN0UGFnZS5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IGZvcm1hdFByaWNlLCBzdG9yZWZyb250IH0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0UGFnZSAoe3Byb2R1Y3QsIGNoZWNrb3V0TXV0YXRpb24sIHZhcmlhbnRJZH0pIHtcclxuY29uc3QgaW1hZ2UgPSBwcm9kdWN0LmltYWdlcy5lZGdlc1swXS5ub2RlXHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja291dCgpe1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgc3RvcmVmcm9udChjaGVja291dE11dGF0aW9uLCB7dmFyaWFudElkfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja291dE11dGF0aW9uLCB2YXJpYW50SWQpXHJcbiAgICBjb25zdCB7d2ViVXJsfSA9IGRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXQ7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdlYlVybDtcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYWxpZ24tbWlkZGxlIG1kOml0ZW1zLWNlbnRlciBmbGV4IHAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgbXQtMiBsZzptYXgtdy03eGwgdy1mdWxsIHJvdW5kZWQgbWItOCBhbGlnbi1taWRkbGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG14LTQgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1kOmgtZnVsbCB3LWZ1bGwgLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5XCI+VXBkYXRlZDoge3Byb2R1Y3QudXBkYXRlZEF0fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0b3JlZnJvbnQiLCJQcm9kdWN0UGFnZSIsInByb2R1Y3QiLCJjaGVja291dE11dGF0aW9uIiwidmFyaWFudElkIiwiaW1hZ2UiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJjaGVja291dCIsImRhdGEiLCJ3ZWJVcmwiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tvdXRDcmVhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shop/ProductPage.tsx\n");

/***/ })

});