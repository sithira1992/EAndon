/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("itemCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {


                $scope.pagedItems    =  [];

                $scope.get_suppliers = function() {
                    $http.get('db/suppliersRegistration.php?action=get_supplier').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.pagedItems = data;

                    });
                }
                $scope.submit= function () {    //subite button

                    $scope.msgs = [];
                    $http.post('db/ItemDetails.php?action=add_item',{'suppId':$scope.suppId,'item':$scope.item,'itemunite':$scope.itemunite,
                        'itemunitprice':$scope.itemunitprice,'itemquantity':$scope.itemquantity,'itemdescription':$scope.itemdescription,'itemdate':$scope.itemdate}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Item Register Successfully**"
                            $scope.msgs.push(msgs);
                        }
                        else
                        {
                            msgs="**Not Register**"
                            $scope.msgs.push(msgs);
                        }
                    }).error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
                        $scope.msgs.push(status);

                    });
                }
            }]);
})(angular);