import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../page-objects/ListViewPage'

When('I click on new ad button', () => {
	ListViewPage.clickOnNewAdButton()
})
