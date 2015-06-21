'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
