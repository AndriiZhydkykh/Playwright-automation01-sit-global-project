const { GeneralPage } = require('./page');
const settingsButton ='[href="/secure/settings"]'


class PrivateLeftSidebarPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    async clickSettingsButton() {
        await super.clickElement(settingsButton);
    }
   
}
module.exports = { PrivateLeftSidebarPage }