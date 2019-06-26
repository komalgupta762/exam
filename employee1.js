var http=require("http");
var Employee=[
  {id:1,name:"komal",ba:20000,hra:2000,da:3000,business_entity:"employees"},
  {id:2,name:"mayuresh",ba:20000,hra:2000,da:3000,business_entity:"employees"},
  {id:3,name:"anushka",ba:20000,hra:2000,da:3000,business_entity:"employees"},
  {id:4,name:"priya",ba:20000,hra:2000,da:3000,business_entity:"employees"}
  ];
var controller=function(request,response)
{
 response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(Employee));
};
var server=http.createServer(controller)
server.listen(8087);
console.log("server is listening on port 8087");

  