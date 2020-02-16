Cypress.Commands.add('createAdvertisement', ({ name, street, room, price }) => {
	cy.get('#input_0').type(name)
	cy.get('#input_1').type(street)
	cy.get('#input_2').type(room)
	cy.get('#input_3').type(price)
})
