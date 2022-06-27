"use strict";
(self["webpackChunkcountdown"] = self["webpackChunkcountdown"] || []).push([[278],{

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clusterio_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var _clusterio_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clusterio_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clusterio_web_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(405);
/* harmony import */ var _clusterio_web_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clusterio_web_ui__WEBPACK_IMPORTED_MODULE_2__);




function CountdownPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_clusterio_web_ui__WEBPACK_IMPORTED_MODULE_2__.PageLayout, {
    nav: [{
      name: "Countdown"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Countdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Test"));
}

class WebPlugin extends _clusterio_lib__WEBPACK_IMPORTED_MODULE_1__.libPlugin.BaseWebPlugin {
  async init() {
    this.pages = [{
      sidebarName: "Countdown",
      path: "/countdown",
      permission: "countdown.countdown.view",
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CountdownPage, null)
    }];
  }

}

/***/ })

}]);
//# sourceMappingURL=278.bundle.js.map