/// <reference types="cypress" />
const { url, homePage, textInPages, navButtonsLocatorAndUrl, navLinksInFooterLocatorAndUrl, navLinksInFooterLocatorAndUrlWithOrigin } = require('../../support/selectors')
const { clickOnNavButtonFooter, acceptCookies, clickOnNavLinksInFooter, clickOnNavLinksInFooterWithOrigin } = require("../../support/functions");


describe('Test header and footer of homepage', () => {

    it('Test Case 5. Test BBC homepage logo', () => {
        cy.get(homePage.newsButtons).eq(0).click({ force: true });
        cy.url().should('eq', url.newsPage);
        cy.get(homePage.logo).eq(0).click({ force: true });
        cy.url().should('eq', url.landingPage);
    });

    it('Test Case 6. Test BBC homepage hamburger', () => {
        cy.get(homePage.hamburger).click({ force: true });
        cy.get(homePage.weatherButtons).eq(1).should('exist');
    });

    it('Test Case 7. Test BBC homepage registration button', () => {
        cy.get(homePage.registerButton).eq(0).click({ force: true });
        cy.contains(textInPages.agePageVerificationText).should('be.visible');

    });

    it('Test Case 8. Test BBC homepage sign in button', () => {
        cy.get(homePage.signInButton).eq(0).click({ force: true });
        cy.contains(textInPages.signInPageVerificationText).should('be.visible');

    });

    it('Test Case 9, 10. footer navigation buttons test', () => {
        navButtonsLocatorAndUrl.forEach((element) => {
            // Access the properties of each element
            const { url, selector } = element;
            // Call the function with the URL and selector
            clickOnNavButtonFooter(selector, url);
        });
    });

    it('Test Case 11. Audio, Weather and BBC Shop button test', () => {
        cy.get(homePage.audioButtons).eq(0).scrollIntoView().click({ force: true });
        cy.contains(textInPages.audioPageVerificationText).should('be.visible');
        cy.go('back');
        cy.get(homePage.weatherButtons).eq(1).scrollIntoView().click({ force: true });
        cy.url().should('eq', url.weatherPage);
        cy.go('back');
        cy.get(homePage.BBShopButton).scrollIntoView().click({ force: true });
        cy.url().should('eq', url.BBCShopPage);

    });

    it('Test Case 12-13. Footer links test', () => {
        navLinksInFooterLocatorAndUrl.forEach((element) => {
            // Access the properties of each element
            const { url, selector } = element;
            // Call the function with the URL and selector
            clickOnNavLinksInFooter(selector, url);
        });
    });
});

