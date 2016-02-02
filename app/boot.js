System.register(['angular2/platform/browser', './app.component', 'angularfire2/angularfire'], function(exports_1) {
    var browser_1, app_component_1, angularfire_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (angularfire_1_1) {
                angularfire_1 = angularfire_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [angularfire_1.FIREBASE_PROVIDERS, angularfire_1.defaultFirebase('https://myUrl.firebaseio.com')]);
        }
    }
});
//# sourceMappingURL=boot.js.map