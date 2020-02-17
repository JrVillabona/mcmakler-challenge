Feature: Create new advertisement

As a user, when I'm on the list view, I want to able to create new advertisements

Background: Background name
Given I go to the list view
When I click on new ad button

Scenario: Go to the ad new form from the list view
Then I am on the advertisement form

Scenario: Create a new Ad successfully with all data
Given I fill out the form with "Enjoyful", "Main St", 2 and 980000
When I click on Save button
Then I am on the list view

Scenario: Create a new Ad successfully only with name and price
Given I fill out the form only with "Enjoyful" and 980000
When I click on Save button
Then I am on the list view