const fs = require("fs")
const bodyParser = require("body-parser")
const express = require("express");
const cors = require("cors")
const app = express();

app.set("view engine","hbs");
app.use("/static", express.static(__dirname + "/public"))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/users", (req,res)=>{
    let users = JSON.parse(fs.readFileSync("users.json"));

    res.render("users.hbs",{
        users
    })
})

app.listen(8080)