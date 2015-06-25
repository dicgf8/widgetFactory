'use strict';

/**
 * @ngdoc function
 * @name widgetFactoryApp.controller:WidgetdetailsCtrl
 * @description
 * # WidgetdetailsCtrl
 * Controller of the widgetFactoryApp
 */
angular.module('widgetFactoryApp')
	.controller('WidgetdetailsCtrl', function ($scope, $routeParams, widgetApi) {
		$scope.widget = {};
		$scope.form = {};

		$scope.editing = false;

		$scope.showForm = function() {
			angular.copy($scope.widget, $scope.form);
			$scope.editing = true;
		};

		$scope.hideForm = function() {
			$scope.editing = false;
			angular.copy($scope.widget, $scope.form);
		};

		$scope.updateWidget = function() {
			widgetApi.update($scope.form.id, $scope.form)
				.then(function () {
					angular.copy($scope.form, $scope.widget);
					$scope.hideForm();
				}, function() {

				});
		};

		widgetApi.get($routeParams.widgetId).then(function (results) {
			results.data.price = parseInt(results.data.price);
			$scope.widget = results.data;
		}, function () {

		});
	});
