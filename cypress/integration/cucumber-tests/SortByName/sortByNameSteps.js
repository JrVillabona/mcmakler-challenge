import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ListViewPage from '../../../support/page-objects/ListViewPage'
import FormAdPage from '../../../support/page-objects/FormAdPage'

Given('I see many entries in the list', () => {
	ListViewPage.seeEntriesList()
})
When('I sort in ascending order the list by name', () => {
	ListViewPage.sortAscending()
})

When('I sort in descending order the list by name', () => {
	ListViewPage.sortDescending()
})

Then('I should see the list sorted in ascending order', () => {
	ListViewPage.isSortByNameAscending()
})

Then('I should see the list sorted in descending order', () => {
	ListViewPage.isSortByNameDescending()
})
