var mongoose = require("mongoose");
var StudentDetailsSchema = mongoose.Schema({
  name: String,
  age: Number
  //location: { city: String, country: String
});

module.exports = mongoose.model("users", StudentDetailsSchema);
