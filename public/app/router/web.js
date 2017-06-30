(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .config( function( $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $provide, COMPONENTS_LAZY, MODULES_LAZY ) {
        
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = {Accept: "application/json, text/plain, */**"};
        $httpProvider.defaults.headers.post = {"Content-Type": "application/json;charset=utf-8"};
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider.otherwise('dash');

        $stateProvider
        .state('auth', {
            url: '/',
            abstract: true,
            templateUrl: 'tpls/auth/auth.html'
        })
        .state('auth.signin', {
            url: 'auth/signin',
            templateUrl: 'tpls/auth/signin.html',
            controller: 'SigninCtrl',
            resolve: load([
                'mdSingnin'
            ])
        })
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl',
            templateUrl: 'tpls/main.html',
            resolve: load([
               'mdMain'
            ])
        })
        .state('main.dash', {
            url: 'dash',
            controller: 'DashCtrl',
            templateUrl: 'tpls/admin/dash/dash.html',
            resolve: load([
                'mdDash'
            ])
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
            templateUrl: 'tpls/admin/forms/main.html',
            resolve: load([
                'mdForms'
            ])
        })
        .state('main.forms.basic', {
            url: 'basic',
            controller: 'FormsBasicCtrl',
            templateUrl: 'tpls/admin/forms/basic/basic.html',
            resolve: load([
                'mdFormsBasic'
            ])
        })
        .state('main.forms.validate', {
            url: 'validate',
            controller: 'FormsValidateCtrl',
            templateUrl: 'tpls/admin/forms/basic/validate.html',
            resolve: load([
                'mdFormsValidate'
            ])
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
