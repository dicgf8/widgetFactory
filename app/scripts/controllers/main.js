'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
