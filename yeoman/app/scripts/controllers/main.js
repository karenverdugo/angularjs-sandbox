'use strict';


yeomanApp.controller('MovieListCtrl',
function MovieListCtrl($scope, $http) {
	$scope.movies =[];
	$scope.search = function(movieToSearch) {

		$http.jsonp('http://www.omdbapi.com/',{
			params : {
				s : movieToSearch,
				callback : 'JSON_CALLBACK'
			}
		}).success(function(data, status, headers, config) {
			$scope.movies = data.Search;
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			//alert(status);
		});
	};
})
