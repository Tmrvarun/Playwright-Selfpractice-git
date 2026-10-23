import {test,Page} from'@playwright/test'
import { product_add_item } from '../Pages/product_page_validation_additem'
import { app_url,user_name,Password } from '../util/envconfig'
import { Login_page } from '../Pages/loginpage'
import { Product_page } from '../Pages/productpage'


test.describe('This test is to validate product page count',()=>{
    let loginpage1:Login_page
    let productpage1:product_add_item

    test.beforeEach(async({page})=>{
        loginpage1=new Login_page(page)
        productpage1=new product_add_item(page)
        await page.goto(app_url)
        await loginpage1.login_method(user_name,Password)
        
    })

    test ('productpagevalid',async({page})=>{
        await productpage1.productpage_itemsvalidation()
    })

    test ('first item click',async({page})=>{
        await productpage1.firstclick()
    })

    test ('all item click',async({page})=>{
        await productpage1.allitemclick()
    })


})