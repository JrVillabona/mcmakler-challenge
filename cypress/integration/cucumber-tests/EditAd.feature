Feature: Edit an advertisement

As a user, when I'm on the list view, I would like to click on an entry in the list to edit it.

Background: Add Advertisements
Given Create an Advertisement

Scenario: Edit an existing Ad
Given I go to the list view
When I click on an existing ad
Then I am on the advertisement form
