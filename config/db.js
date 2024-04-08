const mysql = require("mysql2/promise");


async  function exportsFunction(){
    try{

        const  conections   = await   mysql.createConnection({

            host: "bm5bpgycnrm4mb46czmg-mysql.services.clever-cloud.com",
            user: "umxfnteptx3wnsm9",
            password: "6p6t7C4r5ZlYHk4gQsWh",
            database : "bm5bpgycnrm4mb46czmg"

        });

        console.log("conectado");
        return conections;


    }catch(e){
        console.error(e);
    }
}



module.exports =  {exportsFunction}




