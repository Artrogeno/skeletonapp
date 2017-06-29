(function () {
    'use strict';
/**
 * AngularJS Application
 * @author Arthur Costa <artrogeno@gmail.com>
 */
    angular.module('skeletonApp')
    .constant('COMPONENTS_LAZY',{
        owl2:   [
                'components/owl.carousel/dist/assets/owl.carousel.css',
                'components/owl.carousel/dist/assets/owl.theme.default.css',
                'components/owl.carousel/dist/owl.carousel.min.js',
                'app/admin/directives/owl.carousel.dts.js'
            ]
    })
    .constant('MODULES_LAZY',[
        {
            name: 'mdDash',
            files: [
                //'app/admin/services/dash.srv.js',
                'app/controllers/admin/dash.ctrl.js'
            ]
        }
    ]);

})();