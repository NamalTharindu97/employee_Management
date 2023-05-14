import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeSummery from "./pages/EmployeeSummery";
import EmployeeForm from "./pages/EmployeeForm";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<EmployeeSummery />} />
					<Route path="/form" element={<EmployeeForm />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
