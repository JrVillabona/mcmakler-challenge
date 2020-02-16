Feature: Sort the list by name in ascending and descending order
As a user, when I'm on the list view, 
I can sort the list entries by name, in ascending and descending order.

Background: Go to the listview
Given Create Data Advertisements
And I go to the list view

Scenario: Order the list entries by name in ascending order
Given I see many entries in the list
When I sort in ascending order the list by name
Then I should see the list sorted in ascending order

Scenario: Order the list entries by name in descensing order
Given I see many entries in the list
When I sort in descending order the list by name
Then I should see the list sorted in descending order
