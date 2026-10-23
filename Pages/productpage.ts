import{Page} from'@playwright/test'
import { Product_pagelocator } from '../Locators/productpagelocators'

export class Product_page{
    constructor(public page:Page) 
    
    //The main idea of using a constructor here is , when we perform any action or some method on browser page
    //then instead of opening multiple browsers for each actions or method ,we innitialize only one one page at the time of object call 
    // that is why we pass page in the constructor and this.page denotes the instance of page for that object or pointer of the object
    {

    }

    async logut_button_click (){
        await this.page.click(Product_pagelocator.burger_icon)
        await this.page.click(Product_pagelocator.Log_out)
    }

    async about_link_click(){
        await this.page.click(Product_pagelocator.burger_icon)
        await this.page.click(Product_pagelocator.About_Link)
    }
}