/// <reference path="Car.ts"

function init(){
    let car: Demo.Car = new Demo.Car();
    car.setEngine("V8");

    document.getElementById("msgArea").innerHTML = 
        "Engine is" + car.getEngine();
}