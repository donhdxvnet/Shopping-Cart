var mongoose = require("mongoose");
console.log("mongoose version " + mongoose.version);
	var db = mongoose.connect("mongodb://localhost/shoppingcart");
		
	var myEmail = "test@test.com";
	var myFirstname = "test";

	var userSchema = mongoose.Schema({
	email : String,
	firstname : String
	});

	var User = mongoose.model("users", userSchema);
	User.create({email : myEmail, firstname : myFirstname});
