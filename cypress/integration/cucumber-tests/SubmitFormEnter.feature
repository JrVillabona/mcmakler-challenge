Feature: Press the enter key to submit the form
As a user, when I create or edit an advertisement, I can press enter to submit the form.

Background: Go to the Ad form
Given I go to the advertisement form view

Scenario: Press the escape key with the form empty
When I press the enter key
Then I should not see the form
And I am on the list view

Scenario: Press the enter key with the form full
When I fill out the form with "Accessible", "Pobl 13", 2 and 1500000
And I press the enter key
Then I see the ad in the list with its "Accessible", "Pobl 13", 2 and 1500000
And I am on the list view

Scenario: Press the enter key only with the name and price full
When I fill out the form only with "Accesible" and 2000000
And I press the enter key
Then I see the ad in the list with its "Accessible" and 1500000
And I am on the list view