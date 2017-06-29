(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .run(function($rootScope, $state, $timeout) {
        
        $rootScope.cpfPattern = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

        // $rootScope.$on('$stateChangeStart', function(event, next, nextParams, toState) {
        //     //
        // });
    });

})();

