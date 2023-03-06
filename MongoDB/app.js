const exp = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');

const phonesRouter = require('./routers/phonesRouter.js')

const app = exp();

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://icsky:postal2006123@cluster0.xvkgv7t.mongodb.net/test', (err) => {
    if(err) {
        console.log(error);
    }else {
        console.log(success);
        app.use('/phones', phonesRouter)
        app.listen(8080);
    };
});