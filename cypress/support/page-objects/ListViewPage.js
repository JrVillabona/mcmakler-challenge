const COLUMNS = '.md-column'
const TOAST = '.md-toast-content'
const RELOAD = '.md-action'
const NEW_AD_BUTTON = '.al-add__button'
const FIRST_AD = '(//td[@class="md-cell ng-binding"])[1]'
const SORT_BUTTON = '.md-sort-icon'
const NAMES_ELEMENTS = 'tr td:nth-child(1)'
const ENTRIES_LIST = '(//td[@class="md-cell ng-binding"])'

class ListViewPage {
	static visit() {
		cy.visit('/')
		this.isVisible()
	}

	static isVisible() {
		cy.get(COLUMNS).should('be.visible')
		cy.url().should('be.include', '/advertisements')
	}

	static changeListIsVisible() {
		cy.get(TOAST).should('be.visible')
	}

	static clickOnReload() {
		cy.get(RELOAD).click()
	}

	static clickOnNewAdButton() {
		cy.get(NEW_AD_BUTTON).click()
		cy.url().should('include', '/new')
	}

	static clickOnAd() {
		cy.xpath(FIRST_AD).click()
		cy.url().should('include', '/edit')
	}

	static containsName(name) {
		cy.contains(name).should('be.visible')
	}

	static containsStreet(street) {
		cy.contains(street).should('be.visible')
	}

	static containsRooms(rooms) {
		cy.contains(rooms).should('be.visible')
	}

	static containsPrice(price) {
		const formatter = new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 2
		})
		const priceFormatted = formatter.format(price).replace(/[^0-9.,]/g, '')
		cy.contains(priceFormatted).should('be.visible')
	}

	static sortAscending() {
		cy.get(SORT_BUTTON).click()
	}

	static sortDescending() {
		cy.get(SORT_BUTTON).dblclick()
	}

	static containsNewAdd(name, street, rooms, price) {
		this.containsName(name)
		this.containsStreet(street)
		this.containsRooms(rooms)
		this.containsPrice(price)
	}

	static isSortByNameAscending() {
		cy.get(NAMES_ELEMENTS).then($elements => {
			let strings = [...$elements].map($el => $el.textContent.trim())
			cy.wrap(strings).should('have.ordered.members', strings.sort())
		})
	}

	static isSortByNameDescending() {
		cy.get(NAMES_ELEMENTS).then($elements => {
			let strings = [...$elements].map($el => $el.textContent.trim())
			cy.wrap(strings).should('have.ordered.members', strings.reverse())
		})
	}

	static seeEntriesList() {
		cy.xpath(ENTRIES_LIST).should('be.visible')
	}

	static clearTheAdvertisementList() {
		cy.request('/api/advertisements/db/drop?confirm=y')
	}

	static validateGetRequest() {
		cy.server()
		cy.route('GET', 'api/advertisements').as('getAdvertisement')
		this.clickOnReload()
		cy.wait('@getAdvertisement')
			.its('status')
			.should('eq', 200)
	}
}

export default ListViewPage
