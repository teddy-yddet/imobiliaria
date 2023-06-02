const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Users", UserDataSchema);
