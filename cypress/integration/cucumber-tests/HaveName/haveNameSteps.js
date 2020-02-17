import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../../support/page-objects/FormAdPage'

Then('I see that the name field is required', () => {
	FormAdPage.nameIsRequired()
})

When('I write {string} but then clear the name field', name => {
	FormAdPage.fillName(name)
	FormAdPage.clearName()
})
Then('I see a required error in name', () => {
	FormAdPage.errorRequiredIsVisible()
})
