/**
 * Created by Administrator on 7/21/2015.
 */
(function (angular) {

    angular.module('andonControllers')



        .controller("supplierCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

                $scope.submit= function () {    // submite button

                    $scope.msgs = [];
                    $scope.supplierDetail={};
                    $http.post('db/suppliersRegistration.php?action=add_supplier',{'suppliername':$scope.suppliername,'supplieraddress':$scope.supplieraddress,'supplierphone':$scope.supplierphone,
                        'supplieremail':$scope.supplieremail,'supplieritem':$scope.supplieritem,'supplierunitprice':$scope.supplierunitprice}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Suppler Register Successfully**"
                            $scope.notify('success');
                            $scope.msgs.push(msgs);

                        }
                        else
                        {
                            msgs="**Not Register**"
                            $scope.notify('error');
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
                        $scope.supplierDetails = data;

                    });
                }



                $scope.update= function (supplierDetail) {    //Update button


                    $scope.msgs = [];
                    $http.post('db/suppliersRegistration.php?action=update_supplier', { 'id':supplierDetail.id,'name':supplierDetail.fullname,'address':supplierDetail.address,'phone':supplierDetail.phone,
                        'email':supplierDetail.email,'supitem':supplierDetail.supitem,'unitprice':supplierDetail.unitprice}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Updated Successfully**";
                            msgs="**Updated Successfully**";
                            $scope.messege='Supplier Updated Successfully';
                            $scope.notify('success');
                            $scope.msgs.push(msgs);
                            $scope.get_suppliers();

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


                $scope.delete= function (supplierDetail) {    //update button
                    alert(supplierDetail.id);
                    $scope.msgs = [];
                    $http.post('db/suppliersRegistration.php?action=delete_supplier',{'id':supplierDetail.id}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Deleted Successfully**"
                            $scope.msgs.push(msgs);
                            $scope.get_suppliers();
                            $scope.messege='Staff Member Deleted Successfully';
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