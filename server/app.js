var     express = require("express"),
		passport = require("passport"),
		User = require("./models/user"),
		bodyParser = require("body-parser"),
		LocalStrategy = require("passport-local"),
		passportLocalMongoose = require("passport-local-mongoose");

const mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost:27017/db_name', {
		  useNewUrlParser: true,
		  useUnifiedTopology: true
		})
		.then(() => console.log('Connected to DB!'))
		.catch(error => console.log("#### " +error.message));

var	app   = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/js', express.static("js"));
app.use('/images', express.static("images"));
app.use('/css', express.static("css"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(require("express-session")({
	secret:"Just a random sentence",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //responsible for encoding it, serializing data and putting it back into session
passport.deserializeUser(User.deserializeUser()); //responsible for reading session, taking data from session that is encoded and unencoding it

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

//show schedule
app.get("/", isLoggedIn, async(req,res)=>{
	res.render("./index.ejs",{currentUser:req.user});
});


//show register form
app.get("/register",function(req,res){
	res.render("register");
});

//secret page after login
app.get("/secret",isLoggedIn, function(req, res){
    res.render("secret");
});

//handling the register request
app.post("/register", function(req, res){
    req.body.username;
    req.body.password;
    User.register(new User({username: req.body.username}), req.body.password, function (err, user){ //create new user object (only username is passed b/c password is not saved to database). we pass password as 2nd argument to User.register -> takes new user -> hash password (encrypts, store in database) -> it will return a new user that has everything inside of it (object)
        if(err) {
            console.log(err);
            return res.render("register");
        } 
        passport.authenticate("local")(req, res, function(){ //logs the user in and takes care of everything in session and runs serializeuser method
            res.redirect("/secret");
        });
    });
});

//Login route
app.get("/login",function(req,res){
	res.render("login");
});

//handling login request + middleware
app.post("/login",passport.authenticate("local",{
	successRedirect: "/",
	failureRedirect:"/login"
}),function(req,res){
});


//Logout route
app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
})

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");

}

var PORT = 9000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});