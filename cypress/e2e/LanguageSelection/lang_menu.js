/// <reference types="cypress" />

const { homePage, url } = require("../../support/selectors");

describe('Make sure BBC.com loads properlly', () => {

    beforeEach(() => {
        cy.get(homePage.languageDropbox).scrollIntoView().should('exist').click({force: true});
    });

    it('Test Case 32.1 Test language dropdown Portugal', () => {
        cy.get(homePage.portugueseOption).click({force: true});
        cy.url().should('eq',url.portugueseUrl);
    });

    it('Test Case 32.2 Test language dropdown Turkia', () => {
        cy.get(homePage.turkishOption).click({force: true});
        cy.url().should('eq', url.turkishUrl);
    });

    it('Test Case 32.3 Test language dropdown Yoruba', () => {
        cy.get(homePage.yorubaOption).click({force: true});
        cy.url().should('eq', url.yorubaUrl);
    });
});
