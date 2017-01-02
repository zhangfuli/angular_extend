var myApp = angular.module('myApp' , []);
myApp.config(function($httpProvider){
	$httpProvider.defaults.withCredentials = true;
});
myApp.controller('controllerA' ,function  ($scope,$http) {
	$scope.days = [] ;
	$scope.status = '';
	$scope.removeDay = function(deleteDay){
		$http.post('http://localhost:8080/remove/day' , {day:deleteDay})
			.success(function(data,status,headers,config){
				$scope.days = data;
			})
			.error(function(data,status,headers,config){
				$scope.status = data.msg;
			});
	};
	$scope.resetDays = function(){
		$scope.status = '';
		$http.get('http://localhost:8080/reset/days')
			.success(function(data,status,headers,config){
				$scope.days = data;
				console.log(data);
			})
			.error(function(data,status,headers,config){
				$scope.status = data;
			});

	}
});