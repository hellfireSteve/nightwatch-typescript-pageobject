// require('dotenv').config();

import * as dotenv from "dotenv";

dotenv.config();

module.exports = {
'User can sign in': function (client: any) {
		console.log('Starting...');
		var signinPage = client.page.signinPage();
		
		console.log('not this...');
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
}