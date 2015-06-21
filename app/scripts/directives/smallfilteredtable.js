'use strict';

/**
 * @ngdoc directive
 * @name widgetFactoryApp.directive:smallFilteredTable
 * @description
 * # smallFilteredTable
 */
angular.module('widgetFactoryApp')
	.directive('smallFilteredTable', function () {
		return {
			templateUrl: 'views/small-filtered-table.html',
			restrict: 'E',
			scope: { dataset : "="},
			replace: true,
			link: function postLink(scope, element, attrs) {
				scope.title = attrs.title;
			}
		};
	});
