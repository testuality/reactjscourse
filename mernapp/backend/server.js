const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

console.log("port", port);

//app.use(cors);
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log("uri", uri);
let connection = null;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => {
        connection = mongoose.connection;
        console.log("Mongodb database connected");
        connection.once("open", () => {
            console.log("Mongodb database open");
        });        
    })
    .catch((err) => {
        console.log("Error de conexion ", err);
    });

const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.get("/caca" , (req, res) =>{
    res.json("Hola tronko");
});

app.listen(port, () => {
    console.log("Server running on port ", port);
});