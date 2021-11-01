var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AndroidApp = /** @class */ (function () {
    function AndroidApp(name) {
        this.name = name;
    }
    AndroidApp.prototype.run = function () {
        return 'Running "' + this.name + '" Android app';
    };
    return AndroidApp;
}());
var AppDecorator = /** @class */ (function () {
    function AppDecorator(app) {
        this.app = app;
    }
    AppDecorator.prototype.run = function () {
        return this.app.run();
    };
    return AppDecorator;
}());
var WebAppDecorator = /** @class */ (function (_super) {
    __extends(WebAppDecorator, _super);
    function WebAppDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebAppDecorator.prototype.setUrl = function (url) {
        this.url = url;
    };
    WebAppDecorator.prototype.run = function () {
        return _super.prototype.run.call(this) + " on WebView with url: " + this.url;
    };
    return WebAppDecorator;
}(AppDecorator));
var HbbtvAppDecorator = /** @class */ (function (_super) {
    __extends(HbbtvAppDecorator, _super);
    function HbbtvAppDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HbbtvAppDecorator.prototype.run = function () {
        return _super.prototype.run.call(this) + " as HbbTV app";
    };
    return HbbtvAppDecorator;
}(AppDecorator));
function init() {
    var app1 = new AndroidApp("Netflix");
    document.getElementById("msgArea1").innerHTML = app1.run();
    var app2 = new WebAppDecorator(new AndroidApp("Das Erste"));
    app2.setUrl("https://daserste.de");
    document.getElementById("msgArea2").innerHTML = app2.run();
    var app3 = new HbbtvAppDecorator(app2);
    document.getElementById("msgArea3").innerHTML = app3.run();
}
//# sourceMappingURL=out.js.map