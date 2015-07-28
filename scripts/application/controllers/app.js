(function (angular, $) {
    var appRoot = angular.module('myApp', ['andonControllers','ngGrid','ui.autocomplete', 'google-maps'.ns(),'ngRoute', 'ui.router',
         'ui.bootstrap.datetimepicker', 'ui.bootstrap','angular.morris-chart','ngAnimate']);
    appRoot.config([
        '$routeProvider', '$locationProvider', '$stateProvider',
        function ($routeProvider, $locationProvider, $stateProvider) {


            var login = {
                name: "login",
                url: '/login',
                templateUrl: './views/login.html',
                controller: 'LoginController'
            };
            $stateProvider.state(login);
	var dashboard = {
            name: "dashboard",
            url: '/dashboard',
            templateUrl: './views/admin/dashboard.html',
            controller: 'DashboardController'
        };
            $stateProvider.state(dashboard);

            var staff = {
                name: "Register",
                url: '/Register',
                templateUrl: './views/Register.html',
                controller: 'StaffCtrl'
            };
            $stateProvider.state(staff);



            var supplier = {
                name: "Supplier",
                url: '/Supplier',
                templateUrl: './views/SupplierDetails.html',
                controller: 'supplierCtrl'
            };
            $stateProvider.state(supplier);

            var item = {
                name: "Item",
                url: '/Item',
                templateUrl: './views/ItemDetails.html',
                controller: 'itemCtrl'
            };
            $stateProvider.state(item);

            var site = {
                name: "Site",
                url: '/Site',
                templateUrl: './views/SiteRegistration.html',
                controller: 'siteCtrl'
            };
            $stateProvider.state(site);

            var site = {
                name: "Order",
                url: '/Order',
                templateUrl: './views/OrderRequestForm.html',
                controller: 'orderCtrl'
            };
            $stateProvider.state(site);

            var Cost = {
                name: "Cost",
                url: '/Cost',
                templateUrl: './views/Cost.html',
                controller: 'CostCtrl'
            };
            $stateProvider.state(Cost);

            var updateSite = {
                name: "updateSite",
                url: '/updateSite',
                templateUrl: './views/updateSiteDetails.html',
                controller: 'siteCtrl'
            };
            $stateProvider.state(updateSite);

            var updateSupplier = {
                name: "updateSupplier",
                url: '/updateSupplier',
                templateUrl: './views/UpdateSupplierDetails.html',
                controller: 'supplierCtrl'
            };
            $stateProvider.state(updateSupplier);

            var updateRegistration = {
                name: "updateRegistration",
                url: '/updateRegistration',
                templateUrl: './views/UpdateRegister.html',
                controller: 'StaffCtrl'
            };
            $stateProvider.state(updateRegistration);

            var UpdateItemDetails = {
                name: "UpdateItemDetails",
                url: '/UpdateItemDetails',
                templateUrl: './views/UpdateItemDetails.html',
                controller: 'itemCtrl'
            };
            $stateProvider.state(UpdateItemDetails);


        }]).run(['$rootScope', '$state', '$stateParams', 'ajaxService', '$location',
        function($rootScope, $state, $stateParams, ajaxService, $location) {
            $.blockUI.defaults.css.border = '1px solid #CCCCCC';
            $(document).ajaxStart(function() {
                $.blockUI({
                    message: '<h3 style="color:#555555;"><img src="images/ajax-loader.gif" style="margin-right:15px;" />Just a moment.</h3>',
                    overlayCSS: {
                        opacity: 0
                    },
                    fadeIn: 300,
                    baseZ: 9999999,
                    css: {
                        backgroundColor: '#EEEEEE',
                        borderRadius: '4px',
                        width: '15%',
                        minWidth: '300px',
                        left: '40%',
                        padding: '10px 0 15px',
                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
                    }
                });
                
                 timer = setTimeout(function() {
                    if (timer)
                        clearTimeout(timer);
                    $.unblockUI();
                }, 2000);
            });

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
       $state.transitionTo('dashboard');
            
        }]);
})(angular, jQuery);