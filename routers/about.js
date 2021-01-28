const express = require("express");
const router = express.Router();

let aboutController = require('../controllers/aboutController.js');

router.get('/', aboutController.home);

module.exports = router;