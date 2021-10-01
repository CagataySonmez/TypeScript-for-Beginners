define(["require", "exports", "./Car"], function (require, exports, Demo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    function run() {
        // code from window.onload
        var car = new Demo.Car();
        car.setEngine("V8");
        document.getElementById("msgArea").innerHTML =
            "Engine is" + car.getEngine();
    }
    exports.run = run;
    ;
});
//# sourceMappingURL=bootstrapper.js.map