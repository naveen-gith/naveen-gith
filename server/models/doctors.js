const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create a schema 
const doctorschema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String },
    profDesignation: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, },
    language1: { type: String, },
    language2: { type: String, },
    speciality: { type: String, },
    Notes: { type: String, },
    disposition: { type: String, }
});
const Doctors = mongoose.model('doctors', doctorschema);
//Export the model
module.exports = Doctors;