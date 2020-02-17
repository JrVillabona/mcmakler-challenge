import { When } from 'cypress-cucumber-preprocessor/steps'

When('I press the escape key', () => {
	cy.get('#input_0').type('{esc}')
})
