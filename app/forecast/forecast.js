'use strict';

angular.module('myApp.forecast', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/forecast', {
      templateUrl: 'forecast/forecast.html',
      controller: 'ForecastCtrl'
    });
  }])

  .controller('ForecastCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.city = $rootScope.weatherData.location.name;
    $scope.days = $rootScope.weatherData.forecast.forecastday;

  }]);