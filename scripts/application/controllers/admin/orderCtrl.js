/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("orderCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {
                $scope.sortType     = 'name'; // set the default sort type
                $scope.sortReverse  = false;  // set the default sort order
                $scope.searchItem   = '';     // set the default search/filter term
                $scope.totalDisplayed=5;      // Total to display in data  table
                $scope.load='Load More';       //Button title


                $scope.pagedItems    =  [];
                $scope.messege='lol';


                 /*
                   To load data more
                 */

                $scope.loadMore = function () {

                    if($scope.totalDisplayed >= $scope.details.length) {
                        $scope.totalDisplayed =$scope.totalDisplayed - 5;
                        $scope.load='Minimize';

                    }
                    else{

                        $scope.load='Load More';
                        $scope.totalDisplayed += 5;
                    }
                };
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
                $scope.submit= function () {    //submit button


                    $scope.msgs = [];
                    $http.post('db/RequestForm.php?action=add_request',{'locId':$scope.locId,'mngId':$scope.mngId,'item':$scope.item,
                        'measure':$scope.measure,'quantity':$scope.quantity,'date':$scope.date,'to':$scope.toId}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {


                            msgs="**Order Create Successfully**"
                            $scope.get_Order_details();
                            $scope.messege='Order Send to Qs To Approve ';
                            $scope.notify('success');
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

                            if(data.length>0) {
                                $scope.messege = 'You Receive '+data.length+ ' Order Request to Approve';
                                $scope.notify('success');
                            }

                    }
                    );
                }








                $scope.notify=function(style)
                {

                    $.notify({
                        title: 'Submission Status',
                        text: $scope.messege,
                        image: "<img src='./images/select.png'/>"
                    }, {
                        style: 'metro',
                        className: style,
                        autoHide: true,
                        clickToHide: true
                    });
                }
            }]);
})(angular);