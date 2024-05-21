/// <reference types="cypress" />

const { setViewPort } = require("../../support/functions");
const { homePage, resolution } = require("../../support/selectors");

describe('Testing bbc.com responsivness using diferent resolutions', () => {

    it('Test Case 24. responsivness 1920x1080', () => {

        setViewPort(resolution.PC1);
        cy.get(homePage.navBar).should('be.visible');
        cy.get(homePage.leftArticleBlock).should('be.visible');
        cy.get(homePage.rightArticleBlock).should('be.visible');
        cy.get(homePage.centralArticle).should('be.visible');
        cy.get(homePage.signInButton).eq(0).should('be.visible');
        cy.get(homePage.registerButton).eq(0).should('be.visible');
        cy.shouldFitHorizontally('body');
    });

    it('Test Case 25. responsivness 1366x768', () => {
        setViewPort(resolution.PC2);
        cy.get(homePage.navBar).should('be.visible');
        cy.get(homePage.leftArticleBlock).should('be.visible');
        cy.get(homePage.rightArticleBlock).should('be.visible');
        cy.get(homePage.centralArticle).should('be.visible');
        cy.get(homePage.signInButton).eq(0).should('be.visible');
        cy.get(homePage.registerButton).eq(0).should('be.visible');
        cy.shouldFitHorizontally('body');

    });

    it('Test Case 26. responsivness 768x1024', () => {
        setViewPort(resolution.tablet1);
        cy.get(homePage.navBar).should('not.be.visible');
        cy.get(homePage.leftArticleBlock).should('be.visible');
        cy.get(homePage.centralArticle).should('be.visible');
        cy.get(homePage.signInButton).eq(0).should('be.visible');
        cy.get(homePage.registerButton).eq(0).should('be.visible');
        cy.shouldFitHorizontally('body');

    });

    it('Test Case 27. responsivness 810x1080', () => {
        setViewPort(resolution.tablet2);
        cy.get(homePage.navBar).should('not.be.visible');
        cy.get(homePage.leftArticleBlock).should('be.visible');
        cy.get(homePage.centralArticle).should('be.visible');
        cy.get(homePage.signInButton).eq(0).should('be.visible');
        cy.get(homePage.registerButton).eq(0).should('be.visible');
        cy.shouldFitHorizontally('body');

    });

    it('Test Case 28. responsivness 360x800', () => {
        setViewPort(resolution.phone1);
        cy.get(homePage.navBar).should('not.be.visible');
        cy.shouldNotFitVertically(homePage.allArticleBlock);
        cy.get(homePage.centralArticle).should('be.visible');
        cy.get(homePage.hamburger).click({force: true});
        cy.get(homePage.signInButton).eq(1).should('be.visible');
        cy.get(homePage.registerButton).eq(1).should('be.visible');
        cy.shouldFitHorizontally('body');

    });

    it('Test Case 29. responsivness 390x844', () => {
        setViewPort(resolution.phone2);
        cy.get(homePage.navBar).should('not.be.visible');
        cy.shouldNotFitVertically(homePage.allArticleBlock);
        cy.get(homePage.centralArticle).should('be.visible');
        cy.get(homePage.hamburger).click({force: true});
        cy.get(homePage.signInButton).eq(1).should('be.visible');
        cy.get(homePage.registerButton).eq(1).should('be.visible');
        cy.shouldFitHorizontally('body');

    });
});
