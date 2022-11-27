const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/login.page');
const { PrivateLeftSidebarPage } = require('../page/private.leftSideBar.page');
const { PrivateSettingsPage } = require('../page/private.settings.page');

test.describe('Subscription testing ', async () => {

    test('Should see the AUD currency in the payment', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.setEmailField('rkamran+u1@mypassglobal.com')
      await loginPage.setPasswordField('Pakistan123@');
      await loginPage.clickLoginButton();
      await expect(await loginPage.getLogoOfPrivate()).toBeVisible();

      const privateLeftSidebarPage = new PrivateLeftSidebarPage(page);
      await privateLeftSidebarPage.clickSettingsButton();

      const privateSettingsPage = new PrivateSettingsPage(page);
      await privateSettingsPage.clickSubscriptionLink()
      await privateSettingsPage.clickSubscriptionButton()
      await privateSettingsPage.setSubscriptionBusinessName('Babar Khan')
      await privateSettingsPage.setSubscriptionBillingEmail('babarkhan@mypassglobal.com')

      await privateSettingsPage.clickCurrencySelect()
      await privateSettingsPage.clickAUD()
      await privateSettingsPage.clickSubscriptionSaveButton()
      await privateSettingsPage.clickSubscriptionSelectPersonal()
      await privateSettingsPage.clickSubscriptionFiveToNineteenPersonalSelect()
      await privateSettingsPage.clickSubscriptionSelectFirstTariffButton()
      await privateSettingsPage.clickSubscriptionNextButton()
      await privateSettingsPage.clickSubscriptionCreditCard()
      await expect(await privateSettingsPage.getSubscriptionTotalOfPrivate()).toContainText('AUD');
    })

    test.afterEach(async ({ page }, testInfo) => {
      await testInfo.attach("After test screen", {
      body: await page.screenshot(),
      contentType: "image/png",
      });
    });

 })