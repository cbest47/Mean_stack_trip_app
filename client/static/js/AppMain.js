var logApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'btford.socket-io']);

logApp.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/users/login.html',
    controller: 'usersController',
    controllerAs: 'UC'
  })
  .when('/trips', {
    templateUrl: 'partials/trips/tripindex.html',
    controller: 'tripsController',
    controllerAs: 'TC'
  })
  .when('/trips/new', {
    templateUrl: 'partials/trips/new.html',
    controller: 'tripsController',
    controllerAs: 'TC'
  })
  .when('/info', {
    templateUrl: 'partials/info/info.html',
  })
  .when('/trips/:id', {
    templateUrl: 'partials/trips/show.html',
    controller: 'tripsController',
    controllerAs: 'TC'
  })
  .when('/trips/:id/groupchat', {
    templateUrl: 'partials/trips/groupchat.html',
    controller: 'chatsController',
    controllerAs: 'CC'
  })




});
