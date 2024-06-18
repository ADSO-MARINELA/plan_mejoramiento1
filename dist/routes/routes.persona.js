"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.persona");
var rutaPersona = (0, _express.Router)();
rutaPersona.get("/persona/:id", _controller.mostrarPersona);
rutaPersona.get("/persona/", _controller.listarPersona);
rutaPersona.post("/persona/", _controller.crearPersona);
rutaPersona.put("/persona", _controller.modificarPersona);
rutaPersona["delete"]("/persona", _controller.eliminarPersona);
var _default = exports["default"] = rutaPersona;