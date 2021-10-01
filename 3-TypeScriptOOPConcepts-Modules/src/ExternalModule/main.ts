/// <reference path="typings/requirejs.d.ts" />

require.config({
    "baseUrl": "build"
});

require(["bootstrapper"], (bootstrapper) => {
    bootstrapper.run()
});

