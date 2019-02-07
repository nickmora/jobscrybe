const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
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
      resumes: [{type: Schema.Types.ObjectId, ref: "Resume"}]
});


UserSchema.methods.generateHash = password=>{
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
