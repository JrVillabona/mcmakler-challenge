import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../../support/page-objects/FormAdPage'

When('I fill out the form only with {string}', name => {
	FormAdPage.fillName(name)
})

When('I fill out the form only with {int}', price => {
	FormAdPage.fillPrice(price)
})

Then('I should see the save button active', () => {
	FormAdPage.saveAdIsEnabled()
})
Then('I should not see the save button active', () => {
	FormAdPage.saveAdIsDisabled()
})
