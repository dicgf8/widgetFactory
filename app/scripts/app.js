'use strict';

/**
 * @ngdoc overview
 * @name widgetFactoryApp
 * @description
 * # widgetFactoryApp
 *
 * Main module of the application.
 */
angular
	.module('widgetFactoryApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				name: 'Dashboard',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/users', {
				name: 'Users',
				templateUrl: 'views/users.html',
				controller: 'UsersCtrl'
			})
			.when('/widgets', {
				name: 'Widgets',
				templateUrl: 'views/widgets.html',
				controller: 'WidgetsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}).run([ '$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeStart', function (event, next) {
			$rootScope.currentRoute = next;
		});
	}]).filter("boolToYesNo", function(){
		return function(bool) {
			return bool ? "yes" : "no";
		}
	});
