(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .service('AuthSrv', function( $q, $http, $localStorage, URI ){

        var service = {
            signin              : signin,
            logout              : logout,
            getTokenClaims      : getTokenClaims
        };

        return service;


        function signin(data, success, error) {
            $http.post(URI.AUTH, data).success(success).error(error)
        }
        function logout(success) {
            $http.post(URI.LOGOUT).success(success)
            tokenClaims = {};
            success();
        }
        function getTokenClaims() {
            return getClaimsFromToken()
        }

        function urlBase64Decode(str) {
          var output = str.replace('-', '+').replace('_', '/');
          switch (output.length % 4) {
              case 0:
                  break;
              case 2:
                  output += '==';
                  break;
              case 3:
                  output += '=';
                  break;
              default:
                  throw 'Illegal base64url string!';
          }
          return window.atob(output);
        }

        function getClaimsFromToken() {
          var token = $localStorage.token;
          var user = {};
          if (typeof token !== 'undefined') {
              var encoded = token.split('.')[1];
              user = JSON.parse(urlBase64Decode(encoded));
          }else if( token ){
              var encoded = token.split('.')[1];
              user = JSON.parse(urlBase64Decode(encoded));
          }else{
              user = false
          }
          return user;
        }

    });

})();