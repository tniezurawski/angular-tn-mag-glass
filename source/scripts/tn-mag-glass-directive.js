'use strict';

angular.module('tn-mag-glass', [])
    .directive('tnMagGlass', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/tn-mag-glass.tpl.html'
        };
    });