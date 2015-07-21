/* global angular */
(function(angular, $) {
    angular.module('andonControllers').service('ajaxService', function($http) {
    var self = this; 
        self.get = function (options) {
            options.type = 'get';
            return $.ajax(options);
        };
        self.post = function (options) {
            options.type = 'post';
            return $.ajax(options);
        };
    });
})(angular, jQuery);