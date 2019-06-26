var express=require("express");
var app=express();
var businessController=function(req,resp)
{
  console.log("the list of enities");
  var customers=[
   {id:1,name:"ram",ba:20000,hra:2000,da:3000,business_entity:"customers"},
     {id:2,name:"jai",ba:25000,hra:2000,da:3000,business_entity:"customers"},
	   {id:3,name:"veer",ba:20000,hra:2000,da:3000,business_entity:"customers"},
	     {id:4,name:"komal",ba:62000,hra:2000,da:3000,business_entity:"customers"},
		 {id:5,name:"mayu",ba:20000,hra:2000,da:3000,business_entity:"customers"}
		 ];
	resp.send(customers);
};
app.get('/customers',businessController);
var server=app.listen(8085,function(req,resp)
{
  var host=server.address().address
  var port=server.address().port
  console.log("server is listening on port 8085",host,port);
})
