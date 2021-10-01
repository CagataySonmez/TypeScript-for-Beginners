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
// All classes can be dived into seperate files; this is just for demo!
var Dark = /** @class */ (function () {
    function Dark() {
    }
    Dark.prototype.getTheme = function () {
        return 'dark';
    };
    return Dark;
}());
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.getTheme = function () {
        return 'light';
    };
    return Light;
}());
// abstract class for the Abstraction
var UIElement = /** @class */ (function () {
    function UIElement(theme) {
        this.theme = theme;
    }
    return UIElement;
}());
// All classes can be dived into seperate files!
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(theme) {
        return _super.call(this, theme) || this;
    }
    Button.prototype.toString = function () {
        return "This is a button with " + this.theme.getTheme() + " theme.";
    };
    return Button;
}(UIElement));
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(theme) {
        return _super.call(this, theme) || this;
    }
    TextArea.prototype.toString = function () {
        return "This is a text area with " + this.theme.getTheme() + " theme.";
    };
    return TextArea;
}(UIElement));
function init() {
    // Instantiate the circle with a concrete implementation
    var button = new Button(new Dark());
    var text = new TextArea(new Light());
    document.getElementById("msgArea1").innerHTML = button.toString();
    document.getElementById("msgArea2").innerHTML = text.toString();
}
//# sourceMappingURL=out.js.map