import { Router } from "express";
import rutaPersona from "./routes.persona";

const ruta = Router();

ruta.use("/user", rutaPersona);

export default ruta;