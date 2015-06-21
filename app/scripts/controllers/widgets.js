'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:WidgetsCtrl
 * @description
 * # WidgetsCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
  .controller('WidgetsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
