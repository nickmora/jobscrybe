const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },

      // date: {
      //   type: Date,
      //   default: Date.now
      // }
});

// UserSchema.pre("save", function(next){
//   const user = this;
//   console.log(user);
//   if(!user.isModified("password")) return next;
//   bcrypt.genSalt(10, function(err, salt){
//     if(err) return next(err);
//     bcrypt.hash(user.password, salt, (err, hash)=>{
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     })
//   })
// })

UserSchema.methods.generateHash = password=>{
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = password=>{
  return bcrypt.compareSync(password, this.local.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
