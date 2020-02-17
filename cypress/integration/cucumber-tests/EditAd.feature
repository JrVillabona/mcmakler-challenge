Feature: Edit an advertisement

As a user, when I'm on the list view, I would like to click on an entry in the list to edit it.

Background: Create Ad
Given I create an Advertisement

Scenario: Go to the edit form
Given I go to the list view
And I click on an existing ad
Then I am on the advertisement form

Scenario: Go to the edit form and click on cancel button
Given I go to the list view
And I click on an existing ad
When I click on the cancel button
Then I am on the list view

Scenario: Go to the form to edit all data of an existing Ad
Given I go to the list view
And I click on an existing ad
When I fill out the form with "Beauty", "Street Center", 2 and 785000
And I click on Save button
Then I am on the list view

Scenario: Go to the form to edit only the name and price of an existing Ad
Given I go to the list view
And I click on an existing ad
When I fill out the form only with "Beauty" and 785000
And I click on Save button
Then I am on the list view
