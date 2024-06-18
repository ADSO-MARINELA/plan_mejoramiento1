"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("./routes.persona"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ruta = (0, _express.Router)();
ruta.use("/user", _routes["default"]);
var _default = exports["default"] = ruta;