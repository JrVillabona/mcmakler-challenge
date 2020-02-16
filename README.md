# The test has been done with Javascript, Cypress.io & Cucumber (BDD Framework)

Concept for Automation functional testing using Javascript, Cypress.io and Cucumber. It shows a couple of solutions for automation test suite for different user stories of admin-advertisement website. Javascript is the language I used to write the test code.

Cucumber, along with Gherkin, is the testing framework. Gherkin is the business language I used to write the tests in a “human readable” way. Cucumber helps capture test results as well.

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium. This enables you to write faster, easier and more reliable tests.

## Installation

First of all you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed. Once you have them, in order to install the tests, follow the next steps from terminal:

Clone the repository project:

```
git clone https://github.com/JrVillabona/mcmakler-challenge.git
cd mcmakler-challenge
```

Install the dependencies:

```
npm install
```

## Execution

In order to execute the tests, you just need to execute the following commands.

If you prefer in headless mode:

```
npm run test
```

Or if you want to perform with the Cypress console:

```
npm run cypress:open
```

Then select whether you want to run a particular feature or if you prefer to run all the features. Select the browser in which you want to run the tests, remember that Cypress supports Chrome, Edge, Firefox and Electron. After that, click on **Run all specs**.

## Generals

- In the folder `cypress/integration` there are two folders:
  `cypress/integration/common` contains the steps that are common and used in various features.
  `cypress/integration/cucumber-tests` contains the features that uses descriptive names (.features) and the folders with each of the steps.
- In file `cypress.json` there are config vars.
- In file `cypress/support/page-objects` there are page of project.

## Documentation

- Cypress: https://www.cypress.io/
- Cypress-Cucumber-Preprocessor : https://www.npmjs.com/package/cypress-cucumber-preprocessor
