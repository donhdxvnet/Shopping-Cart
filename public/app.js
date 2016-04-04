'use strict';


angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout',
    'profile'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);
