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



    .controller('refresh_control',function($scope,$interval ,$http){
        var c=0;

            $scope.messeges='lol';
        $scope.message="This DIV is refreshed "+c+" time.";
        var timer=$interval(function(){
            $scope.message="This DIV is refreshed "+c+" time.";
            c++;

            $http.get('db/RequestForm.php?action=get_OrderDetails_request').success(function(data)
                {



                    //$scope.product_detail = data;
                    $scope.detailsa = data;

                    if(data.length>0) {

                        $scope.messeges = 'You Receive '+data.length+ ' Order Request to Approve';
                        $scope.notify('success');
                    }

                }
            );

        },10000);

            $scope.killtimer=function(){
                if(angular.isDefined(timer))
                {
                    $interval.cancel(timer);
                    timer=undefined;
                    $scope.message="Timer is killed :-(";
                }
            };

            $scope.notify=function(style)
            {

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
    });


})(angular);
