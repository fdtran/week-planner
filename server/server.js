var express = require('express');
var mongoose = require('mongoose');
var Task = require('./Models/tasks');

var port = process.env.PORT || 3000;

var app = express();

mongoose.connect('mongodb://localhost/calendar');

app.use(express.static('/Users/student/Desktop/week-planner/public'));

app.get('/api/tasks', (request, response) => {
  Task.find({}, function (err, res) {
    if(err) console.log(err);
    else {
      console.log(res);
      response.send(res);    
    }
  });
});

app.post('/api/tasks', function(request,response) {
  var task = request.body.data;
  task = new Task(task);
  task.save();
});

app.listen(port, () => {
  console.log('Server is running at ' + port);
});


