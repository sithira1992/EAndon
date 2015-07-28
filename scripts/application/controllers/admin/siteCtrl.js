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
                        $scope.siteDetails = data;


                    });
                }



                $scope.update= function (siteDetail) {    //update button

                    $scope.msgs = [];
                    $http.post('db/siteregistration.php?action=update_site',{'SiteID':siteDetail.id,'address':siteDetail.address,'SiteManagerName':siteDetail.SiteManagerName,'StartDate':siteDetail.StartDate,
                        'PlanDate':siteDetail.PlanDate,'ActualDate':siteDetail.ActualDate,'Status':siteDetail.Status}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Updated Successfully**";
                            msgs="**Updated Successfully**";
                            $scope.messege='Site Updated Successfully';
                            $scope.notify('success');
                            $scope.msgs.push(msgs);
                            $scope.get_sites();
                        }
                        else
                        {
                            msgs="Not Update"
                            $scope.msgs.push(msgs);
                        }
                    }).error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
                        $scope.msgs.push(status);

                    });
                }

                $scope.delete= function (siteDetail) {    //update button

                    $scope.msgs = [];
                    $http.post('db/siteregistration.php?action=delete_site',{'id':siteDetail.id}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Deleted Successfully**"
                            $scope.msgs.push(msgs);
                            $scope.get_sites();
                            $scope.messege='Site Details Deleted Successfully';
                            $scope.notify('success');

                        }
                        else
                        {
                            msgs="Not Delete"
                            $scope.msgs.push(msgs);
                        }
                    }).error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
                        $scope.msgs.push(status);

                    });
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