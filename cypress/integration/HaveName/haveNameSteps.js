import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../page-objects/FormAdPage'

Then('I see that the name field is required', () => {
	FormAdPage.nameIsRequired()
})
