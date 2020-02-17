Feature: Press the escape key to close the form
As a user, when I create or edit an advertisement, I can press close the form by pressing escape.

Background: Go to the Ad form
Given I go to the advertisement form view

Scenario: Press the escape key with the form empty
When I press the escape key
Then I should not see the form
And I am on the list view

Scenario: Press the escape key with the form full
When I fill out the form only with "Ad Name" and 1300000
And I press the escape key
Then I should not see the form
And I am on the list view

Scenario: Press the escape key with the form full
When I fill out the form with "Ad Name", "TorstraBe 19", 3 and 2300000
And I press the escape key
Then I should not see the form
And I am on the list view
