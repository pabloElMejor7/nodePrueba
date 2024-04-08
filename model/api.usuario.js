const  express = require("express");

const  {exportsFunction}  =   require('../config/db');

async function   getData  (req,res){
    
    const  conexion = await  exportsFunction();
    const  [rows]  = await conexion.query("SELECT * FROM  usuarios ");
    console.log(rows);
    res.send(rows);

}

async function   getDataOne  (req,res){
    
    const  conexion = await  exportsFunction();
    const  [rows]  = await conexion.query("SELECT * FROM  usuarios WHERE  id = ?"  , [req.params.id]);
    console.log(rows);
    res.send(rows);

}

 async function   addData  (req,res){
    const  {nombre  , apellido  ,  edad}   =  req.body;

    if(!nombre ||  !apellido || !edad){
        console.log("Error:  no   hay  contenido");
        return res.status(404);
    }
    const  conexion = await  exportsFunction();
    const  [rows]  = await conexion.query("INSERT INTO  usuarios  (nombre,apellido,edad) VALUES  (?, ? , ?)   ", [nombre,apellido,edad]);
    console.log(rows);
    res.json(rows);



}

async function   deleteData  (req,res){
    const  conexion = await  exportsFunction();
    const  [rows]  = await conexion.query("DELETE FROM  usuarios  WHERE  id = ?"  , [req.params.id]);
    console.log(rows);
    res.send(rows);

    if(rows.affectedRows  <= 0){
        console.log("dato no eliminado");
        res.send("dato  no eliminado");

    }else{
        console.log("dato eliminado");
    }

}

async  function   UpdateData  (req,res){

    const  {nombre  , apellido  ,  edad}   =  req.body;

    const   idUsuarios = req.params.id;
    const  conexion = await  exportsFunction();
    const  [rows]  = await conexion.query("UPDATE usuarios SET  nombre = ? ,  apellido  = ? , edad  =  ?    WHERE id = ?"  , [nombre,apellido  ,  edad  , idUsuarios]);

    console.log(rows);
    res.send(rows);
}

module.exports   = {
    getData: getData,
    getDataOne : getDataOne,
    addData : addData,
    deleteData : deleteData,
    UpdateData : UpdateData

}