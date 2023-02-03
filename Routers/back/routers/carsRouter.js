const fs = require("fs")
const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send(fs.readFileSync("./routers/cars.json", {encoding: "utf-8"}));
});

router.get("/:id", (req,res) =>{
    const id = +req.params.id
    const carsArray = JSON.parse(fs.readFileSync("./routers/cars.json", {encoding: "utf-8"}));
    const car = carsArray.find(user => user.id === id);
    res.send(car);
});

router.post("/", (req, res) =>{
    const carsArray = JSON.parse(fs.readFileSync("./routers/cars.json", {encoding: "utf-8"}))
    fs.writeFileSync("./routers/cars.json", JSON.stringify([...carsArray, {id: carsArray.at(-1)?.id + 1 || 1, model: req.body.model}]));
    res.send("cars added");
});

router.delete("/:id",(req,res) =>{
    const id = +req.params.id
    const carsArray = JSON.parse(fs.readFileSync("./routers/cars.json", {encoding: "utf-8"}))
    fs.writeFileSync("./routers/cars.json", JSON.stringify(carsArray.filter(car => car.id !== +id)))
    res.send("car deleted")
})

module.exports = router;