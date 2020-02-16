import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../page-objects/FormAdPage'
import ListViewPage from '../../page-objects/ListViewPage'

Given('I am on the advertisement form', () => {
	ListViewPage.visit()
	ListViewPage.clickOnNewAdButton()
	FormAdPage.isVisible()
})

When('I fill out the form only with {string} and {int}', (name, price) => {
	FormAdPage.fillName(name)
	FormAdPage.fillPrice(price)
})

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