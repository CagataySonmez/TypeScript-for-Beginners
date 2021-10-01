define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Car = void 0;
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
    exports.Car = Car;
});
//# sourceMappingURL=Car.js.map