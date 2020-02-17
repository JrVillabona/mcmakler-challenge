Feature: See the ad updated in the list
As a user, after I update an advertisement, I should see the updated entry in the list.

Background: Create Ad
Given I create an Advertisement

Scenario: Show the updated name of the Ad in the list
Given I go to the list view
And I click on an existing ad
When I update the ad name with "Amazing Place"
And I click on Save button
Then I see the name of the Ad updated in the list with "Amazing Place"

Scenario: Show the updated street of the Ad in the list
Given I go to the list view
And I click on an existing ad
When I update the ad street with "Gitschiner Str 23"
And I click on Save button
Then I see the street of the Ad updated in the list with "Gitschiner Str 23"

Scenario: Show the updated rooms of the Ad in the list
Given I go to the list view
And I click on an existing ad
When I update the ad rooms with 1
And I click on Save button
Then I see the rooms of the Ad updated in the list with 1

Scenario: Show the updated price of the Ad in the list
Given I go to the list view
And I click on an existing ad
When I update the ad price with 987000
And I click on Save button
Then I see the price of the Ad updated in the list with 987000