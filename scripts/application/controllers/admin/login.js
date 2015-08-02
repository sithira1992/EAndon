(function (angular) {

    angular.module('andonControllers')

//Staff Registration Controller for all
        .controller("LoginController", ['$scope', '$http','$routeParams',  '$filter', '$location','$rootScope','$cookieStore',
            function ($scope, $http,$routeParams,$filter,$location,$rootScope,$cookieStore) {
                $rootScope.showSideBar=false;

                var vm = this;
                $scope.msgs = [];


                $scope.login=function(vm)
                {
                    vm.dataLoading = true;


                    $scope.authentication(vm.username, vm.password, function (response)
                    {
                       if (response.success) {
                            //  AuthenticationService.SetCredentials(vm.username, vm.password);
                            $location.path('dashboard');
                        } else {
                           $scope.msgss='Username or password is incorrect'
                           $scope.msgs.push($scope.msgss);
                            $scope.Error(response.message);
                            vm.dataLoading = false;
                        }
                    });

                }



                $scope.authentication=function(username, password, callback)
                {

                    /* Dummy authentication for testing, uses $timeout to simulate api call
                     ----------------------------------------------*/

                    /* Use this for real authentication
                     ----------------------------------------------*/
                    $http.post('db/login.php?action=check_Credential', { username: username, password: password })
                        .success(function (response) {
                            if(response!=0) {


                                var name=response[0].fullName;
                                var position=response[0].jobPosition
                                var id=response[0].id

                                response = { success: true };
                                $scope.SetCredentials(name,position,id);
                                callback(response);



                            }
                            else
                            {

                                response = { success: false, message: 'Username or password is incorrect' };

                            }
                            callback(response);
                        });

                }

                $scope.SetCredentials=function(name,position,id){

                  var authdata = Base64.encode(name + ':' + id);
                    $rootScope.u=name;
                    $rootScope.globals = {
                        currentUser: {
                            username: name,
                            position:position,
                            id:id

                        }
                    };

                  $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                  $cookieStore.put('globals', $rootScope.globals);
                }


                $scope.ClearCredentials=function()
                 {

                    $rootScope.globals = {};

                    $cookieStore.remove('globals');

                    $http.defaults.headers.common.Authorization = 'Basic ';

                }
                $scope.Error=function(message, keepAfterLocationChange)
                {
                    $rootScope.flash = {
                        message: message,
                        type: 'error',
                        keepAfterLocationChange: keepAfterLocationChange
                    };
                }
            }])

                var Base64 = {

                    keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

                    encode: function (input) {
                        var output = "";
                        var chr1, chr2, chr3 = "";
                        var enc1, enc2, enc3, enc4 = "";
                        var i = 0;

                        do {
                            chr1 = input.charCodeAt(i++);
                            chr2 = input.charCodeAt(i++);
                            chr3 = input.charCodeAt(i++);

                            enc1 = chr1 >> 2;
                            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                            enc4 = chr3 & 63;

                            if (isNaN(chr2)) {
                                enc3 = enc4 = 64;
                            } else if (isNaN(chr3)) {
                                enc4 = 64;
                            }

                            output = output +
                            this.keyStr.charAt(enc1) +
                            this.keyStr.charAt(enc2) +
                            this.keyStr.charAt(enc3) +
                            this.keyStr.charAt(enc4);
                            chr1 = chr2 = chr3 = "";
                            enc1 = enc2 = enc3 = enc4 = "";
                        } while (i < input.length);

                        return output;
                    },

                    decode: function (input) {
                        var output = "";
                        var chr1, chr2, chr3 = "";
                        var enc1, enc2, enc3, enc4 = "";
                        var i = 0;

                        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                        var base64test = /[^A-Za-z0-9\+\/\=]/g;
                        if (base64test.exec(input)) {
                            window.alert("There were invalid base64 characters in the input text.\n" +
                            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                            "Expect errors in decoding.");
                        }
                        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                        do {
                            enc1 = this.keyStr.indexOf(input.charAt(i++));
                            enc2 = this.keyStr.indexOf(input.charAt(i++));
                            enc3 = this.keyStr.indexOf(input.charAt(i++));
                            enc4 = this.keyStr.indexOf(input.charAt(i++));

                            chr1 = (enc1 << 2) | (enc2 >> 4);
                            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                            chr3 = ((enc3 & 3) << 6) | enc4;

                            output = output + String.fromCharCode(chr1);

                            if (enc3 != 64) {
                                output = output + String.fromCharCode(chr2);
                            }
                            if (enc4 != 64) {
                                output = output + String.fromCharCode(chr3);
                            }

                            chr1 = chr2 = chr3 = "";
                            enc1 = enc2 = enc3 = enc4 = "";

                        } while (i < input.length);

                        return output;
                    }
                };




    ;
})(angular);/**
 * Created by Mahesh on 7/28/2015.
 */
