'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var router = express();

var mongoose = require("mongoose");
	console.log("mongoose version " + mongoose.version); //version
	
		
	var userSchema = mongoose.Schema({
	email : String,
	firstname : String
	});

router.use('/public', express.static(__dirname + '/public'));
router.use('/node_modules', express.static(__dirname + '/node_modules'));

router.get('/',function(req,res){
	res.sendFile('main.html',{'root':__dirname + '/public'});
})

router.listen('3000',function(){
	console.log('Server running at http://localhost:3000 !!')
})

router.post('/profile', bodyParser.json(), function(req, res)
{
	//Enregistrer le profil utilisant Mongoose
		
	var myEmail = req.body.email;
	var myFirstname = req.body.firstname;
	
	//console.log("mongoose data 1 " + i + req[i]); //data
	console.log("mongoose data 2 " + myEmail + " / " + myFirstname); //data


	//var myEmail = "test2";
	//var myFirstname = "test2@test.com";
var db = mongoose.connect("mongodb://localhost/shoppingcart");
	

	var User = mongoose.model("users", userSchema);
	User.create({email : myEmail, firstname : myFirstname});

	mongoose.connection.close();		
});
