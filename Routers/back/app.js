const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const usersRouter = require("./routers/usersRouter.js");
const carsRouter = require("./routers/carsRouter.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:"false"}));

app.use("/users", usersRouter);
app.use("/cars", carsRouter);

app.listen(8080);