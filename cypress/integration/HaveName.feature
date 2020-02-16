Feature: Enter name as required
As a user, when I'm on the advertisement form view, I must have a name.

Background: Go to Ad form
Given I go to the advertisement form view

Scenario: The name is required
Then I see that the name field is required