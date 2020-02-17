import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../../support/page-objects/ListViewPage'

When('I press the enter key', () => {
	cy.get('#input_3').type('{enter}')
})

Then('I see the ad in the list with its {string} and {int}', (name, price) => {
	ListViewPage.containsName(name)
	ListViewPage.containsPrice(price)
})
