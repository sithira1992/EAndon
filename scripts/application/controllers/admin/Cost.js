(function (angular) {

    angular.module('andonControllers')

//Staff Registration Controller for all
        .controller("CostCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

                $scope.pagedItems = [];
                $scope.messege='lol';

                $scope.get_Cost = function () {
                    $http.get('db/Cost.php?action=get_Cost').success(function (data) {
                        //$scope.product_detail = data;
                        $scope.Costs = data;

                    });
                }
                $scope.titles = ['Cost'];
                $scope.submit = function () {

                    $scope.msgs = [];

                    $http.post('db/Cost.php?action=add_Cost', {
                        'Cost_Name': $scope.costItem, 'Amount': $scope.costAmount
                    }).success(function (data, status, headers, config) {
                        if (data.msg != '') {

                            $scope.messege='Successfully';
                            $scope.notify('success');
                            $scope.msgs.push(data.msg);
                            $scope.get_Cost();

                        }
                        else {

                            $scope.messege='Not Successfully';
                            $scope.notify('error');
                            $scope.msgs.push(data.error);
                        }
                    }).error(function (data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.

                        $scope.messege='Not Successfully';
                        $scope.notify('error');
                    });
                }



                $scope.update= function (StaffDetail) {    //update button


                    $scope.msgs = [];
                    $http.post('db/Cost.php?action=update_Cost',{'id':StaffDetail.id,'name':StaffDetail.fullName,'address':StaffDetail.address,'gender':StaffDetail.gender,
                        'nic':StaffDetail.nic,'phone':StaffDetail.phone,'jobPosition':StaffDetail.jobPosition,'email':StaffDetail.email}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Updated Successfully**";
                            msgs="**Updated Successfully**";
                            $scope.messege='Updated Successfully';
                            $scope.notify('success');
                            $scope.msgs.push(msgs);
                            $scope.get_staff();
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


                $scope.delete= function (StaffDetail) {    //Delete button

                    $scope.msgs = [];
                    $http.post('db/Cost.php?action=delete_staff',{'id':StaffDetail.id}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Deleted Successfully**"
                            $scope.msgs.push(msgs);
                            $scope.get_staff();
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
            }])


    ;
})(angular);/**
 * Created by Mahesh on 7/28/2015.
 */
