var 	express = require("express"),
		Request = require("request"),
		mongoose = require("mongoose"),
		task = require("./models/tasks"),
		readline = require("readline"),
		app = express();

mongoose.connect("mongodb://localhost:27017/task",{useNewUrlParser:true});
app.set("view engine","ejs");

var rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});


app.get("/",function(request,response){
	response.render("Index");
});

app.get("/task",function(request,response){
	Request("https://api.spacexdata.com/v3/launches",function(error,responses,rockets){
	if(error)
		{
			console.log("Something went wrong");	/* when an error is encountered we redirect to index route */
			console.log(error);
			response.render("/");
		}

	else if(responses.statusCode==200)
		{
			var data = JSON.parse(rockets);		//parsing string data to object
			data.forEach(function(rocketlaunch){ 	//rocketlaunch vaiable is used to reference each rocket-launch and store it in database
					task.create({
					flight_number : rocketlaunch.flight_number,
					launch_date : rocketlaunch.launch_date_utc,
					rocket_name : rocketlaunch.rocket.rocket_name,
					patch_link : rocketlaunch.links.mission_patch
				},function(err,rockett){	//callback function to handle errors and print the saved rockets to console
						if(err)
							{
								console.log("Something went wrong redirecting...");
								response.redirect("/");
							}
						else
							{
								console.log("Saved a Rocket");
								console.log(rockett);
							}
					});
			});
			
			response.render("Task",{rockets:data});	//rendering Task.ejs while passing the parsed data as an object
		}
	});
});

app.get("*",function(req,res){ //redirecting all other routes to the index routes
	res.redirect("/");
});

app.listen(process.env.PORT||8000,process.env.IP,function(){
console.log("The server is up and running");
});
