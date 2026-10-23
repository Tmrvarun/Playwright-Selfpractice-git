import { loginlocators } from "../Locators/loginlocatore";
import { Page } from "@playwright/test";

export class Login_page {

    constructor(private page: Page){

    }

    async login_method(username:string,password:string){
        await this.page.fill(loginlocators.username,username)
        await this.page.fill(loginlocators.password,password)
        await this.page.click(loginlocators.loginbutton)

    }
}