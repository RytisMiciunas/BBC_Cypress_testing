/// <reference types="cypress" />
const { acceptCookies } = require('../../support/functions');
const { url, articlePage, textInPages } = require('../../support/selectors')

describe('Article content validation', () => {
    beforeEach(() => {
        cy.visit(url.articleChosenToTest);
        acceptCookies();
    });

    it('Test Case 20. Verify article content', () => {
        cy.title().should('include',textInPages.articleTitlePiece);
        cy.get('time').should('be.visible');
        cy.get(articlePage.videoPlayer).should('be.visible');
        cy.get(articlePage.imgOfArthur).should('be.visible');
    });

    it.only('Test Case 21. Article share button test', () => {
        cy.get(articlePage.shareButton).click({force: true});
        cy.get(articlePage.copyButton).click({force: true});
        cy.get(articlePage.shareDropbox).find(articlePage.copiedLink).should('exist');
        cy.get(articlePage.facebookButton).should('be.visible');
        cy.get(articlePage.facebookButton).invoke('removeAttr', 'target').click();
        cy.get(articlePage.twitterButton).should('be.visible');
        cy.get(articlePage.emailButton).should('be.visible');
});



    it('Test Case 22. Verify article content', () => {
        cy.get(articlePage.videoPlayer).should('be.visible');
        cy.get(articlePage.pauseButton).click({force: true});
        cy.wait(5000);
        cy.get(articlePage.videoTime).then(($element) => {
            const videoTimePassed = parseFloat($element.css('time'));
            expect(videoTimePassed).to.not.be.equal(0);
        })
    });
});
