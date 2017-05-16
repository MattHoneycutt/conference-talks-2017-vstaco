'use strict';
var module = module || {};
module.exports = function() {
    const destinationBaseDir = 'www';
    const modulesRoot = 'node_modules';
    const appRoot = 'app';

    const cssDestination = `${destinationBaseDir}/css`;
    const jsDestination = `${destinationBaseDir}/js`;

    return {
        appRoot,
        destinationBaseDir,
        cssDestination,
        jsDestination,
        vendorScss: {
            autoprefix: false,
            dest: `${destinationBaseDir}/css/vendor.min.css`,
            srcGlob: [
                `vendor/main.scss`
            ]
        },
        appScss: {
            autoprefix: true,
            dest: `${destinationBaseDir}/css/app.min.css`,
            srcGlob: [
                 `${appRoot}/shared/layout.scss`,
                 `${appRoot}/**/*.scss`
            ]
        },
        vendorJs: {
            concatOnly: true,
            dest: `${jsDestination}/vendor.min.js`,
            srcGlob: [
                `${modulesRoot}/angular/angular.min.js`,
                `${modulesRoot}/angular-animate/angular-animate.min.js`,
                `${modulesRoot}/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js`,
                `${modulesRoot}/angular-ui-router/release/angular-ui-router.min.js`,
                `${modulesRoot}/ionic-native/dist/ionic.native.min.js`
            ]
        },
        appJs: {
            concatOnly: false,
            dest: `${jsDestination}/app.min.js`,
            srcGlob: [
                 `${appRoot}/app.module.js`,
                 `${appRoot}/**/*.module.js`,
                 `${appRoot}/**/*.js`
            ]
        },
        appHtml: {
            moduleName: 'templates',
            templateRoot: `/${appRoot}/`,
            dest: `${jsDestination}/app-templates.min.js`,
            srcGlob:[
                `${appRoot}/**/*.template.html`                
            ]
        },

        staticAssets: {
            base: appRoot,
            dest: destinationBaseDir + '',
            srcGlob:[
                `${appRoot}/index.html`,
                `${appRoot}/fonts/**/*`,
                `${appRoot}/images/**/*`
            ]
        },

        browserSync: {
            port: 4005
        },

        revJs: {
            srcGlob: [
                `${jsDestination}/*.min.js`
            ],
            dest: `${jsDestination}`
        },
        revCss: {
            srcGlob: [
                `${cssDestination}/*.min.css`
            ],
            dest: `${cssDestination}`
        }
    };
};