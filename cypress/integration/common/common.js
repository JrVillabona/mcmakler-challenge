import { Before, defineStep } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../support/page-objects/ListViewPage'
import FormAdPage from '../../support/page-objects/FormAdPage'

defineStep('I want to wait {int} milliseconds', time => {
	cy.wait(time)
})

defineStep('I see {string} in the title', title => {
	cy.title().should('include', title)
})

defineStep('I see {string} in the URL', url => {
	cy.url().should('include', url)
})

defineStep('I reload the browser', () => {
	cy.reload()
})

Before({ tags: '@clearData' }, () => {
	ListViewPage.clearTheAdvertisementList()
})

defineStep('I am on the list view', () => {
	ListViewPage.isVisible()
})

defineStep('I go to the list view', () => {
	ListViewPage.visit()
})

defineStep('I should not see the form', () => {
	FormAdPage.isNotVisible()
})

defineStep('I go to the advertisement form view', () => {
	ListViewPage.visit()
	ListViewPage.clickOnNewAdButton()
	FormAdPage.isVisible()
})

defineStep('I fill out the form with {string}, {string}, {int} and {int}', (name, street, rooms, price) => {
	FormAdPage.fillName(name)
	FormAdPage.fillStreet(street)
	FormAdPage.fillRooms(rooms)
	FormAdPage.fillPrice(price)
})

defineStep('I fill out the form only with {string} and {int}', (name, price) => {
	FormAdPage.fillName(name)
	FormAdPage.fillPrice(price)
})

defineStep('I click on Save button', () => {
	FormAdPage.saveAd()
})

defineStep('I click on an existing ad', () => {
	ListViewPage.clickOnAd()
})

defineStep('I am on the advertisement form', () => {
	FormAdPage.isVisible()
})

defineStep('I see the toast List changed', () => {
	ListViewPage.changeListIsVisible()
})

defineStep('I see the ad in the list with its {string}, {string}, {int} and {int}', (name, street, rooms, price) => {
	ListViewPage.containsNewAdd(name, street, rooms, price)
})

defineStep('I create an Advertisement', () => {
	ListViewPage.clearTheAdvertisementList()
	cy.request({
		method: 'POST',
		url: '/api/advertisements',
		body: {
			name: 'Relaxing House',
			street: 'TorstraBe 19',
			rooms: 3,
			price: '1250000'
		}
	})
})

defineStep('I update an Advertisement', () => {
	cy.request({
		method: 'PUT',
		url: '/api/advertisements/*',
		body: {
			name: 'Cool',
			street: 'Castropol',
			rooms: 1,
			price: '9999999'
		}
	})
})

defineStep('Create Data Advertisements', () => {
	ListViewPage.clearTheAdvertisementList()
	cy.request({
		method: 'POST',
		url: '/api/advertisements',
		body: {
			name: 'Center',
			street: 'Street 19',
			rooms: 3,
			price: '1250000'
		}
	})
	cy.request({
		method: 'POST',
		url: '/api/advertisements',
		body: {
			name: 'Downtown',
			street: 'Street 3',
			rooms: 2,
			price: '9090904'
		}
	})
	cy.request({
		method: 'POST',
		url: '/api/advertisements',
		body: {
			name: 'Attractive',
			street: 'Street 45',
			rooms: 1,
			price: '2333000'
		}
	})
	cy.request({
		method: 'POST',
		url: '/api/advertisements',
		body: {
			name: 'Beautiful',
			street: 'Street 45',
			rooms: 4,
			price: '1500000'
		}
	})
})
