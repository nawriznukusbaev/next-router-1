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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst UserPage = ({ user , posts  })=>{\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"left\",\n                    width: \"1000px\",\n                    padding: \"25px\",\n                    border: \"solid 0.1px black\",\n                    backgroundColor: \"orange\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"25px\"\n                        },\n                        children: [\n                            \"Phone: \",\n                            user.phone\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"25px\"\n                        },\n                        children: [\n                            \"Address: \",\n                            user.address.city,\n                            \",\",\n                            user.address.street_address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: \"Posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"left\",\n                    width: \"1000px\",\n                    padding: \"25px\",\n                    border: \"solid 0.1px black\",\n                    backgroundColor: \"deepskyblue \"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: {\n                        listStyle: \"none\"\n                    },\n                    children: posts.map((post)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                height: \"30px\",\n                                color: \"white\",\n                                fontSize: \"25px\",\n                                border: \"solid 0.1px black\",\n                                padding: \"5px\"\n                            },\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                            lineNumber: 19,\n                            columnNumber: 34\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Repik js\\\\REACT\\\\next.js-1\\\\pages\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined);\n};\nasync function getServerSideProps({ query  }) {\n    console.log(query);\n    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${query.user_id}`);\n    const dataUser = await resUser.json();\n    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/`);\n    const dataPosts = await resPosts.json();\n    return {\n        props: {\n            user: dataUser,\n            posts: dataPosts.filter((data)=>data.userId === +query.user_id)\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUNJO0FBRzFDLE1BQU1FLFdBQVcsQ0FBQyxFQUFDQyxLQUFJLEVBQUNDLE1BQUssRUFBQyxHQUFJO0lBQzlCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU87WUFBQ0MsU0FBUTtZQUFRQyxnQkFBZTtZQUFVQyxZQUFXO1lBQVNDLFFBQU87WUFBU0MsZUFBYztRQUFROzswQkFDNUcsOERBQUNDO2dCQUFFTixPQUFPO29CQUFDTyxVQUFTO2dCQUFNOzBCQUFJWixLQUFLYSxJQUFJOzs7Ozs7MEJBQ3ZDLDhEQUFDVDtnQkFBSUMsT0FBTztvQkFBQ0MsU0FBUTtvQkFBT0ksZUFBYztvQkFBU0gsZ0JBQWU7b0JBQVFPLE9BQU07b0JBQVNDLFNBQVE7b0JBQVFDLFFBQU87b0JBQXFCQyxpQkFBZ0I7Z0JBQVE7O2tDQUN2Siw4REFBQ047d0JBQUVOLE9BQU87NEJBQUNPLFVBQVM7d0JBQU07OzRCQUFHOzRCQUFRWixLQUFLa0IsS0FBSzs7Ozs7OztrQ0FDL0MsOERBQUNQO3dCQUFFTixPQUFPOzRCQUFDTyxVQUFTO3dCQUFNOzs0QkFBRzs0QkFBVVosS0FBS21CLE9BQU8sQ0FBQ0MsSUFBSTs0QkFBQzs0QkFBRXBCLEtBQUttQixPQUFPLENBQUNFLGNBQWM7Ozs7Ozs7Ozs7Ozs7MEJBRTVGLDhEQUFDVjtnQkFBRU4sT0FBTztvQkFBQ08sVUFBUztnQkFBTTswQkFBRzs7Ozs7OzBCQUM3Qiw4REFBQ1I7Z0JBQUlDLE9BQU87b0JBQUNDLFNBQVE7b0JBQU9JLGVBQWM7b0JBQVNILGdCQUFlO29CQUFRTyxPQUFNO29CQUFTQyxTQUFRO29CQUFRQyxRQUFPO29CQUFxQkMsaUJBQWdCO2dCQUFjOzBCQUMvSiw0RUFBQ0s7b0JBQUdqQixPQUFPO3dCQUFDa0IsV0FBVTtvQkFBTTs4QkFFcEJ0QixNQUFNdUIsR0FBRyxDQUFDLENBQUNDLE9BQU87d0JBQ2QscUJBQU8sOERBQUNDOzRCQUFHckIsT0FBTztnQ0FBQ0ksUUFBTztnQ0FBUWtCLE9BQU07Z0NBQVFmLFVBQVM7Z0NBQU9JLFFBQU87Z0NBQXFCRCxTQUFROzRCQUFLO3NDQUFJVSxLQUFLRyxLQUFLOzs7Ozs7b0JBQzNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQVN0QjtBQUNPLGVBQWVDLG1CQUFtQixFQUFDQyxNQUFLLEVBQUMsRUFBRTtJQUM5QzVCLFFBQVFDLEdBQUcsQ0FBQzJCO0lBQ1osTUFBTUMsVUFBVSxNQUFNQyxNQUFNLENBQUMsMkNBQTJDLEVBQUVGLE1BQU1HLE9BQU8sQ0FBQyxDQUFDO0lBQ3pGLE1BQU1DLFdBQVcsTUFBTUgsUUFBUUksSUFBSTtJQUNuQyxNQUFNQyxXQUFXLE1BQU1KLE1BQU0sQ0FBQywyQ0FBMkMsQ0FBQztJQUMxRSxNQUFNSyxZQUFZLE1BQU1ELFNBQVNELElBQUk7SUFFckMsT0FBTztRQUFFRyxPQUNEO1lBQUV0QyxNQUFLa0M7WUFDTGpDLE9BQU1vQyxVQUFVRSxNQUFNLENBQUMsQ0FBQ0MsT0FBT0EsS0FBS0MsTUFBTSxLQUFHLENBQUNYLE1BQU1HLE9BQU87UUFDN0Q7SUFDUjtBQUNKLENBQUM7QUFDRCxpRUFBZWxDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LmpzIC0xLy4vcGFnZXMvW2lkXS5qcz9hMzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5cclxuY29uc3QgVXNlclBhZ2UgPSAoe3VzZXIscG9zdHN9KSA9PntcclxuICAgIGNvbnNvbGUubG9nKHBvc3RzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLGhlaWdodDpcIjEwMHZoXCIsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCJ9fT57dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsanVzdGlmeUNvbnRlbnQ6XCJsZWZ0XCIsIHdpZHRoOlwiMTAwMHB4XCIscGFkZGluZzonMjVweCcsIGJvcmRlcjonc29saWQgMC4xcHggYmxhY2snLCBiYWNrZ3JvdW5kQ29sb3I6XCJvcmFuZ2VcIn19PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjVweCd9fT5QaG9uZToge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMjVweCd9fT5BZGRyZXNzOiB7dXNlci5hZGRyZXNzLmNpdHl9LHt1c2VyLmFkZHJlc3Muc3RyZWV0X2FkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwifX0+UG9zdHM8L3A+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGp1c3RpZnlDb250ZW50OlwibGVmdFwiLCB3aWR0aDpcIjEwMDBweFwiLHBhZGRpbmc6JzI1cHgnLCBib3JkZXI6J3NvbGlkIDAuMXB4IGJsYWNrJywgYmFja2dyb3VuZENvbG9yOidkZWVwc2t5Ymx1ZSAnfX0+XHJcbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlOidub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBzdHlsZT17e2hlaWdodDonMzBweCcsIGNvbG9yOlwid2hpdGVcIixmb250U2l6ZTpcIjI1cHhcIixib3JkZXI6XCJzb2xpZCAwLjFweCBibGFja1wiLCBwYWRkaW5nOic1cHgnfX0+e3Bvc3QudGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5fSkge1xyXG4gICAgY29uc29sZS5sb2cocXVlcnkpO1xyXG4gICAgY29uc3QgcmVzVXNlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtxdWVyeS51c2VyX2lkfWApXHJcbiAgICBjb25zdCBkYXRhVXNlciA9IGF3YWl0IHJlc1VzZXIuanNvbigpO1xyXG4gICAgY29uc3QgcmVzUG9zdHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL2ApXHJcbiAgICBjb25zdCBkYXRhUG9zdHMgPSBhd2FpdCByZXNQb3N0cy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6XHJcbiAgICAgICAgICAgIHsgdXNlcjpkYXRhVXNlcixcclxuICAgICAgICAgICAgICBwb3N0czpkYXRhUG9zdHMuZmlsdGVyKChkYXRhKT0+ZGF0YS51c2VySWQ9PT0rcXVlcnkudXNlcl9pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJHZXRTZXJ2ZXJTaWRlUHJvcHMiLCJVc2VyUGFnZSIsInVzZXIiLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwicCIsImZvbnRTaXplIiwibmFtZSIsIndpZHRoIiwicGFkZGluZyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInBob25lIiwiYWRkcmVzcyIsImNpdHkiLCJzdHJlZXRfYWRkcmVzcyIsInVsIiwibGlzdFN0eWxlIiwibWFwIiwicG9zdCIsImxpIiwiY29sb3IiLCJ0aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwicmVzVXNlciIsImZldGNoIiwidXNlcl9pZCIsImRhdGFVc2VyIiwianNvbiIsInJlc1Bvc3RzIiwiZGF0YVBvc3RzIiwicHJvcHMiLCJmaWx0ZXIiLCJkYXRhIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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