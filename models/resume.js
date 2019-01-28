const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema=new Schema({
    text: String,
    user: {type: String, required:true}
})

const Resume = mongoose.model("Resume", resumeSchema);

module.exports=Resume