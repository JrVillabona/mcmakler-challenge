Feature: Enter a price with proper format

As a user, when I'm on the advertisement form view, I must provide a price with a proper format.

Background: Go to Ad form
Given I go to the advertisement form view

Scenario: Enter a price with correct format
When I enter 21323233 in the price
Then I should not see a error message

Scenario: Enter a price with a wrong format
When I enter "Test123$%" in the price
Then I should see a error message