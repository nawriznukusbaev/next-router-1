"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserPage = ()=>{};\nasync function getServerSideProps() {\n    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0M7QUFJdEMsTUFBTUMsV0FBVyxJQUFLLENBSXRCO0FBQ08sZUFBZUMscUJBQXFCO0lBQ3ZDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDO0lBQ3BFLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPO1FBQUVDLE9BQU87WUFBRUY7UUFBSztJQUFFO0FBQzdCLENBQUM7QUFDRCxpRUFBZUosUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQuanMgLTEvLi9wYWdlcy9baWRdLmpzP2EzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBVc2VyUGFnZSA9ICgpID0+e1xyXG5cclxuXHJcblxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJVc2VyUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id].js"));
module.exports = __webpack_exports__;

})();