"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst UserPage = (param)=>{\n    let { data  } = param;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: data.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"25px\"\n                        },\n                        children: [\n                            \"Phone:\",\n                            data.phone\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"25px\"\n                        },\n                        children: [\n                            \"Address:\",\n                            data.address.city,\n                            \",\",\n                            data.address.street_address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined);\n};\n_c = UserPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0k7QUFHMUMsTUFBTUUsV0FBVyxTQUFXO1FBQVYsRUFBQ0MsS0FBSSxFQUFDO0lBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU87WUFBQ0MsU0FBUTtZQUFRQyxnQkFBZTtZQUFVQyxZQUFXO1lBQVNDLFFBQU87WUFBU0MsZUFBYztRQUFROzswQkFDNUcsOERBQUNDO2dCQUFFTixPQUFPO29CQUFDTyxVQUFTO2dCQUFNOzBCQUFJWCxLQUFLWSxJQUFJOzs7Ozs7MEJBQ3ZDLDhEQUFDVDtnQkFBSUMsT0FBTztvQkFBQ0MsU0FBUTtvQkFBT0ksZUFBYztnQkFBUTs7a0NBQzVDLDhEQUFDQzt3QkFBRU4sT0FBTzs0QkFBQ08sVUFBUzt3QkFBTTs7NEJBQUc7NEJBQU9YLEtBQUthLEtBQUs7Ozs7Ozs7a0NBQzlDLDhEQUFDSDt3QkFBRU4sT0FBTzs0QkFBQ08sVUFBUzt3QkFBTTs7NEJBQUc7NEJBQVNYLEtBQUtjLE9BQU8sQ0FBQ0MsSUFBSTs0QkFBQzs0QkFBRWYsS0FBS2MsT0FBTyxDQUFDRSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JHO0tBZE1qQjs7QUFzQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS5qcz9hMzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5cclxuY29uc3QgVXNlclBhZ2UgPSAoe2RhdGF9KSA9PntcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsaGVpZ2h0OlwiMTAwdmhcIiwgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIn19PntkYXRhLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjVweCd9fT5QaG9uZTp7ZGF0YS5waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicyNXB4J319PkFkZHJlc3M6e2RhdGEuYWRkcmVzcy5jaXR5fSx7ZGF0YS5hZGRyZXNzLnN0cmVldF9hZGRyZXNzfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeX0pIHtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtxdWVyeS51c2VyX2lkfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJHZXRTZXJ2ZXJTaWRlUHJvcHMiLCJVc2VyUGFnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInAiLCJmb250U2l6ZSIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiLCJjaXR5Iiwic3RyZWV0X2FkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].js\n"));

/***/ })

});