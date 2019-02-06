const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema=new Schema({
    title: {type: String, required: true, default: Date.now},
    description:{type: String},
    date: {type: Date, default: Date.now},
    body: {type: String, required: true},
    user: {type: String, required:true}
})

const Resume = mongoose.model("Resume", resumeSchema);

module.exports=Resume;