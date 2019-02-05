const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


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
// // const resumeRoutes = require("./api/resumeSaved");

const db = require("../models");

module.exports=function(app, passport){
    app.get("/main", (req,res)=>{
        res.redirect("/main")
    })

    app.post("/api/signup/", passport.authenticate("local-signup", {
        successRedirect:"/main",
        failureReditrect:"/signup"
    }));


    app.get("/logout", (req,res)=>{
        req.logout();
        res.redirect("/");
    });

    app.post("/api/login/",
        passport.authenticate("local-login", {
            successRedirect: "/main",
            failureReditrect: "/login"
        })
    );

    app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

