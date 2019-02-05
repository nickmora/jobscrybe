
const db = require("../models");

module.exports=function(app, passport){
    app.get("/main", (req,res)=>{
        res.json("hey")
    })
    
    app.post("/api/signup/", passport.authenticate("local-signup", {
        successRedirect:"/main",
        failureReditrect:"/signup"
    }));


    app.get("/logout", (req,res)=>{
        req.logout();
        res.redirect("/");
    });

    app.post("/api/login", (req,res)=>{
        console.log("HIT")
        passport.authenticate("local-login", {
            successRedirect: "/main",
            failureReditrect: "/login"
        })
    });

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

