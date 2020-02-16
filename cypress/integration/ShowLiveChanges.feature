Feature: See the live changes on my list
As a user, when I'm on the list view and some one creates or updates an entry, 
I should receive proper information over WebSockets and see the live changes on my list.

Scenario: See the live changes after to create a new Ad
Given I go to the list view
When Some one ad is created
Then I should see the live changes

Scenario: See the live changes after to update an Ad
Given I go to the list view
When Some one ad is updated
Then I should see the live changes