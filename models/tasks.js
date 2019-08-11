var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
	flight_number : Number,
	launch_date : String,
	rocket_name : String,
	patch_link : String
});

module.exports = new mongoose.model("Task",taskSchema);