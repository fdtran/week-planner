var app = angular.module('app', ['app.calendar', 'app.services', 'ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/calendar/calendar.html',
    controller: 'CalendarController'
  });
});

