const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./routes/user.routes"));
app.use("/api/task", require("./routes/todo.routes"));
app.use("/api/web", require("./routes/web.routes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});