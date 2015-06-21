'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
