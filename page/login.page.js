const { GeneralPage } = require('./page');
const emailField ='[formcontrolname="email"]'
const passwordField ='[formcontrolname="password"]'
const loginButton ='[class*="accent flow-task-button ng-star-inserted"]'
const logoOfPrivate ='[src="assets/images/mypass-logo.svg"]'

class LoginPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    async setEmailField(login) {
        await super.setValue(emailField, login);
}
    async setPasswordField(password) {
        await super.setValue(passwordField, password);
    }
    
    async clickLoginButton() {
        await super.clickElement(loginButton);
    }
    async getLogoOfPrivate() {
        return await super.findElement(logoOfPrivate)
    }
    async open() {
        await this.page.goto('/')
        //await super.openURL('/')
    }

}
module.exports = { LoginPage };