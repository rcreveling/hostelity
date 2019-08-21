const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('../../passport');;

// Matches with "/api/users"
router.route("/")
  .get(function(req, res){
      console.log(`get request made to /api/users`)
      console.log(req.session.passport);
    //   console.log(res);
    if (req.isAuthenticated()){
        console.log('user logged in');
    } else {
        console.log('user not logged in?');
    }

      res.json(req.session);
  })
// Matches with "/api/users/:id"
router.route("/:id")
  .get(function(req, res){
      console.log(`get request made to /api/users/:id`);
    //   console.log(res);
    if (req.isAuthenticated()){
        userController.getUser(req.params.id, function(err, user){
            if (err) throw err;
            res.json(user);
        })
    } else {
        console.log('user not logged in. Denied');
        res.json({error: "User not logged in"});
    }
  })
//   .post(userController.addUser);

// Matches with "/api/users/logout"
router.route('/logout')
  .get(function(req, res){
      console.log("logout request received");
      req.logOut();
      console.log(req.session);
      res.json(req.session);
  })

// Matches with "/api/users/signup"
router.route('/signup')
  .get(function(req, res){
      console.log(req.data);
    })
  .post(function(req, res){
      console.log(`request received`);
      console.log(req.body);
      userController.addUser(req.body,function(err, response){
          if (err){
              console.log(err);
              res.json(err);
          } else {
              console.log(response);
              res.json(response);
          }
      });
  });


// Matches with "/api/users/login"
router.route('/login')
  .post(passport.authenticate('local', /*{
    successRedirect: "/api/users/login/meep",
    failureRedirect: "/api/users/login/meep",
    // failureFlash: true
}*/),
  function(req, res) {
      console.log(`'login request received for:'`);
      console.log(req.session);
      res.json(req.session);
    });
router.route('/login/meep')
.get(function(req, res){
    console.log('success redirect...')
    console.log(req.session);
})
//   .post(passport.authenticate('local'), function(req, res) {
//       console.log(`'login request received for:'`);
//       console.log(req.body);
//       res.json(req.user.email);
//     });


module.exports = router;