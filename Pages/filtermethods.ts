import {Page} from '@playwright/test'
import { filter } from '../Locators/filter_sorting_locator'
import { productpage_locator_vefification } from '../Locators/product_page_locators_verification' 


export class Filters{
    constructor( private page:Page){

    }

    async filter_atoz(){
        await this.page.selectOption(filter.productfilter,'atoz')
    }

    async filter_ztoa(){
        await this.page.selectOption(filter.productfilter,'ztoa')
    }
    async filter_lowtohigh(){
        await this.page.selectOption(filter.productfilter,'lohi')
    }
    async filter_Hightolow(){
        this.page.selectOption(filter.productfilter,'hilo')

    } 
    
    async namesort(){
        return this.page.locator(productpage_locator_vefification.producttitle).allTextContents
    }

    async price_sort(){
        const prices=await this.page.locator(productpage_locator_vefification.productprice).allTextContents();
        return prices.map(price => parseFloat(price.replace('$', '')))
    }

    //THE SIGNIFICANE OF ABOVE TWO METHODS :
    // first method collects all the page text content of the page product names

    // the second method collects all text content of page product prices
    // here firt we collect prices in a constant variable prices
    // then we convert the prices from string to number , replacing the symbol $ with blank space 
}