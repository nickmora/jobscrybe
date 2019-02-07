const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
  created_at: { type: String, required: true },
  company: { type: String, required: true },
  company_url: { type: String, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  how_to_apply: { type: String, required: true },
  company_logo: { type: String, required: true }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
