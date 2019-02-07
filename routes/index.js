const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");


// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

// module.exports = router;
// // const router = require("express").Router();
// // const userController = require("../controllers/userController")
// // // const resumeRoutes = require("./api/resumeSaved");
// // const db = require("../models");
// // const passport = require("../config/passport")
// // const isAuthenticated=require("../config/middleware/isAuthenticated")
// // const api = require("./api-routes")

// // router.route("/", api);

// // router.route("/api/signup")
// //     .post(userController.create);

// // module.exports=router;


// // const router = require("express").Router();
// const resumeRoutes = require("./api/resumeSaved");

const resumeController = require("../controllers/resumecontroller");


const db = require("../models");

module.exports=function(app, passport){
    app.get("/main", isLoggedIn, (req,res)=>{
        console.log("this is where I should be redirecting the url")
        res.json(req.user)
    })

    app.post("/api/saveResume", (req, res)=>{
        // console.log(req.body)
        resumeController.create(req.body)
    })

    app.post("/api/signup/", passport.authenticate("local-signup", {
        successRedirect:"/main",
        failureReditrect:"/signup"
    }));


    app.post("/api/login/",
    function(req, res, next) {
        passport.authenticate("local-login", function(err, user, info) {
            console.log(user, "user")
          if (err) { return next(err); }
          if (!user) { return res.redirect('/login'); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log(user._id, "CHICICHICHIHCIHCIHCIHICHI")
            return res.json(user);
          });
        })(req, res, next);
        // passport.authenticate("local-login", {
        //     successRedirect: "/main",
        //     failureReditrect: "/login"
        // })
    });

    app.get("/users/:id", (req, res)=>{
        console.log(req.params.id, "index")
        // userController.findById(req.params.id)

        // .then(response=>{
        //     console.log("Victory")
        //     // res.json(response)
        // })
    })

    app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {
    console.log(req.params, "end!")
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

