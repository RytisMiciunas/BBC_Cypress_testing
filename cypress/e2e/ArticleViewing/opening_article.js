/// <reference types="cypress" />
const { homePage } = require('../../support/selectors')

describe('Make sure BBC.com loads properlly', () => {

    it('Test Case 17. Verify left article has a picture and opens', () => {
        cy.get(homePage.leftArticleBlock).children().eq(0).as('article');
        cy.get('@article').find('img').should('exist');
        cy.get('@article').find('[href]').click({force: true});
        cy.url().should('include', 'news');
    });

    it('Test Case 18. Verify central article has a picture and opens', () => {
        cy.get(homePage.centralArticle).children().as('article');
        cy.get('@article').find('img').should('exist');
        cy.get('@article').find('[href]').click({force: true});
        cy.url().should('include', 'news');
    });

    it('Test Case 19. Verify right article opens', () => {
        cy.get(homePage.rightArticleBlock).children().eq(0).as('article');
        cy.get('@article').find('[href]').click();
        cy.url().should('include', 'news');
    });
});
