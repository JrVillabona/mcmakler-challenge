import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../../support/page-objects/ListViewPage'
import FormAdPage from '../../../support/page-objects/FormAdPage'

When('I click on new ad button', () => {
	ListViewPage.clickOnNewAdButton()
})
