const express = require("express");
const { store } = require("./controllers/SessionControllers");
const routes = express.Router();

routes.post("/sessions", store);

module.exports = routes;
