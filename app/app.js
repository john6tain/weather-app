'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'angular-loading-bar',
  'ngRoute',
  'myApp.home',
  'myApp.details',
  'myApp.forecast',
  'myApp.page-not-found',
  'myApp.error'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pagenotfound'});
}])
.constant('FORECAST_URL', 'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=')
.constant('HISTORY_URL', 'http://api.apixu.com/v1/history.json?key=29d83fa2298a47d29bb121845161212&q=');
