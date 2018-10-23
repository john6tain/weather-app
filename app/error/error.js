'use strict';

angular.module('myApp.error', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'error/error.html',
    controller: 'ErrorCtrl'
  });
}])

.controller('ErrorCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.status = $rootScope.error.status;
  $scope.statusText = $rootScope.error.statusText;
  $scope.message = $rootScope.error.data.error.message;
}]);