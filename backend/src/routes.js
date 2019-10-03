const express = require("express");

const routes = express.Router();

routes.get("/users", (req, res) => {
  return res.json({ message: "Hello Word" });
});

module.exports = routes;
