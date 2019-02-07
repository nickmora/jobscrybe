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
        successRedirect:"/",
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
            // console.log(user._id, "CHICICHICHIHCIHCIHCIHICHI")
            return res.json(user);
          });
        })(req, res, next);
    });


    app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
    });

    app.get("/api/resume/:id", (req, res)=>{
        console.log(req.params.id)
        db.Resume
            .find({})
            .then(results=>{
                // console.log(results)
                res.json(results);
            })
    })

    app.post("/api/jobs/:id", (req, res)=>{
        console.log(req.body);
        db.Job.create(req.body.jobInfo);
    });

    app.get("/api/jobs/", (req, res)=>{
        db.Job
            .find({})
            .then(results=>{
                // console.log(results);
                res.json(results)
            })
    })

    app.post("/api/algo/", (req, res)=>{
        console.log(req.body)
    })

};

function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

