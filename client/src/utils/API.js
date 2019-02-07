import axios from "axios";

export default {
    // Gets jobs from the Github API
    getJobs: function(q) {
      // console.log(q);
      // console.log(loc);
      return (axios.get(`http://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${q.search}&location=${q.location}`));

    },
    // Gets all saved jobs
    getSavedJobs: function() {
      return axios.get("/api/jobs");
    },
    // Deletes the saved job with the given id
    deleteJobs: function(id) {
      return axios.delete("/api/jobs/" + id);
    },
    // Saves a job to the database
    saveJob: function(jobData) {
      return axios.post(`/api/jobs/${jobData.user}`, jobData);
    },
    addResume: function(data){
      console.log(data)
      return axios.post("/api/saveResume", data);
    },
    logout: function(){
      return axios.get("/logout");
    },
//   // Gets all books
    getResumes: function(user) {
      return axios.get("/api/resume/" + user);
    },

    getSavedJobs: function(){
      console.log("hello from API")
      return axios.get("/api/jobs")
    },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   },
  signUp: function(info){
    return axios.post("/api/signup/", info);
  },
  logIn: function(info){
    // console.log("login works")
    return axios.post("/api/login/", info);
  }
};