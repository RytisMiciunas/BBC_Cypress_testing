/// <reference types="cypress" />
const { url, homePage, textInPages, navButtonsLocatorAndUrl } = require('../../support/selectors')
const { clickOnNavButtonFooter } = require("../../support/functions");


describe('Test header and footer of homepage', () => {

    it('Test Case 5. Test BBC homepage logo', () => {
        cy.get(homePage.newsButtons).eq(0).click({force: true});
        cy.url().should('eq', url.newsPage);
        cy.get(homePage.logo).eq(0).click({force: true});
        cy.url().should('eq', url.landingPage);
    });

    it('Test Case 6. Test BBC homepage hamburger', () => {
        cy.get(homePage.hamburger).click({force: true});
        cy.get(homePage.weatherButtons).eq(1).should('exist');
    });

    it('Test Case 7. Test BBC homepage registration button', () => {
        cy.get(homePage.registerButton).click({force: true});
        cy.contains(textInPages.agePageVerificationText).should('be.visible');

    });

    it('Test Case 8. Test BBC homepage sign in button', () => {
        cy.get(homePage.signInButton).click({force: true});
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
        cy.get(homePage.audioButtons).eq(0).scrollIntoView().click({force: true});
        cy.origin(url.BBCCoUkWeb, {args: textInPages}, (textInPages) => {
            cy.contains(textInPages.audioPageVerificationText).should('be.visible');
            cy.go('back');
        });
        cy.get(homePage.weatherButtons).eq(1).scrollIntoView().click({force: true});
        cy.url().should('eq', url.weatherPage);
        cy.go('back');
        cy.get(homePage.BBShopButton).scrollIntoView().click({force: true});
        cy.url().should('eq', url.BBCShopPage);
        
    });

    it('Test Case 12. Term of Use, About the BBC, Privat Policy, Cookies, Accessability Help button test', () => {
        cy.get(homePage.termsOfuseButton).scrollIntoView().click({force: true});
        cy.origin(url.BBCCoUkWeb, {args: url}, (url) => {
            cy.url().should('eq', url.termsOfUsePage);
            cy.go('back');
        });

        cy.get(homePage.aboutTheBBCButton).scrollIntoView().click({force: true});
        cy.origin(url.BBCCoUkWeb, {args: url}, (url) => {
            cy.url().should('eq', url.aboutTheBBCPage);
            cy.go('back');
        });

        cy.get(homePage.privatPolicyButton).scrollIntoView().click({force: true});
        cy.url().should('eq', url.privatPolicyPage);
        cy.go('back');
        
        cy.get(homePage.cookiesButton).scrollIntoView().click({force: true});
        cy.url().should('eq', url.cookiesPage);
        cy.go('back');

        cy.get(homePage.accessabilityHelpButton).scrollIntoView().click({force: true});
        cy.origin(url.BBCCoUkWeb, {args: url}, (url) => {
            cy.url().should('eq', url.accessabilityHelpPage);
        });
    });

    it('Test Case 13. Contact The BBC, Advertise With Us, Do Not Share Or Sell Info, Contact Technical Support, Read About Our Approach To External Linking button test', () => {
        cy.get(homePage.contactTheBBCButton).scrollIntoView().click({force: true});
        cy.origin(url.BBCCoUkWeb, {args: url}, (url) => {
            cy.url().should('eq', url.contactTheBBCPage);
            cy.go('back');
        });

        cy.get(homePage.advertiseWithUsButton).scrollIntoView().click({force: true});
        cy.url().should('eq', url.advertiseWithUsPage);
        cy.go('back');

        cy.get(homePage.doNotShareOrSellMyInfoButton).eq(0).scrollIntoView().click({force: true});
        cy.url().should('eq', url.doNotShareOrSellMyInfoPage);
        cy.go('back');
        
        cy.get(homePage.contactTechnicalSupportButton).scrollIntoView().click({force: true});
        cy.url().should('eq', url.ContactTechnicalSupportPage);
        cy.go('back');

        cy.get(homePage.readAboutOurApproachToExternalLinkingButton).scrollIntoView().click({force: true});
        cy.origin(url.BBCCoUkWeb, {args: url}, (url) => {
            cy.url().should('eq', url.readAboutOurApproachToExternalLinkingpage);
        });
    });
});
