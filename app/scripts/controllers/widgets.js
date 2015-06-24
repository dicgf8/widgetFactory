'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:WidgetsCtrl
 * @description
 * # WidgetsCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
	.controller('WidgetsCtrl', function ($scope, widgetApi) {
		$scope.widgets = [];
		$scope.showForm = false;
		$scope.form = {};

		$scope.fetchAll = function() {
			widgetApi.all().then(function (results) {
				$scope.widgets = results.data;
			}, function () {

			});
		};

		$scope.fetchAll();

		$scope.showFormToggle = function() {
			$scope.showForm = $scope.showForm ? false : true;
		};

		$scope.createWidget = function() {
			widgetApi.create($scope.form)
				.then(function () {
					$scope.showForm = false;
					$scope.form = {};
					$scope.fetchAll();
				}, function() {

				});
		};
	});
