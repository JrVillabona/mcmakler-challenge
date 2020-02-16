import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../../support/page-objects/ListViewPage'
import FormAdPage from '../../../support/page-objects/FormAdPage'

Then('I see that the name field is required', () => {
	FormAdPage.nameIsRequired()
})
