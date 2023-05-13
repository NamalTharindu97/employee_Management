const asyncHandler = require("express-async-handler");
const Employe = require("../models/Employee");

//@desc GET all Employee
//@Route GET /api/v1/tea-factory/employees
//@access public
const getEmployee = asyncHandler(async (req, res) => {
	const employees = await Employe.find();
	res.status(200).json(employees);
});

//@desc GET Single Employee
//@Route GET /api/v1/tea-factory/employees/:id
//@access public
const getSingleEmployee = asyncHandler(async (req, res) => {
	const employe = await Employe.findById(req.params.id);
	if (!employe) {
		res.status(404);
		throw new Error("Employee Not Found");
	}
	res.status(200).json(employe);
});

//@desc POST create new Employee
//@Route POST /api/v1/tea-factory/employees
//@access public
const createEmployee = asyncHandler(async (req, res) => {
	const { name, employeeId, designation, employeeType, experience } =
		req.body;
	if (!name || !employeeId || !designation || !employeeType || !experience) {
		res.status(400);
		throw new Error("all fields are mandotory");
	}

	const userAvailable = await Employe.findOne({ employeeId });
	if (userAvailable) {
		res.status(400);
		throw new Error("this employee already added");
	}

	const employee = await Employe.create({
		name,
		employeeId,
		designation,
		employeeType,
		experience,
	});
	if (!employee) {
		res.status(404);
		throw new Error("Employee data not valid");
	}
	res.status(201).json(employee);
});

//@desc PUT update employee
//@Route GET /api/v1/tea-factory/employees:id
//@access public
const updateEmployee = asyncHandler(async (req, res) => {
	const employe = await Employe.findById(req.params.id);
	if (!employe) {
		res.status(404);
		throw new Error("Employee Not Found");
	}
	const newEmploye = await Employe.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(newEmploye);
});

//@desc DELETE  Employee
//@Route DELETE /api/v1/tea-factory/employees:id
//@access public
const deleteEmployee = asyncHandler(async (req, res) => {
	const employe = await Employe.findById(req.params.id);
	if (!employe) {
		res.status(404);
		throw new Error("Employee Not Found");
	}
	const deleteEmp = await Employe.findByIdAndDelete(req.params.id);
	res.status(200).json(deleteEmp);
});

module.exports = {
	getEmployee,
	getSingleEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
