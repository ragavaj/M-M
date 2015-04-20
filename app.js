var app = angular.module("MaM", ['ngResource']);

app.controller("MaMCtrl", function($scope, JsonService) {
	$scope.mytext = "Hello World!";

	JsonService.get(function(data){
		$scope.mytext = data.name + "-" + data.description;
	});
});

app.factory('JsonService', function($resource) {
	return $resource('/stories/story-1/detail.json');
});