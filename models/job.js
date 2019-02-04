const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema=new Schema({
    api_id: {type: String, required:true},
    api_job_id: {type: String, required:true},
    title: {type: String, required:true},
    date_created: {type: String, required:true},
    job_type: {type: String, required:true},
    description: {type: String, required:true},
    company_name: {type: String, required:true},
    company_logo: {type: String, required:false},
    company_url: {type: String, required:true},
    location: {type: String, required:true},
    apply_url: {type: String, required:true},
    api_logo: {type: String, required:false}
});

const Job = mongoose.model("Job", jobSchema);

module.exports=Job;