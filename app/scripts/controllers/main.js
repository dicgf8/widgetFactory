'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
	.controller('MainCtrl', function ($scope, userApi, widgetApi) {
		$scope.users = [];
		$scope.widgets = [];

		userApi.all().then(function(results) {
			$scope.users = results.data;
		}, function() {

		});

		widgetApi.all().then(function(results) {
			$scope.widgets = results.data;
		}, function() {

		});
	});
