/// <reference types="cypress" />

const { acceptCookies } = require("../../support/functions");
const { homePage, videoPage } = require("../../support/selectors");

describe('Testing video player functionality', () => {
    beforeEach(() => {
        cy.get(homePage.videoButtons).eq(0).click({ force: true });
        acceptCookies();
    });

    it('Test Case 31.1 Test stop button', () => {
        cy.get(videoPage.pauseButton).click();
        cy.get(videoPage.videoStatus).should('have.css', 'display', 'none');
    });

    it('Test Case 31.2 Test mute button', () => {
        cy.get(videoPage.muteButton).click({force: true});
        cy.get(videoPage.volumeBar).then(($volume) => {
            expect(parseFloat($volume.css('width'))).to.be.equal(0);

        });
    });
});
