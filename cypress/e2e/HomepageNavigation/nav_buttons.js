/// <reference types="cypress" />
const { url, homePage } = require('../../support/selectors')


describe('Navigation buttons', () => {


    it('Test Case 2. Homepage, News and Sport button test', () => {
        cy.get(homePage.newsButtons).eq(0).click({force: true});
        cy.url().should('eq', url.newsPage);
        cy.get(homePage.homeButtons).eq(0).click({force: true});
        cy.url().should('eq', url.landingPage);
        cy.get(homePage.sportButtons).eq(0).click({force: true});
        cy.url().should('eq', url.sportPage);
    });

    it('Test Case 3. Business, Innovation and Culture button test', () => {
        cy.get(homePage.businessButtons).eq(0).click({force: true});
        cy.url().should('eq', url.businessPage);
        cy.get(homePage.innovationButtons).eq(0).click({force: true});
        cy.url().should('eq', url.innovationPage);
        cy.get(homePage.cultureButtons).eq(0).click({force: true});
        cy.url().should('eq', url.culturePage);
    });

    it('Test Case 4. Travel, Earth, Video and Live button test', () => {
        cy.get(homePage.travelButtons).eq(0).click({force: true});
        cy.url().should('eq', url.travelPage);
        cy.get(homePage.earthButtons).eq(0).click({force: true});
        cy.url().should('eq', url.earthPage);
        cy.get(homePage.videoButtons).eq(0).click({force: true});
        cy.url().should('eq', url.videoPage);
        cy.get(homePage.liveButtons).eq(0).click({force: true});
        cy.url().should('eq', url.livePage);
    });
})
