import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form = ({ columns, empData }) => {
	return (
		<>
			<h2 className="heading-1">People</h2>
			<hr />
			<div>
				<Box sx={{ width: 200, height: 100, marginTop: 2 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							Employee Types
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							// value={age}
							label="Employee Types"
							// onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
			<div className="form-style">
				<Box sx={{ height: 400, width: "90%" }}>
					<DataGrid
						rows={empData}
						columns={columns}
						paginationModel={{ page: 0, pageSize: 25 }}
						hideFooterSelectedRowCount
						className="grid"
					/>
				</Box>
			</div>
		</>
	);
};

export default Form;
