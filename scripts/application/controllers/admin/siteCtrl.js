/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("siteCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

                $scope.submit= function () {    //subite button

                    $scope.msgs = [];
                    $http.post('db/SiteRegistration.php?action=add_site',{'rgAddress':$scope.rgAddress,'rgmanagername':$scope.rgmanagername,'rgstartdate':$scope.rgstartdate,
                        'rgplandate':$scope.rgplandate,'rgpactualdate':$scope.rgpactualdate,'rgstatues':$scope.rgstatues}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Site Register Successfully**"
                            $scope.msgs.push(msgs);
                        }
                        else
                        {
                            msgs="Not Site Register"
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
                        $scope.details = data;

                    });
                }

                $scope.get_sites = function() {
                    $http.get('db/SiteRegistration.php?action=get_site').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.details = data;

                    });
                }



            }]);
})(angular);