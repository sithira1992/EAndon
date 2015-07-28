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
                    $http.post('db/ItemDetails.php?action=add_item',{'locId':$scope.locId,'item':$scope.item,'itemunite':$scope.itemunite,
                        'itemunitprice':$scope.itemunitprice,'itemquantity':$scope.itemquantity,'itemdescription':$scope.itemdescription}).success(function(data, status, headers, config) {
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


                $scope.get_items = function() {
                    $http.get('db/ItemDetails.php?action=get_items').success(function(data)
                    {
                        //$scope.product_detail = data;
                        $scope.ItemDetails = data;

                    });
                }



                $scope.update= function (ItemDetail) {    //update button


                    $scope.msgs = [];
                    $http.post('db/ItemDetails.php?action=update_item',{'locId':ItemDetail.locId,'item_name':ItemDetail.item_name,'unit_price':ItemDetail.unit_price,'unit':ItemDetail.unit,
                        'quantity':ItemDetail.quantity,'discripton':ItemDetail.discripton}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {

                            msgs="**Updated Successfully**";
                            msgs="**Updated Successfully**";
                            $scope.messege='Item Updated Successfully';
                            $scope.notify('success');
                            $scope.msgs.push(msgs);
                            $scope.get_items();
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


                $scope.delete= function (ItemDetail) {    //Delete button

                    $scope.msgs = [];
                    $http.post('db/ItemDetails.php?action=delete_item',{'locId':ItemDetail.locId}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Deleted Successfully**"
                            $scope.msgs.push(msgs);
                            $scope.get_items();
                            $scope.messege='Item Deleted Successfully';
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