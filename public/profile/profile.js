'use strict';

angular.module('profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'public/profile/profile.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', ['$scope', '$http', function ProfileController($scope, $http) {

	$scope.data = [];
 	
	$scope.register = function()
	{     
		$scope.data.push($scope.formData.firstname);
		$scope.data.push($scope.formData.email);
		//alert("profile : " + $scope.data[0] + " / " + $scope.data[1]);
			
	$http.post('/profile', $scope.formData)
            	.success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                alert("Registred: " + $scope.data[0]);
            })

            .error(function(data) {
                alert('Error: ' + data);
            });				

      };

}]);
