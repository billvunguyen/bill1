var Data1 = require('../app/models/data1');
module.exports = function(app, passport) {
// normal routes ===============================================================

    // show the home page
    app.get('/', function(req, res) {
        res.render('trangchu.ejs');
    });

    app.get('/home',function(req,res){
        res.render('trangchu.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// AUTHENTICATE (FIRST LOGIN) ==================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
        // uptext
        app.get('/dangBai',function(req,res){
            res.render('dangBai.ejs');
        });

        app.post('/dangBai',passport.authenticate('local-addtext',{
            succesRedirect :'/profile', // redirect to the secure profile if succes
            failureRedirect: '/', // redirect to the home if there is an error
            failureFlash : true // allow flash messages
        }));
/*
        app.post("/dangBai", async (request,response) => {
            try {
                var newData = new Data1();
                newData.local.data1 = data1;
                var result = await newData.save();
                response.send(result);
            } catch (error) {
                response.status(500).send(error);
            }
        });
/*
        app.post("/dangBai",function(req,data1,done){
            if (err)
                return done(err);

            var newData = new Data1();

            newData.local.data1 = data1;

            newData.save(function(err){
                if(err)
                    return done(err);
                return done(null, newData);
            });
        });
*/


    /*-------------------------------------------------------------------------------------------------*/
        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT)

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


// UNLINK ACCOUNTS


    // local
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


    // show view 
    app.get('/tin1',function(req,res){
        res.render("tin1.ejs");
    });

    app.get('/tin2',function(req,res){
        res.render("tin2.ejs");
    });

    app.get('/tin3',function(req,res){
        res.render("tin3.ejs");
    });

    app.get('/tin4',function(req,res){
        res.render("tin4.ejs");
    });

    app.get('/tin5',function(req,res){
        res.render("tin5.ejs");
    });

    app.get('/bangxephang',function(req,res){
        res.render("bangxephang.ejs")
    });

    app.get('/highlight',function(req,res){
        res.render("highlight.ejs")
    });

    app.get('/ketQua',function(req,res){
        res.render("ketQua.ejs")
    });

    app.get('/lich',function(req,res){
        res.render("lich.ejs")
    });

    app.get('/Pog',function(req,res){
        res.render("Pog.ejs")
    });



};


// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
