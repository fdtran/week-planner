angular.module('app.services', [])
       .service('Tasks', function($http) {

        this.getAll = function (cb) {
          return $http({
            method: 'GET',
            url: '/api/tasks'
          }).then((response) => {
            console.log(response);
            cb(response);
            return response;
          })
        },

        this.addTask = function(task) {
          return $http({
            method: 'POST',
            url: '/api/tasks',
            data: task
          });
        }

       });