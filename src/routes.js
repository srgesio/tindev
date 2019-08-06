const express = require("express");
const routes = express.Router();
const devController = require("./controllers/devController")


routes.post("/devs", devController.store);

module.exports = routes;