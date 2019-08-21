const router = require("express").Router();
const tripController = require("../../controllers/tripController");


// Matches with "/api/trips/:id"
router.route("/:id")
  .get(function(req, res){
      console.log(`get request made to /api/users/:id`)
    //   console.log(res);
    tripController.getTripsForUser(req.params.id, function(trips){
        res.json(trips);
    });
  });

module.exports = router;