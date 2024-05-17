/// <reference types="cypress" />
const { signInFunc } = require('../../support/functions');
const { url, homePage, signIn, subscriptionRelatedConstants } = require('../../support/selectors')

describe('Make sure subscribe and unsubscribe works properlly', () => {
    beforeEach(() => {
        cy.get(homePage.signInButton).eq(0).click({force:true});
        signInFunc();
        cy.get(subscriptionRelatedConstants.yourAccountButton, {timeout: 10000}).click({force: true});
        cy.get(subscriptionRelatedConstants.settingsButton).click({force: true});
        
    });
    
    it('Test Case 36. Subscribe', () => {
        cy.get(subscriptionRelatedConstants.BBCEmailsForYou).click({force: true});
        cy.get(subscriptionRelatedConstants.fakeSignIn).click({force: true});
        cy.get(subscriptionRelatedConstants.signUpButton, {timeout: 10000}).click({force: true});
        cy.get(subscriptionRelatedConstants.successMessageBlock, {timeout: 10000}).should('contain', subscriptionRelatedConstants.successMessage);

    });
    
    it('Test Case 37. Unsubscribe', () => {
        cy.get(subscriptionRelatedConstants.settingsOptionInMenu).eq(0).click({force: true});
        cy.get(subscriptionRelatedConstants.emailPreferencesButton).click({force: true});
        cy.get(subscriptionRelatedConstants.unsubscribeCheckbox).click({force: true}).should('not.be.checked');

    });
});
