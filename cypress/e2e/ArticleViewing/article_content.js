/// <reference types="cypress" />
const { url, articlePage, textInPages } = require('../../support/selectors')

describe('Make sure BBC.com loads properlly', () => {
    beforeEach(() => {
        cy.visit(url.articleChosenToTest);
    });

    it('Test Case 20. Verify article content', () => {
        cy.title().should('include',textInPages.articleTitlePiece);
        cy.get('time').should('be.visible');
        cy.get(articlePage.videoPlayer).should('be.visible');
        cy.get(articlePage.imgOfArthur).should('be.visible');
    });

    it('Test Case 21. Article share button test', () => {
        cy.get(articlePage.shareButton).click({force: true});
        cy.get(articlePage.copyButton).click({force: true});
        cy.get(articlePage.shareDropbox).find(articlePage.copiedLink).should('exist');
        cy.get(articlePage.facebookButton).should('be.visible');
        cy.get(articlePage.twitterButton).should('be.visible');
        cy.get(articlePage.emailButton).should('be.visible');
});



    it.only('Test Case 22. Verify article content', () => {
        cy.get(articlePage.videoPlayer).should('be.visible');
        // cy.get(articlePage.videoPlayer).shadow().as('sRoot');
        cy.get('main');
        cy.get('article');
        cy.get('[data-testid="fabl-video-container"]');
        cy.get('[data-testid="fabl-video-container"]').then($el => {
            const text = $el.text();
            console.log('Element content:', text);
            // If you want this text to appear in your Cypress Command Log as well
            cy.log('Element content: ' + $el);
        });

        cy.get('[class="sc-7dd00c51-1 byEEBG"]').then($el => {
            const text = $el.text();
            console.log('Element content:', text);
            // If you want this text to appear in your Cypress Command Log as well
            cy.log('Element content: ' + $el);
        });
        // cy.get('#bbcMediaPlayer0');
        
        cy.get('[class="displayCover"]').shadow().get('smp-video-layout').shadow()
        .get('smp-video-layout').shadow().as('sRoot');
        cy.get('@sRoot').get('smp-core-controls').shadow().get('smp-play-pause-button').shadow().click({force:true});
        cy.get('smp-time-tip-seek').find('[class="time_tip_text"]').should('be.gt', 0);
    });
});
