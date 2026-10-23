// here all the page methods and actions on the saved page locators are performed here , 

import {Page} from'@playwright/test'
import { productpage_locator_vefification } from '../Locators/product_page_locators_verification'

export class product_add_item{
    constructor(public page:Page)
    {}

    async productpage_itemsvalidation(){
        const title=await this.page.locator(productpage_locator_vefification.producttitle).allTextContents();
        const description=await this.page.locator(productpage_locator_vefification.productdescription).allTextContents();
        const price=await this.page.locator(productpage_locator_vefification.productprice).allTextContents();
        const button=await this.page.locator(productpage_locator_vefification.addcartbutton).count();

        if (title.length===0)
            throw new Error('Items are not matching');

        if (title.length!== description.length || title.length!= description.length || title.length!=price.length)
            throw new Error ('Page elemensta re not equal in count')
            

    }
    async firstclick(){
        await this.page.locator(productpage_locator_vefification.addcartbutton).first().click()
    }

    async allitemclick(){
        const buttons=await this.page.locator(productpage_locator_vefification.addcartbutton)
        const count=await buttons.count()
        for (let i=count;i<count;i++)
        {
            await buttons.nth(i).click()
            await this.page.waitForTimeout(3000)
        }

    }
}