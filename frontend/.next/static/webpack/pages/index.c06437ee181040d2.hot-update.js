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

/***/ "./components/StatisticWrapper.jsx":
/*!*****************************************!*\
  !*** ./components/StatisticWrapper.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction StatisticWrapper(param) {\n    let { datas, seconds } = param;\n    _s();\n    let ElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let totalChildren = ElementRef.current.childNodes.length;\n        console.log(\"totalChildren=>\", totalChildren);\n        console.log(\"activeIndex=>\", activeIndex);\n    //   const intervalId = setInterval(() => {\n    // console.log(first)\n    //     setActiveIndex((prevIndex) => (prevIndex + 1) % totalChildren); // Toggle active index\n    //   }, 1000);\n    //   console.log(intervalId)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ElementRef,\n        className: \"statistics__content--header \".concat(seconds && \"statistics__content--header-second\"),\n        children: datas.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"statistics__heading\",\n                children: data\n            }, index, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\react-laravel-project\\\\frontend\\\\components\\\\StatisticWrapper.jsx\",\n                lineNumber: 22,\n                columnNumber: 21\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\react-laravel-project\\\\frontend\\\\components\\\\StatisticWrapper.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(StatisticWrapper, \"LjojiOmhMgJ6an+ZRgEOtPKjIzc=\");\n_c = StatisticWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatisticWrapper);\nvar _c;\n$RefreshReg$(_c, \"StatisticWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRpc3RpY1dyYXBwZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEQ7QUFFMUQsU0FBU0ksaUJBQWlCLEtBQWtCO1FBQWxCLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQWxCOztJQUN0QixJQUFJQyxhQUFhTCw2Q0FBTUE7SUFDdkIsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DRixnREFBU0EsQ0FBQztRQUNOLElBQUlTLGdCQUFnQkgsV0FBV0ksT0FBTyxDQUFDQyxVQUFVLENBQUNDLE1BQU07UUFDeERDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJMO1FBQy9CSSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCUDtJQUM3QiwyQ0FBMkM7SUFDM0MscUJBQXFCO0lBQ3JCLDZGQUE2RjtJQUM3RixjQUFjO0lBQ2QsNEJBQTRCO0lBQ2hDO0lBQ0EscUJBQ0ksOERBQUNRO1FBQUlDLEtBQUtWO1FBQ05XLFdBQVcsK0JBQStFLE9BQWhEWixXQUFXO2tCQUdqREQsTUFBTWMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNiLDhEQUFDTDtnQkFBZ0JFLFdBQVU7MEJBQXVCRTtlQUF4Q0M7Ozs7Ozs7Ozs7QUFPOUI7R0ExQlNqQjtLQUFBQTtBQTRCVCwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RhdGlzdGljV3JhcHBlci5qc3g/NmI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdGF0aXN0aWNXcmFwcGVyKHsgZGF0YXMsIHNlY29uZHMgfSkge1xyXG4gICAgbGV0IEVsZW1lbnRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoNSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b3RhbENoaWxkcmVuID0gRWxlbWVudFJlZi5jdXJyZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3RhbENoaWxkcmVuPT4nLCB0b3RhbENoaWxkcmVuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmVJbmRleD0+JywgYWN0aXZlSW5kZXgpXHJcbiAgICAgICAgLy8gICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpcnN0KVxyXG4gICAgICAgIC8vICAgICBzZXRBY3RpdmVJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSB0b3RhbENoaWxkcmVuKTsgLy8gVG9nZ2xlIGFjdGl2ZSBpbmRleFxyXG4gICAgICAgIC8vICAgfSwgMTAwMCk7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhpbnRlcnZhbElkKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtFbGVtZW50UmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzdGF0aXN0aWNzX19jb250ZW50LS1oZWFkZXIgJHtzZWNvbmRzICYmIFwic3RhdGlzdGljc19fY29udGVudC0taGVhZGVyLXNlY29uZFwifWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhcy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzdGF0aXN0aWNzX19oZWFkaW5nXCI+e2RhdGF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljV3JhcHBlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiU3RhdGlzdGljV3JhcHBlciIsImRhdGFzIiwic2Vjb25kcyIsIkVsZW1lbnRSZWYiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwidG90YWxDaGlsZHJlbiIsImN1cnJlbnQiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsIm1hcCIsImRhdGEiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StatisticWrapper.jsx\n"));

/***/ })

});