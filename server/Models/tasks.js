var mongoose = require("mongoose");

var taskSchema = mongoose.Schema({
  name: String,
  time: Number,
  day: String,
  complete: Boolean
});

module.exports = mongoose.model('Task', taskSchema);

// module.exports = Task;