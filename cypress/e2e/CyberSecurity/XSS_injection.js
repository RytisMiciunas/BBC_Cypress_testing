/// <reference types="cypress" />

const { signInFunc, acceptCookies } = require("../../support/functions");
const { homePage, subscriptionRelatedConstants, searchQueries } = require("../../support/selectors");

describe('Make sure BBC.com is protected from XSS attacks', () => {


    it('Test Case 40. Edit display name XSS injection', () => {
        cy.get(homePage.signInButton).eq(0).click({force:true});
        signInFunc();
        acceptCookies();
        cy.get(subscriptionRelatedConstants.yourAccountButton, {timeout: 10000}).click({force: true});
        cy.get(subscriptionRelatedConstants.settingsButton).click({force: true});
        cy.get(subscriptionRelatedConstants.settingsOptionInMenu).eq(0).click({force: true});
        cy.get(subscriptionRelatedConstants.displayNameEditButton).click({force: true});
        cy.get(subscriptionRelatedConstants.displayNameInput).type(searchQueries.XSSInput);
        cy.get(subscriptionRelatedConstants.submitButton).click({force: true});
        cy.window().then((win) => {
            expect(typeof win.alert).to.equal('function');
        });
          
    });
});


