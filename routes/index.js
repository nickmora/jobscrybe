
// const router = require("express").Router();
// const userController = require("../controllers/userController")
// // const resumeRoutes = require("./api/resumeSaved");
// const db = require("../models");
// const passport = require("../config/passport")
// const isAuthenticated=require("../config/middleware/isAuthenticated")
// const api = require("./api-routes")

// router.route("/", api);

// router.route("/api/signup")
//     .post(userController.create);

// module.exports=router;


// const router = require("express").Router();
// const resumeRoutes = require("./api/resumeSaved");
const db = require("../models");
const passport = require("../config/passport")
const isAuthenticated=require("../config/middleware/isAuthenticated")

module.exports=function(app){
    app.get("/", (req,res)=>{
        res.json("hey")
    })
    app.post("api/login", passport.authenticate("local"), (req,res)=>{
        res.json("/members");
    });
    app.post("/api/signup", (req,res)=>{
        console.log(req.body);
        db.User.create({
            email:req.body.email,
            password:req.body.password
        }).then(()=>{
            console.log("did it!")
            res.redirect("/");
        }).catch(err=>{
            console.log(err);
            res.json(err);
        })
    })
    app.get("/logout", (req,res)=>{
        req.logout();
        res.redirect("/");
    });
}
//     //html routes here

//     app.get("/", function(req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//           res.redirect("/members");
//         }
//         res.sendFile(path.join(__dirname, "../public/signup.html"));
//       });
    
//       app.get("/login", function(req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//           res.redirect("/members");
//         }
//         res.sendFile(path.join(__dirname, "../public/login.html"));
//       });
    
//       // Here we've add our isAuthenticated middleware to this route.
//       // If a user who is not logged in tries to access this route they will be redirected to the signup page
//       app.get("/members", isAuthenticated, function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/members.html"));
//       });
    
// }


// // Book routes
// // router.use("/resumeSaved", resumeRoutes);

// // module.exports = router;
