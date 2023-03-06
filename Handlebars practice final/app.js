const exp = require("express");
const bp = require('body-parser');

const categoryRouter = require('./routers/categoryRouter.js');
const productRouter = require('./routers/productRouter.js')

const app = exp();

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use('/categories', categoryRouter);
app.use('/products', productRouter)

app.listen(8080)