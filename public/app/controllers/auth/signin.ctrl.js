(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .controller('SigninCtrl', function( $scope ,$state, $rootScope, $timeout, $localStorage,  ngToast, AuthSrv ) {
        
        var vm = $scope;
        vm.signin = signin;

        function signin() {
            if (vm.userForm.$valid) {
                var formData = {
                    email:    vm.user.email,
                    password: vm.user.password
                };
                AuthSrv.signin(formData, successAuth, function () {
                    ngToast.danger('Credênciais invalidas.');
                })
            }else{
                ngToast.danger('Preencha corretamente o formulário.');
            }
        }

        function successAuth(res) {
            $localStorage.token = res.token;
            $localStorage.auth  = res.auth;
            ngToast.success('Login efetuado com sucesso.');
            $timeout(function(){
                $state.go('main.dash', {reload: true});
            },1000);
        }
    });

})();