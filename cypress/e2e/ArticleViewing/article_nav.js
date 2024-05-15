/// <reference types="cypress" />

const { articlePage, url } = require("../../support/selectors");

describe('Make sure navigation between articles is good', () => {
    it('Test Case 23. Open article from another article', () => {
        cy.visit(url.articleChosenToTest);
        
        cy.get(articlePage.dateContainerOfSuggestedArticles).eq(0).invoke('text').then((articlesDate) => {           
            cy.get(articlePage.suggestedArticlesConteiner).click({ force: true });
            cy.url().should('not.equal', url.articleChosenToTest);
            cy.get(articlePage.currentArticleReleaseDate).invoke('text').should('equal', articlesDate);
        });
    });
});
