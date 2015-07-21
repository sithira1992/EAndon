/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("orderCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

                $scope.pagedItems    =  [];

                $scope.get_location = function() {
                    $http.get('db/SiteRegistration.php?action=get_location').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.locations = data;

                    });
                }
                $scope.pagedItems    =  [];

                $scope.get_manager = function() {
                    $http.get('db/staffRegistration.php?action=get_manager').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.managers = data;

                    });
                }
                $scope.submit= function () {    //subite button

                    $scope.msgs = [];
                    $http.post('db/RequestForm.php?action=add_request',{'locId':$scope.locId,'mngId':$scope.mngId,'item':$scope.item,
                        'measure':$scope.measure,'quantity':$scope.quantity,'date':$scope.date}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Order Create Successfully**"
                            $scope.get_Order_details();
                            $scope.msgs.push(msgs);
                        }
                        else
                        {
                            msgs="**Order Not Create Successfully**"
                            $scope.msgs.push(msgs);
                        }
                    }).error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
                        $scope.msgs.push(status);

                    });
                }

                $scope.get_Order_details = function() {
                    $http.get('db/RequestForm.php?action=get_OrderDetails').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.details = data;

                    });
                }

            }]);
})(angular);