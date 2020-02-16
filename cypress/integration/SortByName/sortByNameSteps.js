import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FormAdPage from '../../page-objects/FormAdPage'
import ListViewPage from '../../page-objects/ListViewPage'

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
