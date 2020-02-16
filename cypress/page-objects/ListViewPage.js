class ListViewPage {
	static visit() {
		cy.visit('/')
	}

	static isVisible() {
		cy.get('.md-body').should('be.visible)')
		cy.url().should('be.include', '/advertisements')
	}

	static clickOnNewAdButton() {
		cy.xpath('//md-icon[contains(.,"add_circle_outline")]').click()
		cy.url().should('include', '/new')
	}

	static clickOnAd() {
		cy.xpath('(//td[@class="md-cell ng-binding"])[1]').click()
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
		cy.get('.md-sort-icon').click()
	}

	static sortDescending() {
		cy.get('.md-sort-icon').dblclick()
	}

	static containsNewAdd(name, street, rooms, price) {
		this.containsName(name)
		this.containsStreet(street)
		this.containsRooms(rooms)
		this.containsPrice(price)
	}

	static isSortByNameAscending() {
		cy.get('tr td:nth-child(1)').then($elements => {
			let strings = [...$elements].map($el => $el.textContent.trim())
			cy.wrap(strings).should('have.ordered.members', strings.sort())
		})
	}

	static isSortByNameDescending() {
		cy.get('tr td:nth-child(1)').then($elements => {
			let strings = [...$elements].map($el => $el.textContent.trim())
			cy.wrap(strings).should('have.ordered.members', strings.reverse())
		})
	}

	static seeEntriesList() {
		cy.xpath('(//td[@class="md-cell ng-binding"])').should('be.visible')
	}

	// static validateSuccessMessage(message) {
	// 	cy.get('.md-toast-text')
	// 		.should('be.visible')
	// 		.should('have.text', message)
	// }
}

export default ListViewPage
