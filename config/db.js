const mongoose = require("mongoose");
const dbURI = "mongodb+srv://suhransh:3GIDwi94pSBMj6qJ@cluster0.tdbbtwh.mongodb.net/?appName=Cluster0"

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;