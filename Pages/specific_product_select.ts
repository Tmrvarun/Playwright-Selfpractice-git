import { Product_pagelocator} from "../Locators/productpagelocators";
import { productpage_locator_vefification } from "../Locators/product_page_locators_verification";
import { specifc_productlist } from "../test data/products";
import {Page} from '@playwright/test'

export class add_specific_product{

    constructor (public page:Page)
    {}

    async specific_item_add(productlist:string[]){
        const product_number = this.page.locator(productpage_locator_vefification.producttitle)
        const count= await product_number.count()

        for (let i=0;i<count;i++){
            const name= await product_number.nth(i).textContent()

            if (name && productlist.includes(name.trim()))
            {
                await this.page.locator(productpage_locator_vefification.addcartbutton).click()
            }
            
            

        }
    }
}