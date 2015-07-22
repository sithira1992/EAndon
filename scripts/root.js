(function(angular) {
    angular.module('myApp').controller("RootController", ['$scope', '$http', '$routeParams', '$filter', '$location','$timeout',
        function($scope, $http, $routeParams, $filter, $location,$timeout) {

            //$scope.search = "Search Valueas";





            $scope.clock = "loading clock..."; // initialise the time variable
            $scope.tickInterval = 1000; //ms

            var tick = function() {
                $scope.clock = Date.now(); // get the current time
                $timeout(tick, $scope.tickInterval); // reset the timer
            };
            // Start the timer
            $timeout(tick, $scope.tickInterval);

        }


    ])




    .controller('refresh_control',function($scope,$interval){
        var c=0;
        $scope.message="This DIV is refreshed "+c+" time.";
        var timer=$interval(function(){
            $scope.message="This DIV is refreshed "+c+" time.";
            c++;

        },1000);


    });
})(angular);
