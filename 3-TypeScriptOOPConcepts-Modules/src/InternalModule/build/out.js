var Demo;
(function (Demo) {
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.setEngine = function (e) {
            this.engine = e;
        };
        Car.prototype.getEngine = function () {
            return this.engine;
        };
        return Car;
    }());
    Demo.Car = Car;
})(Demo || (Demo = {}));
function init() {
    var car = new Demo.Car();
    car.setEngine("V8");
    document.getElementById("msgArea").innerHTML =
        "Engine is" + car.getEngine();
}
//# sourceMappingURL=out.js.map