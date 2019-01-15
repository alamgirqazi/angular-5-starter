import { browser, by, element, protractor } from 'protractor';

import { AppPage } from './app.po';
import { XHRConnection } from '@angular/http';
import { async } from 'rxjs/scheduler/async';
import { first } from 'rxjs/operator/first';

describe('Quick Angular Admin Page', () => {
  let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display correct title', function() {
    browser.driver
      .manage()
      .window()
      .maximize();
    expect(browser.getTitle()).toEqual('Quickpay');
  });

  // it('should not log in', async function() {
  //   await page.getLoginButton().click();
  //   await browser.sleep(2000);
  //   await page.getUsernameInput().sendKeys('test@gmail.com');
  //   await browser.sleep(2000);
  //   await page.getPasswordInput().sendKeys('alamqazi');
  //   // await browser.sleep(10000);
  //   await browser.sleep(1000);
  //   await page.getLoginButton().click();
  //   expect(page.getToastMessage().getText()).toEqual('Either your Email or password is incorrect.')
  //   await browser.sleep(1000);
  // });

  // it('should successfully log in', async function() {
  //   await browser.sleep(2000);
  //   await page.getUsernameInput().clear();
  //   await page.getPasswordInput().clear();
  //   await page.getUsernameInput().sendKeys('admin@pd.com');
  //   await browser.sleep(2000);
  //   await page.getPasswordInput().sendKeys('123456');
  //   // await browser.sleep(10000);
  //   await browser.sleep(1000);
  //   await page.getLoginButton().click();
  //   await browser.sleep(7000);
  // });
  // it('should display correct URL',async function(){
  //   expect(browser.getCurrentUrl()).toContain('admin');
  // });

  // it('should navigate to companies tab',async function(){
  //   await browser.sleep(2000);
  //   await page.getCompaniesTabButton().click();
  //   await browser.sleep(2000);
  //   await page.getFACompanyButton().click();
  //   await browser.sleep(2000);
  // });
  // it('should display details text',async function(){
  //   expect(page.getDetailsText().getText()).toContain('Details');
  // });
  // it('should display Customers List', async function() {
  //   await browser.sleep(2000);
  //   await page.getCustomersSubTabButton().click();
  //   await browser.sleep(2000);
  //   const customers = await page.getCustomersList();
  //   console.log('Customers length : > ', customers.length);
  //   //expect(browser.getCurrentUrl()).toContain('company');
  //   expect(customers.length).toBeGreaterThan(0);
  // });
  // it('should sort the table data',async function(){
  //   await browser.sleep(1000);
  //   const valueBefore = element(by.xpath('//*[@id="customertable"]/tbody/tr[1]/td[1]'));
  //   console.log(await valueBefore.getText());
  //   await page.getLoadTableButton().click();
  //   await browser.sleep(5000);
  //   const valueAfter = element(by.xpath('//*[@id="customertable"]/tbody/tr[1]/td[1]'));
  //   console.log(await valueAfter.getText());

  //  expect(await valueBefore.getText()).not.toEqual(await valueAfter.getText());
  // });

  // it('should display Categories List', async function() {
  //   await page.getCategoriesButton().click();
  //   await browser.sleep(1000);

  //   const categories = await page.getCategoriesList();
  //   console.log('categories length : > ', categories.length);
  //   expect(browser.getCurrentUrl()).toContain('categories');
  //   expect(categories.length).toBeGreaterThan(0);
  // });

  // it('should display  Modifiers List', async function() {
  //   await page.getModifiersButton().click();
  //   await browser.sleep(1000);

  //   const modifiers = await page.getModifiersList();
  //   console.log('modifiers length : > ', modifiers.length);
  //   expect(browser.getCurrentUrl()).toContain('modifiers');
  //   expect(modifiers.length).toBeGreaterThan(0);
  // });

  // it('should display Meal Time List', async function() {
  //   await page.getMealtimeButton().click();
  //   await browser.sleep(1000);

  //   const mealtime = await page.getMealTimeList();
  //   console.log('mealtime length : > ', mealtime.length);
  //   expect(browser.getCurrentUrl()).toContain('mealtimes');
  //   expect(mealtime.length).toBeGreaterThan(0);
  // });

  // it('should display Orders List', async function() {
  //   await page.getDashboardOrderButton().click();
  //   await browser.sleep(5000);

  //   const orders = await page.getOrdersList();
  //   console.log('Orders length : > ', orders.length);
  //   expect(browser.getCurrentUrl()).toContain('orders');
  //   expect(orders.length).toBeGreaterThan(0);
  // });

  // it('should display Employees List', async function() {
  //   await page.getDashboardEmployeesButton().click();
  //   await browser.sleep(1000);

  //   const employees = await page.getEmployeesList();
  //   console.log('employees length : > ', employees.length);
  //   expect(browser.getCurrentUrl()).toContain('employees');
  //   expect(employees.length).toBeGreaterThan(0);
  // });

  // it('should display Customers List', async function() {
  //   await page.getDashboardCustomersButton().click();
  //   await browser.sleep(1000);

  //   const customers = await page.getCustomersList();
  //   console.log('customers length : > ', customers.length);
  //   expect(browser.getCurrentUrl()).toContain('customers');
  //   expect(customers.length).toBeGreaterThan(0);
  // });

  // it('should display Promotions List', async function() {
  //   await page.getDashboardPromotionsButton().click();
  //   await browser.sleep(1000);

  //   const promotions = await page.getPromotionsList();
  //   console.log('promotions length : > ', promotions.length);
  //   expect(browser.getCurrentUrl()).toContain('promotions');
  //   expect(promotions.length).toBeGreaterThan(0);
  // });

  // it('should display Personal Setting', async function() {
  //   await page.getDashboardSettingsButton().click();
  //   await page.getDashboardPersonalSettingsButton().click();
  //   await browser.sleep(1000);
  //   expect(browser.getCurrentUrl()).toContain('personal');
  // });

  // it('should display Restaurant Setting', async function() {
  //   await page.getRestaurantInfoButton().click();
  //   await browser.sleep(1000);
  //   expect(browser.getCurrentUrl()).toContain('restaurant');
  // });

  // it('should display Restaurant Bank Accounts page', async function() {
  //   await page.getRestaurantBankAccountsButton().click();
  //   await browser.sleep(1000);
  //   expect(browser.getCurrentUrl()).toContain('account');
  // });

  // it('should successfully log out', async function() {
  //   await page.getDashboardSettingsButton().click();
  //   await page.getDashboardLogoutButton().click();
  //   await browser.sleep(1000);

  //   expect(browser.getCurrentUrl()).toContain('login');
  // });

  afterAll(() => {
    console.log('all Done');
    browser.sleep(1000);
  });
});
