import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../page-objects/FormAdPage'
import ListViewPage from '../../page-objects/ListViewPage'

When('I update the ad name with {string}', newname => {
	FormAdPage.fillName(newname)
})

When('I update the ad street with {string}', newstreet => {
	FormAdPage.fillStreet(newstreet)
})

When('I update the ad rooms with {int}', newrooms => {
	FormAdPage.fillRooms(newrooms)
})

When('I update the ad price with {int}', newprice => {
	FormAdPage.fillPrice(newprice)
})

Then('I see the name of the Ad updated in the list with {string}', newname => {
	ListViewPage.containsName(newname)
})

Then('I see the street of the Ad updated in the list with {string}', newstreet => {
	ListViewPage.containsStreet(newstreet)
})

Then('I see the rooms of the Ad updated in the list with {int}', newrooms => {
	ListViewPage.containsRooms(newrooms)
})

Then('I see the price of the Ad updated in the list with {int}', newprice => {
	ListViewPage.containsPrice(newprice)
})
