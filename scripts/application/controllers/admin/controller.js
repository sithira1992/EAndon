(function (angular) {

    angular.module('andonControllers')

//Staff Registration Controller
        .controller("StaffCtrl", ['$scope', '$http','$routeParams',  '$filter', '$location',
            function ($scope, $http,$routeParams,$filter,$location) {

            $scope.pagedItems = [];
                $scope.messege='lol';

            $scope.get_staff = function () {
                $http.get('db/staffRegistration.php?action=get_staff').success(function (data) {
                    //$scope.product_detail = data;
                    $scope.StaffDetails = data;

                });
            }
            $scope.titles = ['Staff Registration'];
            $scope.submit = function () {

                $scope.msgs = [];

                $http.post('db/staffRegistration.php?action=add_staff', {
                    'name': $scope.name, 'address': $scope.address, 'gender': $scope.gender,
                    'nic': $scope.nic, 'phone': $scope.phone, 'position': $scope.position, 'email': $scope.email
                }).success(function (data, status, headers, config) {
                    if (data.msg != '') {

                        $scope.messege='Staff Member Registration Successfully';
                        $scope.notify('success');
                        $scope.msgs.push(data.msg);

                    }
                    else {

                        $scope.messege='Staff Member Registration Not Successfully';
                        $scope.notify('error');
                        $scope.msgs.push(data.error);
                    }
                }).error(function (data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.

                    $scope.messege='Staff Member Registration Not Successfully';
                    $scope.notify('error');
                });
            }



                $scope.update= function () {    //update button

                    $scope.msgs = [];
                    $http.post('db/staffRegistration.php?action=update_staff',{'StaffDetail.fullname':$scope.StaffDetail.fullname,'StaffDetail.address':$scope.StaffDetail.address,'StaffDetail.gender':$scope.StaffDetail.gender,
                        'StaffDetail.nic':$scope.StaffDetail.nic,'StaffDetail.phone':$scope.StaffDetail.phone,'StaffDetail.jobPosition':$scope.StaffDetail.jobPosition,'StaffDetail.email':$scope.StaffDetail.email}).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            msgs="**Updated Successfully**"
                            $scope.msgs.push(msgs);
                            $scope.siteDetails = data;
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


                $scope.notify=function(style)
            {

                 $.notify({
             title: 'Submission Status',
             text: $scope.messege,
             image: "<img src='./images/unsuccess.png'/>"
          }, {
                      style: 'metro',
                      className: style,
                  autoHide: true,
                   clickToHide: true
               });
}
            }])


    ;
})(angular);