const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConnection = require("./config/dbConnection");

dbConnection();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/employees", require("../backend/routes/EmployeeRoutes"));

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
