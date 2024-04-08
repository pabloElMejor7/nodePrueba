const express = require("express");

const router = express.Router();

const {getData,getDataOne,addData,deleteData,UpdateData} =  require("../model/api.usuario");

router.get("/" , getData  );

router.get("/:id" , getDataOne);

router.post("/",  addData);

router.delete("/:id" , deleteData);

router.put("/:id" , UpdateData);



module.exports = {
    router: router
}