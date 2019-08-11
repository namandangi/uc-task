var 	express = require("express"),
		Request = require("request"),
		mongoose = require("mongoose"),
		app = express(),
		task = require("./models/tasks");

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
			data.forEach(function(rocket){
			//console.log(rocket.id);
					Task.create({
					flight_number : rocket.flight_number,
					launch_date : rocket.launch_date_utc,
					rocket_name : rocket.rocket.rocket_name,
					patch_link : rocket.links.mission_patch
				},function(err,rockett){
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
			
			response.render("Task",{rockets:data});
		//response.send(data);
		}
	});
});

app.get("*",function(req,res){
	//res.send("Page not Found! ....redirecting");
	res.redirect("/");
});

app.listen(process.env.PORT||8000,process.env.IP,function(){
console.log("The server is up and running");
});
