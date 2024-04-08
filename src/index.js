const express = require("express");
const cors = require("cors");
const port = require("../config/config.js");
const app = express();
const { router } = require("../router/router.js");
const bodyParser = require("body-parser");


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);


app.listen(port, () => {
    console.log("Servidor activo en el puerto", port);
});

