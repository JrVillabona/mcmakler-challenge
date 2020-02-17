import { When } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../../support/page-objects/FormAdPage'

When('I click on the cancel button', () => {
	FormAdPage.cancelAd()
})
