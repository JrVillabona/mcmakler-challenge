Feature: See the live changes on my list
As a user, when I'm on the list view and some one creates or updates an entry, 
I should receive proper information over WebSockets and see the live changes on my list.

Background:
Given I go to the list view
And I want to wait 4000 milliseconds

@clearData
Scenario: See the live changes after to create a new Ad
Given I create an Advertisement
And I see the toast List changed
When I click on reload button
Then I should see the live changes

Scenario: See the live changes after to update a new Ad
Given I update an Advertisement
And I see the toast List changed
When I click on reload button
Then I should see the live changes