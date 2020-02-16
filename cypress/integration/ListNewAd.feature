Feature: Show the new ad in the list
As a user, after I create a new advertisement, I should see the created entry in the list.

Scenario Outline: See in the list an Ad recently created
Given I go to the advertisement form view
When I fill out the form with "<name>", "<street>", <rooms> and <price>
And I click on Save button
Then I see the ad in the list with its "<name>", "<street>", <rooms> and <price>

Examples:
| name | street | rooms | price |
| Attractive | Hohen 123 | 3 | 1200000 |
| BigHouse | Stralauer 567 | 2 | 800000 |