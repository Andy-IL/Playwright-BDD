import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product%2Fsearch&search=laptop');
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('dummy1234@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Shift+Home');
  await page.getByPlaceholder('E-Mail Address').press('ControlOrMeta+c');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('dummy1234@gmail.com
  await page.getByPlaceholder('E-Mail Address').fill('dummy1234@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('dummy1234@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' View your order history' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('link', { name: 'Forgotten Password', exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  // await page.getByPlaceholder('First Name').dblclick();
  // await page.getByRole('link', { name: 'Home' }).click();
  // await page.getByRole('link', { name: 'Special Hot', exact: true }).click();
  // await expect(page.locator('#entry_212499')).toContainText('There are no special offer products to list.');
  await page.getByRole('link', { name: ' View your order history' }).click({
    button: 'right'
  });
  // await page.getByRole('link', { name: 'Continue' }).click();
 //  await page.getByRole('button', { name: '2' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('dummyblah');
  await expect(page.locator('h1')).toContainText('My Account Information');
  await expect(page.getByPlaceholder('Last Name')).toHaveValue('dummy');
  await page.getByPlaceholder('E-Mail').click();
  await expect(page.locator('#entry_217825')).toContainText('2');
  await expect(page.getByRole('heading', { name: 'My Account Information' })).toBeVisible();await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
});
await page.getByRole('link', { name: ' View your order history' }).click();
await page.getByRole('link', { name: 'Continue' }).click();