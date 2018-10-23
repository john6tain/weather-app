'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$http', '$scope', '$rootScope', 'FORECAST_URL', 'HISTORY_URL', '$location', '$window',
    function ($http, $scope, $rootScope, FORECAST_URL, HISTORY_URL, $location, $window) {
      $scope.lastSearches = JSON.parse($window.localStorage.getItem('lastSearches'));
      $scope.Search = function (city) {
        $http({
          method: 'Get',
          url: FORECAST_URL + city + '&days=2'
        }).then(function successCallback(response) {

          var weatherData = response.data;
          
          $http({
            method: 'Get',
            url: HISTORY_URL + city + '&dt=' + response.data.forecast.forecastday[0].date,
          }).then(function successCallback(response) {
            weatherData.forecast = response.data.forecast;
          }, function errorCallback(error) {
            $rootScope.error = error;
            $location.path("/error");
          });

          $http({
            method: 'Get',
            url: HISTORY_URL + city + '&dt=' + response.data.forecast.forecastday[1].date,
          }).then(function successCallback(response) {
            weatherData.forecast.forecastday.push(response.data.forecast.forecastday[0]);
            $rootScope.weatherData = weatherData;

            if ($window.localStorage.hasOwnProperty('lastSearches')) {
              var lastSearches = JSON.parse($window.localStorage.getItem('lastSearches'));
              lastSearches.push($rootScope.weatherData);
              lastSearches.splice(0, lastSearches.length - 5);
              $window.localStorage.setItem('lastSearches', JSON.stringify(lastSearches));
              $scope.lastSearches = lastSearches;
            } else {
              $window.localStorage.setItem('lastSearches', JSON.stringify([$rootScope.weatherData]));
            }

            $location.path("/details");
          }, function errorCallback(error) {
            $rootScope.error = error;
            $location.path("/error");
          });
        }, function errorCallback(error) {
          $rootScope.error = error;
          $location.path("/error");
        });
      }
      $scope.Find = function (search) {
        $rootScope.weatherData = search;
        $location.path("/details");
      }
    }]);