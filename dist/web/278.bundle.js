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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(513);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);





function CountdownPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_clusterio_web_ui__WEBPACK_IMPORTED_MODULE_2__.PageLayout, {
    nav: [{
      name: "Countdown"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Countdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    for: "event-time"
  }, "Choose date and time for the start of the event: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "datetime-local",
    id: "event-time",
    name: "event-time",
    value: "2022-06-19T05:30",
    min: "2018-06-07T00:00",
    max: "2024-06-28T00:00"
  }))));
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