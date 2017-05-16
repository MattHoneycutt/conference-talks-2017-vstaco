(function (undefined) {

    if (location.hostname === 'localhost' && location.port === "4400") {
        document.write("<script async src='http://localhost:4005/browser-sync/browser-sync-client.js'><\/script>");
    }

})();