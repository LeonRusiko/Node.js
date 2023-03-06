const mongoose = require('mongoose');
const { phoneSchema } = require('./Schemas');


const PhoneModel = mongoose.model('Phone', phoneSchema);

module.exports = {
    PhoneModel,
}