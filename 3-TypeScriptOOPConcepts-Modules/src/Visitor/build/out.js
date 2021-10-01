var XiaomiMiStick = /** @class */ (function () {
    function XiaomiMiStick() {
    }
    XiaomiMiStick.prototype.accept = function (visitor) {
        return visitor.visitXiaomiMiStick(this);
    };
    Object.defineProperty(XiaomiMiStick.prototype, "androidVersion", {
        //common functionality
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    //only mi stick has hdmi output
    XiaomiMiStick.prototype.getHdmiOut = function () {
        return '1080p hdmi out';
    };
    return XiaomiMiStick;
}());
var GrundigAndroidTV = /** @class */ (function () {
    function GrundigAndroidTV() {
    }
    GrundigAndroidTV.prototype.accept = function (visitor) {
        return visitor.visitGrundigAndroidTV(this);
    };
    Object.defineProperty(GrundigAndroidTV.prototype, "androidVersion", {
        //common functionality
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    //only grundig android tv has panel
    GrundigAndroidTV.prototype.getPanelSize = function () {
        return '4K UHD';
    };
    return GrundigAndroidTV;
}());
var HdmiOutVisitor = /** @class */ (function () {
    function HdmiOutVisitor() {
    }
    HdmiOutVisitor.prototype.visitXiaomiMiStick = function (element) {
        return "HDMI output of XiaomiMiStick is " + element.getHdmiOut();
    };
    HdmiOutVisitor.prototype.visitGrundigAndroidTV = function (element) {
        return "GrundigAndroidTV does not support HDMI output";
    };
    return HdmiOutVisitor;
}());
var PanelVisitor = /** @class */ (function () {
    function PanelVisitor() {
    }
    PanelVisitor.prototype.visitXiaomiMiStick = function (element) {
        return "XiaomiMiStick does not have panel";
    };
    PanelVisitor.prototype.visitGrundigAndroidTV = function (element) {
        return "Panel size of GrundigAndroidTV " + element.getPanelSize();
    };
    return PanelVisitor;
}());
function init() {
    var xiaomi = new XiaomiMiStick();
    var grundig = new GrundigAndroidTV();
    var hmiOutVisitor = new HdmiOutVisitor();
    var paneVisitor = new PanelVisitor();
    document.getElementById("msgArea1").innerHTML = xiaomi.accept(hmiOutVisitor);
    document.getElementById("msgArea2").innerHTML = xiaomi.accept(paneVisitor);
    document.getElementById("msgArea3").innerHTML = grundig.accept(hmiOutVisitor);
    document.getElementById("msgArea4").innerHTML = grundig.accept(paneVisitor);
}
//# sourceMappingURL=out.js.map