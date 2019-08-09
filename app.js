var 	express = require("express"),
		Request = require("request"),
		mongoose = require("mongoose"),
		app = express();

mongoose.connect("mongodb://localhost/task");
app.set("view engine","ejs");

app.get("/",function(request,response){
	response.render("Index");
});

app.get("/task",function(request,response){
	Request("https://api.spacexdata.com/v3/launches",function(error,responses,rockets){
	if(error)
		{
			console.log("Something went wrong");
			console.log(error);
			response.render("/");
		}

	else if(responses.statusCode==200)
		{
			var data = JSON.parse(rockets);
			response.render("Task",{rockets:data});
		//response.send(data);
		//console.log(data[0].rocket_name);
		}
	});
});

app.listen(process.env.PORT||8000,process.env.IP,function(){
console.log("The server is up and running");
});
