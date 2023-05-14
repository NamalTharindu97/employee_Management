import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { DeleteConfirmBtn } from "../components/deleteConfirmBtn/DeleteConfirmBtn";

const EmployeeSummery = () => {
	const [empData, setEmpDate] = useState([]);
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
					// onClick={() => handleUpdate(params)}
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
				const response = await axios.get("/employees/");
				setEmpDate(
					response.data.map((emp) => ({ ...emp, id: emp._id }))
				);
			} catch (error) {
				console.log(error);
			}
		};
		getEmployees();
	}, []);

	return (
		<div>
			<Form empData={empData} columns={columns} />
		</div>
	);
};

export default EmployeeSummery;
