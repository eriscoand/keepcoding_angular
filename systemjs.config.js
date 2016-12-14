(function (global) {
    System.config({
        "paths": {
            "npm:": "node_modules/"
        },
        "map": {
            "app": "out",
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/router/upgrade": "npm:@angular/router/bundles/router-upgrade.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
            "@angular/upgrade": "npm:@angular/upgrade/bundles/upgrade.umd.js",
            "@angular/upgrade/static": "npm:@angular/upgrade/bundles/upgrade-static.umd.js",
            "rxjs": "npm:rxjs",
            "angular-in-memory-web-api": "npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js",
            "moment": "npm:moment",
            "primeng": "npm:primeng",
            'angular2-cookie': 'npm:angular2-cookie'
        },
        "packages": {
            "app": {
                "main": "./main.js",
                "defaultExtension": "js"
            },
            "rxjs": {
                "defaultExtension": "js"
            },
            "moment": {
                "main": "./moment.js",
                "defaultExtension": "js"
            },
            "primeng": {
                "defaultExtension": "js"
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-cookie': {
                main: './core.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
