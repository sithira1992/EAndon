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
                    $scope.pagedItems = data;

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