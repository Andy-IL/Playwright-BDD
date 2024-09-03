import { Page } from "playwright";
import { expect } from "@playwright/test";
import * as loginPageLoc from "../locators/loginpageloc.json";
import BasePage from "../pages/basepage";
import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class LoginPage extends BasePage {

    constructor(page: Page, log:ICreateAttachment) {
        super(page, log);
    }

    async gotoLoginPage(){
        await this.page.locator(loginPageLoc.loginLink.locator, loginPageLoc.loginLink.locatorOptions).click(loginPageLoc.loginLink.actOptions);
    }

    async defaultLoginToApp( ) {
        this.log('i am about to login with details from environment.....!')
        await this.enter(loginPageLoc.emailField, process.env.user_name!);
        await this.enter(loginPageLoc.passwordField, process.env.password!);
        await this.click(loginPageLoc.loginBtn); 
    }
    async tryLoginToApp(username: string, password: string ) {
        this.log('i am about to try a login.....!')
        await this.enter(loginPageLoc.emailField, username);
        await this.enter(loginPageLoc.passwordField, password);
        await this.click(loginPageLoc.loginBtn); 
    }
    async testLoginResponse (response: string) {
        expect (await this.page.locator(loginPageLoc.loginFailResponse.locator)).toContainText(response) ;
        // /html/body/div[2]/div[5]/div[1]/div[1]  ?
    }

    async logout(){
        await this.click(loginPageLoc.logoutLink);
        await this.click(loginPageLoc.continueBtn,true);
    }

}
