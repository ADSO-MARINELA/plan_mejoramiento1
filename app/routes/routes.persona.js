import { Router } from "express";
import { crearPersona, eliminarPersona, listarPersona, modificarPersona, mostrarPersona } from "../controllers/controller.persona";

const rutaPersona = Router();

rutaPersona.get("/persona/:id", mostrarPersona)
rutaPersona.get("/persona/", listarPersona)
rutaPersona.post("/persona/", crearPersona)
rutaPersona.put("/persona", modificarPersona)
rutaPersona.delete("/persona", eliminarPersona)

export default rutaPersona;