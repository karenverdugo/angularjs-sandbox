'use strict';

var yeomanApp = angular.module('yeomanApp', ['ngResource','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
     .when('/', {
        templateUrl: 'index.html',
        controller: 'MovieListCtrl'
      })
      .when('/movie/:movieId', {
        templateUrl: 'views/movie.html',
        controller: 'MovieController'
      });
      
  });
