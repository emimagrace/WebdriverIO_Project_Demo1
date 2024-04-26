const LoginPage = require('../pageobjects/login.page')

describe('Demo Test',async() =>{
    it('Login Test',async() =>{
    
        browser.url('https://the-internet.herokuapp.com/login')
        await login('tomsmith','SuperSecretPassword!')
        await checkLoginMessage('You logged into a secure area!')
    })
})