var myApp = angular.module('myApp' , []);
myApp.config(function($httpProvider){
	$httpProvider.defaults.withCredentials = true;
});
myApp.controller('controllerA' ,function  ($scope,$http) {
	$scope.days = [] ;
	$scope.status = '';
	$scope.removeDay = function(deleteDay){
		$http.get('http://localhost:8080/remove/day?deleteDay =' + deleteDay);
			
	};
	$scope.resetDays = function(){
		$scope.status = '';
		$http.get('http://localhost:8080/reset/days')
			.success(function(data,status,headers,config){
				$scope.days = data;
			})
			.error(function(data,status,headers,config){
				$scope.status = data;
			});

	}
});
//$cacheFactory服务提供了暂时储存数据的键/值对。  实现了值在不同控制器之间的通信
myApp.factory('myCache' , function($cacheFactory){
	return $cacheFactory('myCache' , {capacity : 5});
	//限制在缓存中行的最大数量是5
});
myApp.controller('controllerB' , function ($scope,myCache){
	myCache.put('myValue' , 55);
	$scope.value = myCache.get('myValue');
});
myApp.controller('controllerC' , function ($scope,myCache){
	$scope.value = myCache.get('myValue');
});

//$window服务实现浏览器警报
myApp.controller('controllerD' , function ($scope, $window){
	window.alert("Your Screen is : \n (" + window.screen.availWidth + "X," 
				+ window.screen.availHeight + "Y)");
});