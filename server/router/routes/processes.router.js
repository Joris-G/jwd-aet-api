const express = require("express");
const processesController = require("../../../controllers/processes.controller");
const router = express.Router();
router.get("/", processesController.getAll);
module.exports = router;
