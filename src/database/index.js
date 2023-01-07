const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://localhost:27017/noderest");
} catch (error) {
  console.log(error);
}
mongoose.Promise = global.Promise;

module.exports = mongoose;
