import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../../support/page-objects/FormAdPage'

When('I enter {int} in the price', price => {
	FormAdPage.fillPrice(price)
})

When('I enter {string} in the price', price => {
	FormAdPage.fillPrice(price)
})

Then('I should not see a error message', () => {
	FormAdPage.errorMessageIsNotVisible()
})

Then('I should see a error message', () => {
	FormAdPage.errorMessageIsVisible()
})
