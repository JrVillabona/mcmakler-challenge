import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../../support/page-objects/ListViewPage'

When('I click on new ad button', () => {
	ListViewPage.clickOnNewAdButton()
})

Then('I see the message {string}', message => {
	ListViewPage.validateSuccessMessage(message)
})
