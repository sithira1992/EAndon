'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService','$window','$cookieStore',
    function ($scope, $rootScope, $location, AuthenticationService,$window,$cookieStore) {
        // reset login status

            AuthenticationService.ClearCredentials();

 var c=-1;
        var i=0;


        $scope.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };


        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {





                   $window.location.href = "http://localhost:63342/EAndon/index.html"



                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);