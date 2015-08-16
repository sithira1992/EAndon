(function(angular) {
    angular.module('myApp').controller("RootController", ['$scope', '$http', '$routeParams', '$filter', '$location','$timeout','$element','$rootScope','$window',
        function($scope, $http, $routeParams, $filter, $location,$timeout,$element,$rootScope) {

            //$scope.search = "Search Valueas";



            $scope.userId=10;
            $rootScope.showSideBar=true;


            $scope.clock = "loading clock..."; // initialise the time variable
            $scope.tickInterval = 1; //ms

            var tick = function() {
                $scope.clock = Date.now(); // get the current time
                $timeout(tick, $scope.tickInterval); // reset the timer
            };
            // Start the timer
            $timeout(tick, $scope.tickInterval);

        }


    ])



 .controller('refresh_control',function($scope,$interval ,$http,$rootScope,$cookieStore,$window) {

            var c = 0;
            $rootScope.globals = $cookieStore.get('globals') || {};


            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line


                $scope.messeges = 'lol';
                $scope.message = "This DIV is refreshed " + c + " time.";
                if ($rootScope.globals.currentUser.id > 0) {
                    var timer = $interval(function () {
                        $scope.message = "This DIV is refreshed " + c + " time.";
                        c++;
                        $scope.id = 12;

                        $http.post('db/RequestForm.php?action=get_OrderDetails_request', {
                            'id': $rootScope.globals.currentUser.id

                        }).success(function (data, status, headers, config) {
                                //$scope.product_detail = data;
                                $scope.detailsa = data;

                                if (data.length > 0) {

                                    $scope.messeges = 'You Receive ' + data.length + ' Order Request to Approve <a href="#/OrderApproval">link</a>';
                                    $scope.notify('info');
                                }

                            }

                        );

                    }, 5000);
                }
                $scope.killtimer = function () {


                    if (angular.isDefined(timer)) {
                        $interval.cancel(timer);
                        timer = undefined;
                        $scope.message = "Timer is killed :-(";
                        $window.location.href = " http://localhost:63342/EAndon/log.html#/login";
                    }
                    $window.location.href = " http://localhost:63342/EAndon/log.html#/login";
                };

                $scope.notify = function (style) {

                    $.notify({
                        title: 'Submission Status',
                        text: $scope.messeges,
                        image: "<img src='./images/Mail.png'/>"

                    }, {
                        style: 'metro',
                        className: style,
                        autoHide: true,
                        clickToHide: true
                    });

                }
            }
    });


})(angular);
