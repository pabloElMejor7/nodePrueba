const mysql = require("mysql2/promise");


async  function exportsFunction(){
    try{

        const  conections   = await   mysql.createConnection({

            host: "localhost",
            user: "root",
            password: "",
            database : "api_tutorial"

        });

        console.log("conectado");
        return conections;


    }catch(e){
        console.error(e);
    }
}



module.exports =  {exportsFunction}




