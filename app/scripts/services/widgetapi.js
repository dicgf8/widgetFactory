'use strict';

/**
 * @ngdoc service
 * @name widgetFactoryApp.widgetApi
 * @description
 * # widgetApi
 * Service in the widgetFactoryApp.
 */
angular.module('widgetFactoryApp')
	.constant('WIDGET_API', 'http://spa.tglrw.com:4000/widgets/')
	.service('widgetApi', function ($http, WIDGET_API) {
		var service = this;

		service.all = function() {
			return $http.get(WIDGET_API);
		};

		service.read = function(widgetId) {
			return $http.get(WIDGET_API + widgetId);
		};

		service.create = function() {
			return $http.post(WIDGET_API);
		};

		service.update = function(widgetId) {
			return $http.put(WIDGET_API + widgetId)
		};
	});
