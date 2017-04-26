var http = require('http');
var request = require('request');

http.createServer(function(req, res){
	res.setHeader('Content-Type', 'text/html');
	request.post({url:'http://ycchen.im.ncnu.edu.tw/join.php', form: {name:'Mr. Nobody', sex:'male'}}, function(err, httpResponse, body){
		
		//console.log('body:', body); 
		res.write(body);
		res.end();
	});	
	
}).listen(7774);