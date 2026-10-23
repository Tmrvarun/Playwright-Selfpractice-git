import {test,Page,expect} from '@playwright/test'
import { app_url,user_name,Password } from '../util/envconfig'
import { Product_page } from '../Pages/productpage'
import { Login_page } from '../Pages/loginpage'
import { loginlocators } from '../Locators/loginlocatore'

test.describe('Test for validating Logout and about link',()=>{
    let loginpage:Login_page
    let productpage:Product_page
     // here are creating two constants of the two pages

    test.beforeEach(async({page})=>{

        loginpage=new Login_page(page)
        productpage=new Product_page(page)

        // here we are making objects of the two constants , so that we can access the methods of these pages 
        

        await page.goto(app_url)
        await loginpage.login_method(user_name,Password)
    }
    
    )

    test ('logout click',async({page})=>{
        await productpage.logut_button_click()
    })

    test('about link click',async({page})=>{
        await productpage.logut_button_click()
    })

})

