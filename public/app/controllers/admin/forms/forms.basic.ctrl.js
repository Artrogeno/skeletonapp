(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .controller('FormsBasicCtrl', function( $scope ,$state, $timeout, $rootScope, $location) {
        
        var vm = $scope;
        vm.user = {};

        vm.submitFormBasic = submitFormBasic;

        function submitFormBasic(){
            if( vm.formBasic.$valid ){
                alert('cadastrado com sucesso!')
                console.log( JSON.stringify( vm.user ) );
            }else{
                console.log('ops');
            }
        }

    });
    
})();