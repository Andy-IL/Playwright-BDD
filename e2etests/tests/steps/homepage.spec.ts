import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {getPage} from "../../corelib/corelib.spec";

import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";

let homePage:HomePage;
let loginPage:LoginPage;

Then('Home page should be displayed', async function () {
    homePage=new HomePage(getPage(), this.attach);
    await homePage.waitForEditAcInfo();
    console.log(`home page: value is ${this.parameters.a}`);
});

When ('user clicks on Edit Account link', async function () {
    homePage=new HomePage(getPage(), this.attach);
    await homePage.ClickEditAcInfo();

} ) ;

When ('User clicks on View Order History link', async function () {
    homePage=new HomePage(getPage(), this.attach);
    await homePage.ClickViewOrderHist();

} ) ;

 Then('My Account Information appears' , async function () { 
    console.log ("Expecting My Account Info " ) ;
    await homePage.editAcInfoTitle() ;
 }) ;

 When('User fills in Account info' , async function () { 
//  filling text box with id=input-firstname.  Includes Click Continue
  await homePage.FillEditAcFields("dummy2", "dummy2", "dummy1234@gmail.com") ; 
} ) ;

//   When('user clicks Continue' , async function () {
//     await homePage.

//   } ) ;

Then ('success message {string} is visible', async function (instring: string) {
 await homePage.waitForAccountUpdatedMsg(instring) ;
} ) ;


Then('Order History page appears' , async function () { 
    console.log ("Expecting Order History  " ) ;
    await homePage.OrderHistoryTitle() ;
 }) ;

When ('User clicks on Continue button', async function () {
    await homePage.ClickOrderHistoryContinue() ;

} ) ;


When('Upon logout', async function () {
    loginPage=new LoginPage(getPage(), this.attach);
    await loginPage.logout();
    this.attach(`logout is done....!`);
    console.log(`home page: value is ${this.parameters.a}`);
});


