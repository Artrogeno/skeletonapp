(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .controller('FormsValidateCtrl', function( $scope ,$state, FormsValidateFac ) {
        
        var vm = $scope;
        vm.user = {};

        vm.validateCpf        = validateCpf;
        vm.submitFormValidate = submitFormValidate;


        function validateCpf( val ){
            return FormsValidateFac.validCPF( val );
        }
        function submitFormValidate(){
            if( vm.formValidate.$valid ){
                console.log( JSON.stringify( vm.user ) );
            }else{
                console.log('ops');
            }
        }

    });
    
})();