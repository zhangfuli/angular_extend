var myApp = angular.module('myApp' , []);
myApp.controller('controllerA' ,function  ($scope) {
	$scope.days = [] ;
	$scope.status = '';
	$scope.removeDay = function(deleteDay){
		$http.post('/remove/day' , {day:deleteDay})
			.success(function(data,status,headers,config){
				$scope.days = data;
			})
			.error(function(data,status,headers,config){
				$scope.status = data.msg;
			});
	};
	$scope.resetDays = function(){
		$scope.status = '';
		$http.get('/reset/days')
			.success(function(data,status,headers,config){
				$scope.days = data;
			})
			.error(function(data,status,headers,config){
				$scope.status = data;
			});

	}
});