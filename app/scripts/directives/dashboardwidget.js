'use strict';

/**
 * @ngdoc directive
 * @name widgetFactoryApp.directive:dashboardWidget
 * @description
 * # dashboardWidget
 */
angular.module('widgetFactoryApp')
	.directive('dashboardWidget', function () {
		return {
			templateUrl: 'views/dashboard-widget.html',
			restrict: 'E',
			scope: { dataset : "="},
			replace: true,
			link: function postLink(scope, element, attrs) {
				scope.text = attrs.text;
			}
		};
	});
