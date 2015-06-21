'use strict';

/**
 * @ngdoc service
 * @name widgetFactoryApp.userApi
 * @description
 * # userApi
 * Service in the widgetFactoryApp.
 */
angular.module('widgetFactoryApp')
	.constant('USER_API', 'http://spa.tglrw.com:4000/users/')
	.service('userApi', function ($http, USER_API) {
		var service = this;

		service.all = function() {
			return $http.get(USER_API);
		};

		service.get = function(userId) {
			return $http.get(USER_API + userId);
		};
	});
