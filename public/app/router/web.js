(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .config( function( $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $provide, COMPONENTS_LAZY, MODULES_LAZY ) {
        
        $urlRouterProvider.otherwise('dash');

        $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl',
            templateUrl: 'tpls/main.html'
            // resolve: LazySrv.load([
            //    'mdMain'
            // ])
        })
        .state('main.dash', {
            url: 'dash',
            controller: 'DashCtrl',
            templateUrl: 'tpls/admin/dash/dash.html',
            // resolve: load([
            //     'mdDash'
            // ])
        })

        /*
         * =========================================================
         * MODULES FORMS
         * =========================================================
         */
        .state('main.forms', {
            url: 'forms/',
            controller: 'FormsCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/forms/main.html'
            // resolve: load([
            //     'mdForms'
            // ])
        })
        .state('main.forms.basic', {
            url: 'basic',
            controller: 'FormsBasicCtrl',
            templateUrl: 'tpls/admin/forms/basic/basic.html'
            // resolve: load([
            //     'mdForms'
            // ])
        });
            

        // LOAD LAZYLOAD
        function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                        promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                        promise = promise.then( function(){
                            if(COMPONENTS_LAZY[src]){
                                return $ocLazyLoad.load(COMPONENTS_LAZY[src]);
                            }
                            angular.forEach(MODULES_LAZY, function(module) {
                                if( module.name == src){
                                    name = module.name;
                                }else{
                                    name = src;
                                }
                            });
                            return $ocLazyLoad.load(name);
                        });
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
        }

    });

})();
