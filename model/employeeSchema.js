const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {type: String},
    profilePic: {type: String},
    designation: {type: String}
});

module.exports = mongoose.model('employees', employeeSchema);