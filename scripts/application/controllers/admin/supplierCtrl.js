/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("supplierCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

                $scope.submit= function () {    //subite button

                    $scope.msgs = [];
                    $http.post('db/suppliersRegistration.php?action=add_supplier',{'suppliername':$scope.suppliername,'supplieraddress':$scope.supplieraddress,'supplierphone':$scope.supplierphone,
                        'supplieremail':$scope.supplieremail,'supplieritem':$scope.supplieritem,'supplierunitprice':$scope.supplierunitprice,'supplierstatues':$scope.supplierstatues}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Suppler Register Successfully**"
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
                $scope.get_suppliers = function() {
                    $http.get('db/suppliersRegistration.php?action=get_suppliers').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.pagedItems = data;

                    });
                }


            }]);
})(angular);