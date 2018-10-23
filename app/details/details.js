'use strict';

angular.module('myApp.details', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/details', {
      templateUrl: 'details/details.html',
      controller: 'DetailsCtrl'
    });
  }])

  .controller('DetailsCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.today = true;
    $scope.city = $rootScope.weatherData.location.name;
    $scope.icon = $rootScope.weatherData.current.condition.icon;
    $scope.degree = $rootScope.weatherData.current.temp_c;
    $scope.dateTime = $rootScope.weatherData.location.localtime;
    $scope.conditionText = $rootScope.weatherData.current.condition.text;
    $scope.feelsLike = $rootScope.weatherData.current.feelslike_c;
    $scope.wind = $rootScope.weatherData.current.wind_kph;
    $scope.humidity = $rootScope.weatherData.current.humidity;

    $scope.Today = function () {
      $scope.twodays = false;
      $scope.today = true;
    }

    $scope.TwoDays = function () {
      $scope.twodays = true;
      $scope.today = false;
    }

    $scope.Forecast = function () {
      $location.path("/forecast");
    }

    $scope.days = $rootScope.weatherData.forecast.forecastday;

  }]);