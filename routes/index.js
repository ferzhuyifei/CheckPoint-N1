"use strict";

const { json } = require("body-parser");
var express = require("express");
var router = express.Router();
module.exports = router;
var todos = require("../models/todos");

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get("/users", (req, res, next) => {
  res.send(todos.listPeople());
});

router.get("/users/:name/tasks", (req, res, next) => {
  const nombre = req.params.name;
  if (!todos.listPeople().includes(nombre)) res.sendStatus(404);
  let tasks = todos.list(nombre);
  if (req.query.status) {
    tasks = tasks.filter((task) =>
      req.query.status === "complete"
        ? task.complete === true
        : task.complete === false
    );
  }
  res.send(tasks);
});

router.post("/users/:name/tasks", (req, res, next) => {
  const nombre = req.params.name;
  const tarea = req.body;
  if (
    !Object.keys(req.body).every(
      (key) => key === "content" || key === "complete"
    )
  )
    res.sendStatus(400);
  res.status(201).send(todos.add(nombre, tarea));
});

router.put("/users/:name/tasks/:index", (req, res, next) => {
  const nombre = req.params.name;
  const index = req.params.index;
  // let tareas = todos.list(nombre);
  // let tareaParaCompletar = tareas[index];
  // res.send((tareaParaCompletar.complete = true));
  //O
  //res.send((todos.list(nombre)[index].complete = true));
  //O
  res.send(todos.complete(nombre, index));
});

router.delete("/users/:name/tasks/:index", (req, res, next) => {
  res.status(204).send(todos.remove(req.params.name, req.params.index));
});
