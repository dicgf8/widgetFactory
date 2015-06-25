'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:UserdetailsCtrl
 * @description
 * # UserdetailsCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
	.controller('UserdetailsCtrl', function ($scope, $routeParams, userApi) {
		$scope.user = {};

		userApi.get($routeParams.userId).then(function(results) {
			$scope.user = results.data;
		}, function() {

		});
	});
