const mongoose = require("mongoose")
const a = require("./db")

const connection = mongoose.createConnection(dbURI).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});
module.exports = connection;