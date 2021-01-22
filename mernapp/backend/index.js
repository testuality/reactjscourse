const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 80;

console.log("port", port);

//app.use(cors);

app.use(express.json());


const uri = process.env.ATLAS_URI;
console.log("uri", uri);


app.post("/mernappbe" , (req, res) =>{
    console.log("Invocada test page /mernappbe body ", req.body);

    res.json(
        {
            path: req.pathname,
            headers: req.headers,
            body: req.body
        }
        );
});

app.listen(port, () => {
    console.log("Server running on port ", port);
});