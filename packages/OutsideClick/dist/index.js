"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * @name: OutsideClick ;
 * @author: sophiehui ;
 * @description:  ;
 * */
var OutsideClick = function OutsideClick(props) {
  var ref = (0, _react.useRef)(null);

  var handClick = function handClick(e) {
    var onClickOutside = props.onClickOutside;
    var el = ref;
    if (!el.current.contains(e.target)) onClickOutside(e);
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handClick, true);
    document.addEventListener('touchend', handClick, true);
    return function () {
      document.removeEventListener('click', handClick, true);
      document.removeEventListener('touchend', handClick, true);
    };
  }, []);
  var onClickOutside = props.onClickOutside,
      args = (0, _objectWithoutProperties2["default"])(props, ["onClickOutside"]);
  return _react["default"].createElement("div", (0, _extends2["default"])({}, args, {
    ref: ref
  }), props.children);
};

OutsideClick.propTypes = {
  onClickOutside: _propTypes["default"].func.isRequired
};
var _default = OutsideClick;
exports["default"] = _default;