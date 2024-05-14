/// <reference types="cypress" />

const { articlePage, url } = require("../../support/selectors");

describe('Make sure BBC.com loads properlly', () => {

    it('Test Case 23. Open article from another article', () => {
        cy.visit(url.articleChosenToTest);
        cy.get(articlePage.suggestedArticlesConteiner).click({force: true});
        cy.url().should('not.eq', url.articleChosenToTest);
    });
});
