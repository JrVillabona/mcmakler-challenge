class FormAdPage {
	static isVisible() {
		cy.get('.md-subhead').should('be.visible')
	}

	static isNotVisible() {
		cy.get('.md-subhead').should('not.be.visible')
	}

	static fillName(name) {
		cy.get('#input_0')
			.clear()
			.type(name)
	}

	static fillStreet(street) {
		cy.get('#input_1')
			.clear()
			.type(street)
	}

	static fillRooms(room) {
		cy.get('#input_2')
			.clear()
			.type(room)
	}

	static fillPrice(price) {
		cy.get('#input_3')
			.clear()
			.type(price)
			.tab()
	}

	static nameIsRequired() {
		cy.get('label').should('have.class', 'md-required')
		//.and('have.for', 'input_0')
	}

	static priceIsRequired() {
		cy.get('#input_3').should('have.class', 'md-required')
	}

	static saveAd() {
		cy.get('[ng-disabled="$ctrl.disableSave"]').click()
	}

	static cancelAd() {
		cy.contains('CANCEL').click()
	}

	static saveAdIsEnabled() {
		cy.get('[ng-disabled="$ctrl.disableSave"]').should('not.be.disabled')
	}

	static saveAdIsDisabled() {
		cy.get('[ng-disabled="$ctrl.disableSave"]').should('be.disabled')
	}

	static errorMessageIsVisible() {
		cy.xpath('//div[@ng-message="pattern"]').should('be.visible')
	}

	static errorMessageIsNotVisible() {
		cy.xpath('//div[@ng-message="pattern"]').should('not.be.visible')
	}
}

export default FormAdPage
