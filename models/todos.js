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
    let persona=[]
    for(let element in tasks){
      persona.push(element)
    }
    return persona
  },
  add: function (name, task) {
    let nuevaTarea=task
    if(!nuevaTarea.complete){
      nuevaTarea.complete=false
    }
    if(tasks[name]){
      tasks[name].push(task)
    }else{
    tasks[name]=[task]
    }
  },
  list: function(name){
    return tasks[name]
  },
  complete: function(name,number){
    tasks[name][number].complete=true
  },
  remove: function(name,number){
    tasks[name].splice(number,1)
  }
};
