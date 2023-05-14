import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeSummery from "./pages/EmployeeSummery";
import EmployeeForm from "./pages/EmployeeForm";
import UpdateForm from "./components/UpdateForm";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<EmployeeSummery />} />
					<Route path="/form" element={<EmployeeForm />} />
					<Route path="/updateForm/:id" element={<UpdateForm />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
