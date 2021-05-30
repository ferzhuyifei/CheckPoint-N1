"use strict";

/*
 * El objetivo es hacer un TO DO LIST:
 *   vas a tener que agregarle tareas a distintas personas y
 *   configurar propiedades de esas tareas.
 *
 *    (\
 *    \'\
 *     \'\     __________
 *     / '|   ()_________)
 *     \ '/    \ ~~~~~~~~ \
 *      \       \ ~~~~~~   \
 *      ==).      \__________\
 *     (__)       ()__________)
 */

var tasks = {}; // acá vamos a guardar nuestras personas y tareas

module.exports = {
  reset: function () {
    tasks = {};
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listPeople: function () {
    //return Object.keys(tasks);
    //O
    let persona = [];
    for (let element in tasks) {
      persona.push(element);
    }
    return persona;
  },
  add: function (name, { content, complete }) {
    if (!tasks[name]) tasks[name] = [];
    let tarea = {};
    tarea["content"] = content;
    tarea["complete"] = complete || false;
    tasks[name].push(tarea);
    return tarea;
  },
  list: function (name) {
    return tasks[name]; //busca la propiedad con ese nombre, por eso bracket notation
  },
  complete: function (name, number) {
    //tasks[name][number].complete = true;
    this.list(name)[number].complete = true;
  },
  remove: function (name, number) {
    tasks[name].splice(number, 1);
  },
};
