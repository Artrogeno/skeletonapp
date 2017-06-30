(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .run(function($rootScope, $state, $location, $localStorage, $templateCache) {
        
        //$rootScope.cpfPattern = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';
        
        // $rootScope.$on( "$routeChangeStart", function(event, next) {
        //     console.log( 'run' )
        //     if ( angular.isUndefined( $localStorage.token ) || $localStorage.token === null) {
        //         if ( next.name !== "auth.signin") {
        //             $location.path("auth/signin");
        //         }
        //     }
        // });
        // Router Change Start
        // $rootScope.$on( "$routeChangeStart", function(event, next) {
        //     console.log( 'run' )
        //     if ($localStorage.token == null) {
        //         if ( next.name !== "auth.signin") {
        //             $location.path("auth/signin");
        //         }
        //     }
        // });
        $rootScope.$on('$stateChangeStart', function(event, next, nextParams, toState) {
            // if ($localStorage.token == null) {
            //      $state.go('auth.signin', {reload: true});
            // }
            if( angular.isUndefined($localStorage.token) || $localStorage.token === null ){

                if( toState.name !== "auth.signin" || toState.name === null ){
                    console.log( toState.name );
                    $location.path("auth/signin");
                }
            }
        });

    });

})();

