(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    // ROUTER
    .constant('URI', {
        API     : 'http://www.artrogenos.16mb.com/',
        AUTH    : 'http://www.artrogenos.16mb.com/authenticate',
	    LOGOUT  : 'http://www.artrogenos.16mb.com/logout'
    });
    
})();