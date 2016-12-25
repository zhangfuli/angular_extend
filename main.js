var myModule = angular.module('myModule' , []);
//config实现配置块
myModule.config(function  ($provide , $filterProvider) {
	$provide.value('startTime' , new Date());
	$filterProvider.register('myFilter' , function(){});
});
//根作用域
myModule.run(function($rootScope){
	$rootScope.rootValue = 5;
});
myModule.value('modMsg' , 'Hello from My Module');
myModule.controller('controllerA' ,function($scope,modMsg,$rootScope){
	$scope.msg = modMsg;
	$scope.value = $rootScope.rootValue;
	$scope.watchedItem = 'myItem';
	$scope.counter = 0 ;
	//$watch 监视
	$scope.$watch('name' , function (newValue , oldValue) {
		$scope.watchedItem = $scope.counter ++;
	})
});
//把myModule模块传入myApp
// var myApp = angular.module('myApp' , ['myModule']);
