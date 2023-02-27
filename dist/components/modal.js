"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../components/modal.css");
var Modal = function Modal(props) {
  var setIsOpen = props.setIsOpen,
    modalText = props.modalText;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBody"
  }, /*#__PURE__*/_react.default.createElement("i", {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    className: "fa-solid fa-circle-xmark"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "modalText"
  }, modalText)))));
};
var _default = Modal;
exports.default = _default;