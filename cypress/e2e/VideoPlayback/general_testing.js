/// <reference types="cypress" />

const { acceptCookies } = require("../../support/functions");
const { homePage, videoPage } = require("../../support/selectors");

describe('Testing general video page functionality', () => {
    beforeEach(() => {
        cy.get(homePage.videoButtons).eq(0).click({ force: true });
        acceptCookies();
    });

    it('Test Case 30.1 Is video played on open', () => {
        cy.get(videoPage.progressBar).then(($element) => {
            // Get the width of the element
            const startingTime = $element.css('width');
            cy.wait(5000);
            cy.get(videoPage.progressBar).then(($finalElement) => {
                const finalTime = $finalElement.css('width');
                expect(parseFloat(finalTime)).to.be.greaterThan(parseFloat(startingTime));
            });

        });
    });

    it('Test Case 30.2 Is video control is visible on hover', () => {
        cy.get(videoPage.videoPlayer).trigger('mouseover').then(() => {
            cy.get(videoPage.secondaryControls).should('exist');
          });
          
    });
});
