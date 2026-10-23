import {test,expect} from '@playwright/test'
import {Page} from '@playwright/test'
import { app_url,user_name,Password } from '../util/envconfig'
import { specifc_productlist } from '../test data/products'
import { Login_page } from '../Pages/loginpage'
import { add_specific_product } from '../Pages/specific_product_select'
import { product_add_item } from '../Pages/product_page_validation_additem'
import { productpage_locator_vefification } from '../Locators/product_page_locators_verification'


test.describe('specific test', () => {

    let loginpage2:Login_page
    let specificproduct: add_specific_product

    test.beforeEach('login', async({page})=>{
         loginpage2=new Login_page(page)
         specificproduct=new add_specific_product(page)
        await page.goto(app_url)
        await loginpage2.login_method(user_name,Password)
        
    })

    test ('test specific button',async({page})=>{
        await specificproduct.specific_item_add(specifc_productlist)
    })
})