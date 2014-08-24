'use strict';

angular.module('tn-mag-glass', [])
    .directive('tnMagGlass', ['$document', function ($document) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                insideSrc: '@insideSrc',
                outsideSrc: '@outsideSrc',
                objWidth: '@objWidth',
                objHeight: '@objHeight'
            },
            templateUrl: 'templates/tn-mag-glass.tpl.html',
            link: function (scope, element, attrs) {
                // constants
                var BORDER = 5,
                    LOUPE_WIDTH = 198,
                    LOUPE_HEIGHT = 198;

                // calculation
                var width = parseInt(attrs.objWidth, 10),
                    height = parseInt(attrs.objHeight, 10),
                    offsetTop = element[0].offsetTop,
                    offsetLeft = element[0].offsetLeft,
                    offsetBottom = offsetTop + height,
                    offsetRight = offsetLeft + width;

                // DOM elements
                var loupe = element.find('tn-mag-glass-inside-loupe'),
                    insideEl = element.find('tn-mag-glass-inside');

                // setup background for inside element
                insideEl.css({
                    backgroundImage: 'url(images/' + attrs.insideSrc + ')'
                });

                $document.on('mousemove', function (ev) {
                    var x = ev.pageX,
                        y = ev.pageY;

                    // check if user's cursor move is inside tn-mag-glass
                    if (offsetTop <= y && offsetBottom >= y && offsetLeft <= x && offsetRight >= x) {

                        // change loupe position
                        loupe.css({
                            top: (y - offsetTop - LOUPE_WIDTH / 2) + 'px',
                            left: (x - offsetLeft - LOUPE_HEIGHT / 2) + 'px'
                        });

                        // change background position - show what's inside
                        insideEl.css({
                            backgroundPosition: (-(x - offsetLeft) - BORDER + LOUPE_WIDTH / 2) + 'px ' + (-(y - offsetTop + BORDER - LOUPE_HEIGHT / 2)) + 'px'
                        });
                    }
                });
            }
        };
    }]);