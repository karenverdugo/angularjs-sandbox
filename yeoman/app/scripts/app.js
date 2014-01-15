'use strict';

angular.module('yeomanApp', [ 'ngResource', 'ngRoute' ]).config(
		function($routeProvider) {
			$routeProvider.when('/movie/:movieId', {
				templateUrl : 'views/movie.html',
				controller : 'MovieController'
			}).otherwise({
				redirectTo : '/'
			});

		});
