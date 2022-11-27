const { GeneralPage } = require('./page');
const subscriptionLink ='[href="/secure/settings/manage-subscription"]'
const subscriptionButton='[class="accent"]'
const subscriptionBusinessName='[id="businessName"]'
const subscriptionBillingEmail='[id="email"]'
const currencySelect='[formcontrolname="selection"]'
const currencyAUD='(//span[text()="AUD"])[1]'
const subscriptionSaveButton='[class="ng-star-inserted accent raised"]'
const subscriptionSelectPersonal='[label="name"]'
const subscriptionFiveToNineteenPersonalSelect='text="5 to 19 personnel"'
const subscriptionSelectFirstTariffButton='(//button[text()=" Select "])[1]'
const subscriptionNextButton='[class="ng-star-inserted accent raised"]'
const subscriptionCreditCard='[formcontrolname="payer"]'
const subscriptionTotal='[class="total"]'

class PrivateSettingsPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    async clickSubscriptionLink() {
        await super.clickElement(subscriptionLink);
    }
    async clickSubscriptionButton() {
        await super.clickElement(subscriptionButton);
    }
    async setSubscriptionBusinessName(password) {
        await super.setValue(subscriptionBusinessName, password);
    }
    async setSubscriptionBillingEmail(password) {
        await super.setValue(subscriptionBillingEmail, password);
    }
    async clickCurrencySelect(){
        await super.clickElement(currencySelect);
    }
    async clickAUD(){
        await super.clickElement(currencyAUD);
    }
    async clickSubscriptionSaveButton(){
        await super.clickElement(subscriptionSaveButton);
    }
    async clickSubscriptionSelectPersonal(){
        await super.clickElement(subscriptionSelectPersonal);
    }
    async clickSubscriptionFiveToNineteenPersonalSelect(){
        await super.clickElement(subscriptionFiveToNineteenPersonalSelect);
    }
    async clickSubscriptionSelectFirstTariffButton(){
        await super.clickElement(subscriptionSelectFirstTariffButton);
    }
    async clickSubscriptionNextButton(){
        await super.clickElement(subscriptionNextButton);
    }
    async clickSubscriptionCreditCard(){
        await super.clickElement(subscriptionCreditCard);
    }
    async getSubscriptionTotalOfPrivate() {
        return await super.findElement(subscriptionTotal)
    }


   
}
module.exports = { PrivateSettingsPage }