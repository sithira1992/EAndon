(function (angular) {

    angular.module('andonControllers')


        .controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService','$window',
    function ($scope, $rootScope, $location, AuthenticationService,$window) {
        // reset login status
    //    AuthenticationService.ClearCredentials();



        $scope.al=function(){

            alert('lol');
        }
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $window.location.href="http://localhost:63342/EAndon/index.html"
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);

})(angular);