(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .factory('FormsValidateFac', function(){
        var factory = {
            validCPF     : validCPF
        };

        return factory;

        function validCPF( val ){
            if( !angular.isUndefined(val) ){
              return  validateCPF( val )
            }
            return false;
        }

        function maskCpf(){

        }

    })

})();