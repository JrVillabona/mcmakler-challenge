import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../page-objects/FormAdPage'
import ListViewPage from '../../page-objects/ListViewPage'

When('I press the enter key', () => {
	cy.get('#input_3').type('{enter}')
})
