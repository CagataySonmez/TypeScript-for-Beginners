/// <reference path="./typings/jquery/v2/index.d.ts" />

function greet(name: string): void {
    console.log("Hello ", name);
    $("#msgArea").html("Hello " + name);
}

function init(): void {
    greet("Cagatay")
}

