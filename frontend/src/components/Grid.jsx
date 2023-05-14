import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material";

const Grid = ({ columns, empData }) => {
	const theme = createTheme({
		typography: {
			fontFamily: "Poppins, sans-serif",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div className="form-style">
				<Box sx={{ height: 400, width: "90%" }}>
					<DataGrid
						rows={empData}
						columns={columns}
						paginationModel={{ page: 0, pageSize: 15 }}
						hideFooterSelectedRowCount
						className="grid"
					/>
				</Box>
			</div>
		</ThemeProvider>
	);
};

export default Grid;
