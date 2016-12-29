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
	$scope.counter = 0 ;

	//$watch 监视
	$scope.$watch('name' , function (newValue , oldValue) {
		$scope.counter ++;
	console.log('oldvalue :'+oldValue + '\n'+'newValue: ' + newValue + '\n');
	});
});
//把myModule模块传入myApp
// var myApp = angular.module('myApp' , ['myModule']);


//实现$emit() 和 $boroadcast()事件
myModule.controller('controllerB',function ($scope) {
	$scope.names = ['Frodo' , 'Aragon' , 'Legolas' , 'Gimli'];
	$scope.currentName = $scope.names[0];
	$scope.changeName = function () {
		$scope.currentName = this.name ;
		//广播可以向子作用域传递
		$scope.$broadcast('CharacterChanged' ,this.name); //this.name是要传的参数
	};
	$scope.$on('CharacterDeleted' , function (event ,removeName) {
		var i = $scope.names.indexOf(removeName);
		$scope.names.splice(i,1);
		$scope.currentName = $scope.names[0];
		$scope.$broadcast('CharacterChanged' ,$scope.currentName);
	});
});
myModule.controller('controllerC' , function ($scope) {
	$scope.info = {'Frodo' : {weapon : 'Sting' ,race : 'Hobbit'},
					'Aragon' : {weapon : 'Sword' , race : 'Man'},
					'Legolas' : {weapon : 'Bow' ,race : 'Elf'},
					'Gimli' : {weapon : 'Axe' ,race : 'Dwarf'}};
	$scope.currentInfo = $scope.info['Frodo'];
	$scope.$on('CharacterChanged' , function (event , newCharacter) {
		console.log(newCharacter);
		$scope.currentInfo = $scope.info[newCharacter];
	});
	$scope.deleteChar = function () {
		delete $scope.info[$scope.currentName];
		//发射函数
		$scope.$emit('CharacterDeleted' , $scope.currentName);
	}
});
//排序和过滤
myModule.controller('controllerD' , function ($scope,filterFilter) {
	$scope.cameras = [{make : 'Canon' , model:'70D' ,mp:20.2},
						{make : 'Canon' , model:'6D' ,mp:20},
						{make : 'Nikon' , model:'D7100' ,mp:24.1},
		{make : 'Nikon' , model:'D5200' ,mp:24.1}];
	$scope.filteredCameras = $scope.cameras;
	$scope.reverse = true;
	$scope.column = 'make';
	$scope.setSort = function (column) {
		$scope.column = column;
		$scope.reverse = !$scope.reverse;
	};
	$scope.filterString = '';
	$scope.setFilter = function () {
		$scope.filteredCameras = filterFilter($scope.cameras, $scope.filterString);
	}
});

//自定义过滤器
myModule.filter('censor' , function () {
	return function (input,replacement) {
		var cWords = ['bad','evil','dark'];
		var out = input ;
		for(var i = 0; i<cWords.length;i++){
			out = out.replace(cWords[i] ,replacement);
		}
		return out;
	}
});
myModule.controller('controllerE',function ($scope,censorFilter) {
	$scope.phrase = "This is a bad phrase.";
	$scope.txt = "Click to filter out dark and evil.";
	$scope.filterText = function () {
		$scope.txt = censorFilter($scope.txt ,'<<censored>>')
	}
});

//彼此互交的自定义指令
myModule.directive('myPhotos',function () {
	return {
		restrict: 'E',  //限制指令行为    A为一个属性名 E为一个元素名  C为一个类名
		// replace : true , //可以作为子模板来添加
		transclude : true ,//指令内部的组件可以访问指令以外的作用域
		scope : {} , //配置指令的作用域
		controller : function ($scope) {
			var photos = $scope.photos = [];
			$scope.select = function (photo) {
				angular.forEach(photos , function (photo) {
					photo.selected = false;
				});
				photo.selected = true;
			};
			this.addPhoto = function (photo) {
				photos.push =(photo);
			}
		},
		templateUrl : './my_photos.html'
	}
});
myModule.directive('myPhoto', function () {
	return {
		require : '^myPhotos' ,
		restrict : 'E' ,
		transclude : true ,
		scope : { title : '@'} ,
		link : function (scope ,elem ,attrs , photosControl) {
			photosControl.addPhoto(scope);
		},
		template : '<div ng-show="selected" ng-transclude></div>'
	};
});
