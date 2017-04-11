'use strict';

/**
 * @ngdoc function
 * @name studyangularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the studyangularjsApp
 */
angular.module('studyangularjsApp')
  .controller('AboutCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.btn-success').on('click',function () {
      $http.jsonp('https://api.douban.com/v2/book/search' + '?callback=searchBookList&count=10&q='+ $scope.bookname);//jsonp解决跨域
      window.searchBookList = function(data) {                                       //count返回书的个数
        if (data.books.length) {
          $scope.isNoLoaded = false;
        }
        $scope.count=data.count;
        var list = [];
        for (var i = 0; i < data.books.length; i++) {
          var book = data.books[i];
          var item = {
            id: book.id,
            image: book.image,
            origin_title: book.title || '书名未共享',
            author: book.author[0] || '作者未知',
            publisher: book.publisher || '出版社未知',
            price: book.price.split('.')[0] || '未知',
            pages: book.pages
          };
          list.push(item);
        }
        $scope.bookList = list;
      }
    });
  });
