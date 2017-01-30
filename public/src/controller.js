angular.module('DemoApp')
	.controller('ListController', function($scope, $http) {
		$scope.$watch('search', function() {
			
			$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
				  .then(function(response){ 
				  	$scope.details = response.data; 
				 });

			$http.get("http://www.omdbapi.com/?s=" + $scope.search)
				  .then(function(response){ 
				  	$scope.related = response.data; 
				  	
				  });
				
		});
		$scope.search = "Sherlock Holmes";

		$scope.update = function(movie){
		  $scope.search = movie.Title;
		};
	});

