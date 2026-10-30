import {test,expect} from '@playwright/test'
import {firefox,webkit,chromium} from '@playwright/test'
import {app_url,user_name,Password } from '../util/envconfig'
import { Login_page } from '../Pages/loginpage'

test('Login page opening test case', async({page})=>{
    
    const Login_testcase=new Login_page(page)
    await page.goto(app_url)
    await Login_testcase.login_method(user_name,Password)
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('New branch Login page opening test case', async({page})=>{
    
    const Login_testcase=new Login_page(page)
    await page.goto(app_url)
    await Login_testcase.login_method(user_name,Password)
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html/newbranch')
})