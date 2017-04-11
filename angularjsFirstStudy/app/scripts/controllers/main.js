'use strict';

/**
 * @ngdoc function
 * @name studyangularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studyangularjsApp
 */
angular.module('studyangularjsApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  //迭代控制器
  .controller('PhoneListCtrl',function PhoneListCtrl($scope) {
    $scope.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
        date:1
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
        date:2
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
        date:3
      },
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
        date:4
      }
    ];
    $scope.name = "zfl"
})
  //组件 //只能有一个控制器
  .component('applis', {
    template:
    '<ul>' +
    '<li ng-repeat="phone in $ctrl.phones">' +
    '<span>{{phone.name}}</span>' +
    '<p>{{phone.snippet}}</p>' +
    '</li>' +
    '<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
    '<p>hello {{$ctrl.name}}</p>'+
    '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
      this.name='angular';
    }
  })
  .controller('img',function img ($scope){
    $scope.imgs=[
      {
        'id': '0',
        'imageUrl':'images/0.jpg',
      }, {
        'id':'1',
        'imageUrl':'images/1.jpg',
      }, {
        'id':'2',
        'imageUrl':'images/2.jpg',
      }
    ];
  });
