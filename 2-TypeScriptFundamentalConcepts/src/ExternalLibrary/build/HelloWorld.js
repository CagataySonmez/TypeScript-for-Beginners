/// <reference path="./typings/jquery/v2/index.d.ts" />
function greet(name) {
    console.log("Hello ", name);
    $("#msgArea").html("Hello " + name);
}
function init() {
    greet("Cagatay");
}
//# sourceMappingURL=HelloWorld.js.map