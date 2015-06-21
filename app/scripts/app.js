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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/widgets', {
        templateUrl: 'views/widgets.html',
        controller: 'WidgetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
