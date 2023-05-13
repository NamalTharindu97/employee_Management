const express = require("express");
const router = express.Router();
const {
	getEmployee,
	getSingleEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} = require("../controller/EmployeeController");

router.route("/").get(getEmployee);
router.route("/:id").get(getSingleEmployee);
router.route("/").post(createEmployee);
router.route("/:id").put(updateEmployee);
router.route("/:id").delete(deleteEmployee);

module.exports = router;
