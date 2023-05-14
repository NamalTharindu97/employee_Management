import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	employeeId: Yup.string().required("Employee ID is required"),
	designation: Yup.string().required("Designation is required"),
	employeeType: Yup.string().required("Employee Type is required"),
	experience: Yup.string().required("Experience is required"),
});

const Form = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			name: "",
			employeeId: "",
			designation: "",
			employeeType: "",
			experience: "",
		},
		validationSchema: validationSchema,

		onSubmit: async (values, { resetForm }) => {
			try {
				const response = await axios.post("/employees/", {
					name: values.name,
					employeeId: values.employeeId,
					designation: values.designation,
					employeeType: values.employeeType,
					experience: values.experience,
				});
				if (response.status === 201) {
					toast.success("Employee Created!", {
						position: "top-center",
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
					resetForm();
				} else {
					console.log("employee not created");
				}
			} catch (error) {
				console.log("Error creating employee: ", error);
			}
		},
	});

	const theme = createTheme({
		typography: {
			fontFamily: "Poppins, sans-serif",
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<div className="form">
				<form onSubmit={formik.handleSubmit}>
					<p>Name</p>
					<TextField
						id="name"
						label="Name"
						variant="outlined"
						size="small"
						value={formik.values.name}
						onChange={formik.handleChange}
						error={
							formik.touched.name && Boolean(formik.errors.name)
						}
						helperText={formik.touched.name && formik.errors.name}
					/>

					<p>Employee ID</p>
					<TextField
						id="employeeId"
						label="Employee ID"
						variant="outlined"
						size="small"
						value={formik.values.employeeId}
						onChange={formik.handleChange}
						error={
							formik.touched.employeeId &&
							Boolean(formik.errors.employeeId)
						}
						helperText={
							formik.touched.employeeId &&
							formik.errors.employeeId
						}
					/>

					<p>Designation</p>
					<TextField
						id="designation"
						label="Designation"
						variant="outlined"
						size="small"
						value={formik.values.designation}
						onChange={formik.handleChange}
						error={
							formik.touched.designation &&
							Boolean(formik.errors.designation)
						}
						helperText={
							formik.touched.designation &&
							formik.errors.designation
						}
					/>

					<p>Employee Type</p>
					<FormControl sx={{ m: 0, width: 200 }} size="small">
						<InputLabel id="employee-type-label">
							Employee Type
						</InputLabel>
						<Select
							labelId="employee-type-label"
							id="employeeType"
							label="Employee Type"
							name="employeeType"
							value={formik.values.employeeType}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.employeeType &&
								Boolean(formik.errors.employeeType)
							}
							helperText={
								formik.touched.employeeType &&
								formik.errors.employeeType
							}
						>
							<MenuItem value="full-time">Full-time</MenuItem>
							<MenuItem value="part-time">Part-time</MenuItem>
							<MenuItem value="intern">Intern</MenuItem>
						</Select>
					</FormControl>

					<p>Experience</p>
					<FormControl sx={{ m: 0, width: 200 }} size="small">
						<InputLabel id="experience-label">
							Experience
						</InputLabel>
						<Select
							labelId="experience-label"
							id="experience"
							label="Experience"
							name="experience"
							value={formik.values.experience}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.experience &&
								Boolean(formik.errors.experience)
							}
							helperText={
								formik.touched.experience &&
								formik.errors.experience
							}
						>
							<MenuItem value={0}>No experience</MenuItem>
							<MenuItem value="1 Year">1 year</MenuItem>
							<MenuItem value="2 Year">2 years</MenuItem>
							<MenuItem value="3 Year">3 years</MenuItem>
							<MenuItem value="4 Year">4 years</MenuItem>
							<MenuItem value="5 Year">5 years or more</MenuItem>
						</Select>
					</FormControl>

					<div className="btn-section">
						<Button
							variant="text"
							onClick={() => {
								navigate("/");
							}}
						>
							cancel
						</Button>
						<Button variant="contained" type="submit">
							Add People
						</Button>
					</div>
				</form>
			</div>
			<ToastContainer />
		</ThemeProvider>
	);
};

export default Form;
