/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("orderCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

                $scope.pagedItems    =  [];
                $scope.messege='lol';
                $scope.get_location = function() {
                    $http.get('db/SiteRegistration.php?action=get_location').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.locations = data;
                        $scope.get_items();

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

                $scope.get_items = function() {
                    $http.get('db/ItemDetails.php?action=get_items').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.ItemDetails = data;


                    });
                }
                $scope.submit= function () {    //subite button


                    $scope.msgs = [];
                    $http.post('db/RequestForm.php?action=add_request',{'locId':$scope.locId,'mngId':$scope.mngId,'item':$scope.item,
                        'measure':$scope.measure,'quantity':$scope.quantity,'date':$scope.date,'to':$scope.toId}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {

                            $scope.get_OrderDetails_request();
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
                $scope.get_OrderDetails_request = function() {
                    $http.get('db/RequestForm.php?action=get_OrderDetails_request').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.detailsa = data;

                        $scope.messege='You Receive Order Request to Approve';
                        $scope.notify('success');

                    });
                }


                $scope.notify=function(style)
                {

                    $.notify({
                        title: 'Submission Status',
                        text: $scope.messege,
                        image: "<img src='./images/Mail.png'/>"
                    }, {
                        style: 'metro',
                        className: style,
                        autoHide: true,
                        clickToHide: true
                    });
                }
            }]);
})(angular);