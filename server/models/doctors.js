const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create a schema 
const doctorschema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String,},
    middleName: { type: String },
    profDesignation: { type: String, required: true },
    Gender: { type: String, required: true },
    email: { type: String,null:true},
    status: { type: String, },
    language1: { type: String, },
    language2: { type: String, },
    speciality: { type: String, },
    notes: { type: String, },
    disposition: { type: String, }
});
const Doctors = mongoose.model('doctors', doctorschema);
//Export the model
module.exports = Doctors;