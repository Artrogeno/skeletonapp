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
        // {
        //     name: 'ui.select',
        //     files: [
        //         'components/select2/dist/js/select2.min.js',
        //         'components/select2/dist/css/select2.min.css',
        //         'components/angular-ui-select/dist/select.min.js',
        //         'components/angular-ui-select/dist/select.min.css'
        //     ]
        // },
        {
            name: 'mdMain',
            files:  [
                'app/services/main.srv.js'
            ]
        },
        {
            name: 'mdDash',
            files: [
                'app/controllers/admin/dash.ctrl.js'
            ]
        },
        //FORMS MODULE
        {
            name: 'mdForms',
            files: [
                'app/controllers/admin/forms/forms.ctrl.js',
            ]
        },
        {
            name: 'mdFormsBasic',
            files: [
                'app/controllers/admin/forms/forms.basic.ctrl.js'
            ]
        },
        {
            name: 'mdFormsValidate',
            files: [
                'app/factories/admin/forms/forms.validate.fac.js',
                'app/controllers/admin/forms/forms.validate.ctrl.js'
            ]
        }
    ])
    // LAZYCONF
    .config(function($ocLazyLoadProvider, MODULES_LAZY) {
        $ocLazyLoadProvider.config({
            debug:  false,
            events: true,
            modules: MODULES_LAZY
    });
});

})();