describe ('Demo Test',function(){
    it ('First Test',async()=>{
       browser.url('https://google.com/')
       browser.pause(2000)
       await $('[name="q"]').setValue("WebdriverIO");
       browser.keys('Enter')
    })
})