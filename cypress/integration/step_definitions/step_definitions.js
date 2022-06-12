import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Given I go to {string}', (url) => {
    cy.visit(url);
});

When('When I search {string}', (text) => {
    cy.type(text);
});

Then('Then I see {string}', (text) => {
    cy.get(text);
});
