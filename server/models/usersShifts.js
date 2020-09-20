var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var usersShifts = new mongoose.Schema({
    shifts:[[]]
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Shifts",usersShifts);