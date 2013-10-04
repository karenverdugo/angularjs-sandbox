'use strict';

describe('Controller: MovieListCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var MovieListCtrl,
   scope,
  httpBackend;
  var data = {
		  Search: [
			   {
			  		Title : "Annapolis",
			  		Year : "2006",
			  		imdbID : "tt0417433",
			  		Type : "movis"
				},
				{
				  	Title : "An Annapolis Story",
				  	Year : "1955",
				  	imdbID : "tt0047835",
				  	Type : "movis"
				}
			]	
		};


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    MovieListCtrl = $controller('MovieListCtrl', {
      $scope: scope
    });
   
    $httpBackend.whenJSONP('http://www.omdbapi.com/?callback=JSON_CALLBACK&s=Annapolis').respond(data);
  }));

  it('should attach a list of movies to the scope', function () {
	  
	 
			httpBackend.expectJSONP('http://www.omdbapi.com/?callback=JSON_CALLBACK&s=Annapolis').respond(200, data);
			scope.search("Annapolis");
			httpBackend.flush();
    expect(scope.movies.length).toBe(2);
  });
});
