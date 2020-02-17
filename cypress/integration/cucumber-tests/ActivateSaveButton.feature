Feature: Activation of the save button
As a user, when I'm on the advertisement form view, the save button is not active as long the form is not valid.

Background:
Given I go to the advertisement form view

Scenario: The save button is not activated when the form is empty
Then I should not see the save button active

Scenario: The save button is activated after entering the name and price
When I fill out the form only with "Ad Name" and 1300000
Then I should see the save button active

Scenario: The save button is not activated after entering only the name
When I fill out the form only with "Ad Name"
Then I should not see the save button active

Scenario: The save button is not activated after entering only the price
When I fill out the form only with 1350000
Then I should not see the save button active

Scenario: The save button is activated after fill out all the form
When I fill out the form with "Ad Name", "TorstraBe 19", 3 and 2300000
Then I should see the save button active