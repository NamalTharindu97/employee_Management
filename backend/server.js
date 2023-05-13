const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dbConnection = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv").config();

dbConnection();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/api/v1/employees", require("../backend/routes/employeeRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
