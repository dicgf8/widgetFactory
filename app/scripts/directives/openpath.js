'use strict';

/**
 * @ngdoc directive
 * @name widgetFactoryApp.directive:openPath
 * @description
 * # openPath
 */
angular.module('widgetFactoryApp')
	.directive('openPath', function ($location) {
		return {
			restrict: 'A',
			scope: {
				path: "@path"
			},
			link: function postLink(scope, element) {
				element.on("click", function() {
					scope.$apply(function() {
						$location.path(scope.path);
					});
				});
			}
		};
	});
