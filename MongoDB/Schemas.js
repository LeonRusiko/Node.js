const { Schema } = require('mongoose');

const phoneSchema = new Schema({
    model: String,
    price: Number,
    color: String,
});

module.exports = {
    phoneSchema,
}