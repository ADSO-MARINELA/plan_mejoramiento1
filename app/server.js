import express from "express";
import rutaPersona from "./routes/routes.persona";

const server = express();

server.use(express.json());

server.use("/user", rutaPersona);

export default server;

