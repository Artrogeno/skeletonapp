(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    // NG TOAST
    .config(function(ngToastProvider) {
        ngToastProvider.configure({
            animation: 'fade', //'fade' , 'slide'
            horizontalPosition: 'right', // right, center, left
            verticalPosition: 'top' // top, bottom,
        });
    })
    // WHITE LIST FROM HREF
    .config(function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    });

})();