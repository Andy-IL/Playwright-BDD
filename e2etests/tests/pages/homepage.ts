import { Page } from "playwright";
import { expect } from "playwright/test";
import * as homePageLoc from "../locators/homepageloc.json";

import BasePage from "../pages/basepage";
import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class HomePage extends BasePage{

    constructor(page:Page, log:ICreateAttachment) {
        super(page, log)
    }

    async waitForEditAcInfo(){
        await this.page.locator(homePageLoc.EditAcLink.locator).waitFor(homePageLoc.EditAcLink.actionOptons);
        expect(this.page.locator(homePageLoc.EditAcLink.locator)).toBeVisible();
    }
    async ClickEditAcInfo(){
        await this.page.locator(homePageLoc.EditAcLink.locator).click() ;
    }
    async editAcInfoTitle(){
        await this.page.locator(homePageLoc.MyAccountInfoTitle.locator).isVisible() ;
    }

    async FillEditAcFields(firstName: string, lastName: string, eMail: string){
         await this.page.locator(homePageLoc.MyAccInfoFirstName.locator).dblclick() ;
         await this.page.locator(homePageLoc.MyAccInfoFirstName.locator).fill(firstName) ;
          
         await this.page.locator(homePageLoc.MyAccInfoLastName.locator).fill(lastName) ;
         await this.page.locator(homePageLoc.MyAccInfoEmail.locator).fill(eMail) ;
         await this.page.locator(homePageLoc.MyAccInfoContinue.locator).click() ;
    }
    async waitForAccountUpdatedMsg(successText: string) {
        expect(await this.page.locator(homePageLoc.AccountUpdatedMsg.locator)).toBeVisible() ;
        expect(await this.page.locator(homePageLoc.AccountUpdatedMsg.locator)).toHaveText (successText) ;
    }
    async ClickViewOrderHist(){
//        await this.page.locator(homePageLoc.ViewOrderHistLink.locator).click() ;
          await this.page.getByRole('link', { name: ' View your order history' }).click();
//        await page.getByRole('link', { name: 'Continue' }).click();
    }
    async OrderHistoryTitle(){
        await this.page.locator(homePageLoc.OrderHistoryTitle.locator).isVisible() ;
//        await this.page.locator(homePageLoc.OrderHistoryContinue.locator).click() ;        
    }
    async ClickOrderHistoryContinue(){
        await this.page.locator(homePageLoc.OrderHistoryContinue.locator).click() ;
    }
    
}
