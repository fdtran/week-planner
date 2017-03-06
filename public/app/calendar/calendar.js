
angular.module('app.calendar', [] )
.controller('CalendarController', function ($scope, $location, Tasks) { 
  
  $scope.todos = [
    // {time: 17, name:'Wash Dishes', day: 'Monday'},
    // {time: 13, name:'Sweep Floor', day: 'Tuesday'},
    // {time: 2, name:'Sleep', day: 'Wednesday'},
    // {time: 19, name:'Call Mom', day: 'Monday'},
    // {time: 21, name:'Wash Dishes', day: 'Tuesday'}
  ];

  $scope.init = () => {
    Tasks.getAll(function(response){
      $scope.todos = response.data;
    });
  };



  $scope.addTask = function (time, name, day) {

    let todo = {
      time: time,
      name: name,
      day: day,
      complete: false
    };

    Tasks.addTask(todo);
  };

  // $scope.finishTask = function() {
  //     return {'color': 'grey'}
  //   }
  // }



})