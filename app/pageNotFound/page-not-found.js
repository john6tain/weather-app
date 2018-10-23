'use strict';

angular.module('myApp.page-not-found', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pagenotfound', {
    templateUrl: 'pageNotFound/pnf.html',
    controller: 'PageNotFound'
  });
}])

.controller('PageNotFound', [function() {

}]);