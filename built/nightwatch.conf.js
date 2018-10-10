require('babel-core/register');
var fs = require("fs");
module.exports = (function (settings) {
    var seleniumServerFileName = fs.readdirSync("node_modules/selenium-standalone/.selenium/selenium-server/");
    settings.selenium.server_path += seleniumServerFileName;
    return settings;
})(require("./nightwatch.json"));
