var 	express = require("express"),
		request = require("request"),
		app = express();

app.get("/",function(request,response){
	response.send("Home Directry");
});

app.get("/task",function(request,response){
	request("https://api.spacexdata.com/v3/rockets",function(error,response,rockets){
	if(error)
		{
			console.log("Something went wrong");
			console.log(error);
			response.render("/");
		}

	else if(response.statusCode==200)
		{
			var data = JSON.parse(rockets)
			console.log(data);
		}
	});
});

app.listen(process.env.PORT||8000,process.env.IP,function(){
console.log("The server is up and running");
});
