"use strict";
(self["webpackChunkcountdown"] = self["webpackChunkcountdown"] || []).push([[278],{

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin)
/* harmony export */ });
/* harmony import */ var _clusterio_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _clusterio_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clusterio_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clusterio_web_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405);
/* harmony import */ var _clusterio_web_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clusterio_web_ui__WEBPACK_IMPORTED_MODULE_1__);



function CountdownPage() {
  return /*#__PURE__*/React.createElement(_clusterio_web_ui__WEBPACK_IMPORTED_MODULE_1__.PageLayout, {
    nav: [{
      name: "Countdown"
    }]
  }, /*#__PURE__*/React.createElement("h2", null, "Countdown"), /*#__PURE__*/React.createElement("p", null, "Test"));
}

class WebPlugin extends _clusterio_lib__WEBPACK_IMPORTED_MODULE_0__.libPlugin.BaseWebPlugin {
  async init() {
    this.countdown = new Map();
    this.pages = [{
      path: "/countdown",
      sidebarName: "Countdown",
      permission: "countdown.countdown.view",
      content: /*#__PURE__*/React.createElement(CountdownPage, null)
    }];
  }

}

/***/ })

}]);
//# sourceMappingURL=278.bundle.js.map