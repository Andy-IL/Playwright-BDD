import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {getPage} from "../../corelib/corelib.spec";
import LoginPage from "../pages/loginpage";

let loginPage:LoginPage;

Given('User is on login page', async function () {
    this.attach('this is start if user is on loging page step.....!');
    loginPage=new LoginPage(getPage(), this.attach);
    await loginPage.gotoLoginPage();
    this.attach('login page ready');    
    this.parameters.a=10;
});

When ('User enters login details from env', async function () {
    await loginPage.defaultLoginToApp() ;
    this.attach('default login with env details successful')

}) ;

When('User enters login details {string}, {string}', async function (username: string, password:string) {
    await loginPage.tryLoginToApp(username,password);
});

Then ('response {string} should appear', async function (response: string) {
    await loginPage.testLoginResponse (response) ;


} ) ;

// Then('Logout should be successful', async function () {

 When('Logout should be successful', async function () {
    console.log('Logout is success');
    console.log(`login page: value is ${this.parameters.a}`);
});

Then('This is a dummy step to fail',  async function () {
    expect(1).toBe(2);
});
