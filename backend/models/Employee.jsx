const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "please add the employee name"],
		},
		employeeId: {
			type: String,
			required: [true, "please enter employeeId "],
			unique: [true, "this ID already taken"],
		},
		designation: {
			type: String,
			required: [true, "please enter designation"],
		},
		employeeType: {
			type: String,
			required: [true, "please enter employeeType"],
		},
		experience: {
			type: String,
			required: [true, "enter experience"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Employee", employeeSchema);
