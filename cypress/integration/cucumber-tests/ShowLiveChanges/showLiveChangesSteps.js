import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../../support/page-objects/ListViewPage'
import FormAdPage from '../../../support/page-objects/FormAdPage'

When('I click on reload button', () => {
	ListViewPage.clickOnReload()
})

Then('I should see the live changes', () => {
	ListViewPage.validateGetRequest()
})
