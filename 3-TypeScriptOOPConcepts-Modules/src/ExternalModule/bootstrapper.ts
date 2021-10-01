import Demo = require("./Car")

export function run() {
    // code from window.onload
    let car: Demo.Car = new Demo.Car();
    car.setEngine("V8");

    document.getElementById("msgArea").innerHTML = 
        "Engine is" + car.getEngine();
};
