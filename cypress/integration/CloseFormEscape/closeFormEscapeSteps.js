import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../page-objects/FormAdPage'

When('I press the escape key', () => {
	cy.get('#input_0').type('{esc}')
})
