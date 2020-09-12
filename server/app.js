var express = require("express");
var app = express();
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
app.use('/js', express.static("js"));
app.use('/images', express.static("images"));
app.use('/css', express.static("css"));


app.get('/',async(req,res)=>{
	res.render("./index.html");
});

app.get('/ba',async(req,res)=>{
	res.render('./index.html');
});


app.get("/bye/:testt",function(req,res){
	
	res.send("bye" + req.params.testt);
});



// app.listen(3000,function(){
// 	console.log("das");
// });


var PORT = 9000;

app.listen(PORT, () => {
    console.log('Listening on http://localhost:9000');
});