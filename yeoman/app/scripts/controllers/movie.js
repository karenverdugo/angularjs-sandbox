'use strict';

yeomanApp.controller('MovieController', function MovieController($scope, $http,
		$routeParams) {
	var movieId = $routeParams.movieId;
	$http.jsonp('http://www.omdbapi.com/', {
		params : {
			i : $routeParams.movieId,
			callback : 'JSON_CALLBACK'
		}
	}).success(function(data, status, headers, config) {
		$scope.movie = data;
		// alert(data);
	}).error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		// alert(status);
	});
});

//	
