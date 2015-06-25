'use strict';

/**
 * @ngdoc directive
 * @name widgetFactoryApp.directive:userTable
 * @description
 * # userTable
 */
angular.module('widgetFactoryApp')
	.directive('userTable', function () {
		return {
			templateUrl: 'views/user-table.html',
			restrict: 'E',
			scope: {
				dataset : "=",
				options : "="
			},
			replace: true,
			link: function postLink(scope, element, attrs) {
				scope.title = attrs.title;
			}
		};
	});
