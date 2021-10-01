////// <reference path="typings/requirejs.d.ts" />
require.config({
    "baseUrl": "build"
});
require(["bootstrapper"], function (bootstrapper) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map