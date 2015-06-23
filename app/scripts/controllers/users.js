'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
	.controller('UsersCtrl', function ($scope, userApi) {
		$scope.users = [];

		$scope.tableOptions = [
			{
				key : "id",
				columnClass : "text-center"
			},
			{
				key : "name"
			},
			{
				column : "avatar",
				key : "gravatar"
			}
		];

		userApi.all().then(function(results) {
			$scope.users = results.data;
		}, function() {

		});
	});
