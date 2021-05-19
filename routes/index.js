'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;
var todos=require("../models/todos")

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get("/users",(req,res,next)=>{
    res.status(200).send("OK")//res.sendStatus(200)
    res.body=[]
})