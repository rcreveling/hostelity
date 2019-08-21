const router = require("express").Router();
const loginRoutes = require('./login');
const tripRoutes = require('./trips');

router.use('/users', loginRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
