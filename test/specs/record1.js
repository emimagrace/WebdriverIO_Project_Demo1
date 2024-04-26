var assert = require('assert');

describe('katalon', function() {

	it('should do something', function() {
		browser.url('https://www.google.com/search?q=the+internet+herokuapp+login&rlz=1C1RXQR_enIN1103IN1103&oq=the&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIMCAMQIxgnGIAEGIoFMhUIBBAuGCcYrwEYxwEYgAQYigUYjgUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAuGEMYgAQYigUyDAgIEC4YQxiABBiKBTINCAkQABiDARixAxiABNIBCTMwMjhqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8');
		$('//div[@id=\'rso\']/div/div/div/div/div/div/div/span/a/h3').click();
		browser.url('https://the-internet.herokuapp.com/login');
		$('#username').click();
		$('#username').setValue('tomsmith');
		$('#password').click();
		$('#password').setValue('SuperSecretPassword!');
		$('//form[@id=\'login\']/button/i').click();
		browser.url('https://the-internet.herokuapp.com/secure');
	});

});