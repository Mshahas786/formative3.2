const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const twig = require('twig');


const app = express();
// const passport =  require("passport");

// we're calling in the mongoose schema user
const Posts = require("./MangooseSchema");

////////we're setting up the strategy to provide security

// const LocalStrategy =  require("passport-local");
// passport.serializeUser(User.serializeUser()); 
// passport.deserializeUser(User.deserializeUser()); 
// passport.use(new LocalStrategy(User.authenticate()));



////simplifies the integration between Mongoose and Passport for local authentication

// const passportLocalMongoose =  require("passport-local-mongoose"); 

// views
app.set('view engine', 'html');
app.engine('html', twig.__express);
app.set('views','views');

const mongourl ="mongodb+srv://test:123@cluster01.zv9fx.mongodb.net/20WDWU07.WORKS?retryWrites=true&w=majority";

mongoose.connect(mongourl, { useUnifiedTopology: true });
app.use(require("express-session")({
    secret:"Hello i am talking right now", //decode or encode session, this is used to compute the hash.
    resave: false,              //What this does is tell the session store that a particular session is still active, in the browser
    saveUninitialized:false    //the session cookie will not be set on the browser unless the session is modified
}));

// add the bodyParser so we can return our information to the database
app.use(bodyParser.urlencoded({ extended:true }))
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(__dirname + '/public'));

///// start our server

// const port = 3005;

// app.listen(port ,function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Server Started At Port " + port);
//     } 
// });


// app.get("/home", (req,res) =>{
//     res.render("home")
// })

// app.get("/login", (req,res) =>{
//     res.render("login")
// })

// app.get("/register", (req,res) =>{
//     res.render("register")
// })

// app.get("/dashboard", (req,res) =>{
//     res.render("dashboard")
// })

app.post('/', (req, res) => {
    new Posts({
        ProjectName:req.InputWork.ProjectName,
        ProjectCoverUrl:req.InputWork.ProjectCoverUrl,
        AuthorName:req.InputWork.AuthorName,
        ProjectLink:req.InputWork.ProjectLink
           
        })
        .save()
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err => {
            if (err) throw err;
        });
});

app.get('/', (req, res) => {
    // Fetch the posts from the database
    Posts.find()
        .sort({
            createdAt: 'descending'
        })
        .then(result => {
            if (result) {
                res.render('InputWork', {
                    allpost: result
                });
            }
        })
        .catch(err => {
            if (err) throw err;
        });
});

// // delete function
// app.get('/delete/:id', (req, res) => {
//     Posts.findByIdAndDelete(req.params.id)
//     .then(result => {
//         res.redirect('/');
        
//     })
//     .catch(err => {
//         console.log(err);
//         res.redirect('/');
//     })
// });

// // EDIT POST
// app.get('/edit/:id', (req, res) => {

//     Posts.findById(req.params.id)
//     .then(result => {
//         if(result){
//             res.render('edit',{
//                 post:result
//             });
//         }
//         else{
//             res.redirect('/');
//         }
//     })
//     .catch(err => {
//         res.redirect('/');
//     });
// });

// // UPDATE POST
// app.post('/edit/:id', (req, res) => {
//     Posts.findById(req.params.id)
//     .then(result => {
//         if(result){
//             result.title = req.body.title;
//             result.content = req.body.content;
//             result.author_name = req.body.author;
//             return result.save();
//         }
//         else{
//             console.log(err);
//             res.redirect('/');
//         }
//     })
//     .then(update => {
//         res.redirect('/');
//     })
//     .catch(err => {
//         res.redirect('/');
//     });
// });
