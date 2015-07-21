(function(angular) {



    angular.module('andonControllers').directive('map', function() {
        return {
            restrict: 'EAC',
            link: function(scope, element, attrs) {
                scope.$watch("mapdata" , function(n,o){
                    $(element).vectorMap({
                        backgroundColor: 'transparent',
                        regionStyle: {
                            initial: {
                                fill: '#e4e4e4',
                                "fill-opacity": 1,
                                stroke: 'none',
                                "stroke-width": 0,
                                "stroke-opacity": 1
                            }
                        },
                        series: {
                            regions: [{
                                values: scope.mapdata,
                                scale: ['#C8EEFF', '#0071A4'],
                                normalizeFunction: 'polynomial'
                            }]
                        },onRegionClick: function(event, code){
                          //alert(code);
                            var map = $(element).vectorMap('get', 'mapObject');
                            var name = map.getRegionName(code);
                            scope.Visitors =name +" "+code;
                        }
                    });
                });
            }
        };
    });

})(angular);


