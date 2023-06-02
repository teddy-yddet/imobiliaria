const express = require("express");
const routes = express.Router();

const AnnotationController = require("./controllers/AnnnotationController.js");
const PriorityController = require("./controllers/PriorityController.js");
const ContentController = require("./controllers/ContentController.js");
const UserController = require("./controllers/UserController");
const ImovelController = require("./controllers/ImovelController.js");

// Rota Annotations
routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete);

// Rota Users
routes.post("/users", UserController.create);
routes.get("/users", UserController.read);
routes.delete("/users/:id", UserController.delete);

// Rota Imoveis
routes.post("/imoveis", ImovelController.create);
routes.get("/imoveis", ImovelController.read);
routes.delete("/imoveis/:id", ImovelController.delete);

// Rota priority
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// Rota Content

routes.post("/contents/:id", ContentController.update);

module.exports = routes;
