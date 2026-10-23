import{test,Page, expect} from '@playwright/test'
import { Filters } from '../Pages/filtermethods'
import { app_url,user_name,Password } from '../util/envconfig'
import { Login_page } from '../Pages/loginpage'
import { filter } from '../Locators/filter_sorting_locator'
import { productpage_locator_vefification } from '../Locators/product_page_locators_verification'

test.describe('Filter',()=>{

    let loginmethod2:Login_page
    let filter_method:Filters

    test.beforeEach('login',async({page})=>{
         loginmethod2=new Login_page(page)
         filter_method=new Filters(page)

        await page.goto(app_url)
        await loginmethod2.login_method(user_name,Password)
        
    })

    test('filter sort a toz ', async()=>{
        await filter_method.filter_atoz()
        const names=await productpage_locator_vefification.producttitle
        const filtername=[...names].sort()
        expect(names).toEqual(filtername);
    })

    test ('filter name z to a', async()=>{
        await filter_method.filter_ztoa
        const name=await productpage_locator_vefification.producttitle
        const sorted_name=[...name].sort().reverse()
        expect (name).toEqual(sorted_name)
    })
})