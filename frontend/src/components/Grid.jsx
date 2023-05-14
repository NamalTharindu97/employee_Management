import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Grid = ({ columns, empData }) => {
	return (
		<>
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

export default Grid;
