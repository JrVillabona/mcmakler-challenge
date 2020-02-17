const SUBHEAD = '.md-subhead'
const NAME = '#input_0'
const STREET = '#input_1'
const ROOMS = '#input_2'
const PRICE = '#input_3'
const SAVE_BUTTON = '[ng-disabled="$ctrl.disableSave"]'
const CANCEL_BUTTON = '[ng-click="$ctrl.cancel()"]'
const REQUIRED = '.md-required'
const INVALID_PRICE = '//div[@ng-message="pattern"]'
const NAME_REQUIRED = '.md-input-invalid > .md-input-messages-animation > .md-input-message-animation'

class FormAdPage {
	static isVisible() {
		cy.get(SUBHEAD).should('be.visible')
	}

	static isNotVisible() {
		cy.get(SUBHEAD).should('not.be.visible')
	}

	static fillName(name) {
		cy.get(NAME)
			.clear()
			.type(name)
	}

	static clearName() {
		cy.get(NAME)
			.clear()
			.tab()
	}

	static fillStreet(street) {
		cy.get(STREET)
			.clear()
			.type(street)
	}

	static fillRooms(rooms) {
		cy.get(ROOMS)
			.clear()
			.type(rooms)
	}

	static fillPrice(price) {
		cy.get(PRICE)
			.clear()
			.type(price)
			.tab()
	}

	static nameIsRequired() {
		cy.get(REQUIRED)
			.should('have.attr', 'for')
			.and('include', 'input_0')
	}

	static errorRequiredIsVisible() {
		cy.get(NAME_REQUIRED).should('be.visible')
	}

	static saveAd() {
		cy.get(SAVE_BUTTON).click()
	}

	static cancelAd() {
		cy.get(CANCEL_BUTTON).click()
	}

	static saveAdIsEnabled() {
		cy.get(SAVE_BUTTON).should('not.be.disabled')
	}

	static saveAdIsDisabled() {
		cy.get(SAVE_BUTTON).should('be.disabled')
	}

	static errorMessageIsVisible() {
		cy.xpath(INVALID_PRICE).should('be.visible')
	}

	static errorMessageIsNotVisible() {
		cy.xpath(INVALID_PRICE).should('not.be.visible')
	}
}

export default FormAdPage
