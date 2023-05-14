import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import axios from "axios";
import { DeleteConfirmBtn } from "../components/deleteConfirmBtn/DeleteConfirmBtn";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmployeeSummery = () => {
	const [empData, setEmpDate] = useState([]);
	const [empTypeFilter, setEmpTypeFilter] = useState("");
	const navigate = useNavigate();

	const columns = [
		{
			field: "name",
			headerName: "Display Name",
			width: 150,
			editable: true,
		},
		{
			field: "employeeId",
			headerName: "Emp ID",
			width: 150,
			editable: true,
		},
		{
			field: "designation",
			headerName: "Designation",
			width: 200,
			editable: true,
		},
		{
			field: "employeeType",
			headerName: "Emp Type",
			width: 100,
			editable: true,
		},
		{
			field: "experience",
			headerName: "Experience",
			width: 200,
		},
		{
			field: "update",
			headerName: "Update",
			sortable: false,
			width: 80,
			headerClassName: "custom-header",
			cellClassName: "custom-cell",
			renderCell: (params) => (
				<button
					className="update-button"
					onClick={() => handleUpdate(params)}
				>
					edit
				</button>
			),
		},
		{
			field: "delete",
			headerName: "Delete",
			sortable: false,
			width: 120,
			headerClassName: "custom-header",
			cellClassName: "custom-cell",
			renderCell: (params) => <DeleteConfirmBtn id={params.id} />,
		},
	];

	useEffect(() => {
		const getEmployees = async () => {
			try {
				let url = "/employees";
				if (empTypeFilter) {
					url = `${url}?employeeType=${empTypeFilter}`;
				}
				const response = await axios.get(url);
				setEmpDate(
					response.data.map((emp) => ({ ...emp, id: emp._id }))
				);
			} catch (error) {
				console.log(error);
			}
		};
		getEmployees();
	}, [empTypeFilter]);

	const handleNavigate = () => {
		navigate("/form");
	};

	const handleEmpTypeFilterChange = (event) => {
		setEmpTypeFilter(event.target.value);
	};

	const handleUpdate = (params) => {
		const rowId = params.id; // get the MongoDB _id field
		const employee = empData.find((emp) => emp.id === rowId);
		navigate(`/updateForm/${rowId}`, {
			state: { employee },
		});
	};

	return (
		<div>
			<h2 className="heading-1">People</h2>
			<hr />
			<div className="head-section">
				<div>
					<Button variant="outlined" onClick={handleNavigate}>
						Add People
					</Button>
				</div>
				<div>
					<FormControl
						sx={{ m: 0, width: 200, margin: 0, padding: 0 }}
						size="small"
					>
						<InputLabel id="demo-simple-select-label">
							Employee Types
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Employee Types"
							value={empTypeFilter}
							onChange={handleEmpTypeFilterChange}
						>
							<MenuItem value="full-time">Full-time</MenuItem>
							<MenuItem value="part-time">Part-time</MenuItem>
							<MenuItem value="intern">Intern</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>

			<Grid empData={empData} columns={columns} />
		</div>
	);
};

export default EmployeeSummery;
