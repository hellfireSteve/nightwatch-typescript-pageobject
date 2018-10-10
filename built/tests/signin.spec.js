"use strict";
// require('dotenv').config();
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
module.exports = {
    // error TS7006: Parameter 'client' implicitly has an 'any' type.
    'User can sign in': function (client) {
        var signinPage = client.page.signinPage();
        var instancesPage = client.page.instancesPage();
        console.log(process.env.EMAIL);
        signinPage
            .navigate()
            .signin(process.env.EMAIL, process.env.PASSWORD);
        // give it time to load
        client.pause(5000);
        instancesPage.expect.element('@homepageWelcomeTitle').text.to.contain('Welcome to the CJDocs Home!');
        client.end();
    }
};
