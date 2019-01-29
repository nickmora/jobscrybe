const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      location: {
      type: String,
      required: true
      }

    
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
module.exports ={
    Resume:require("./resume")
}
