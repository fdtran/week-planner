angular.module('app.services', [])
       .service('Tasks', function($http) {

        this.getAll = function () {
          return $http({
            method: 'GET',
            url: '/api/tasks'
          }).then((response) => {
            console.log(response);
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