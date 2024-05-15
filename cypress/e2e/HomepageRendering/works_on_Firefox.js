/// <reference types="cypress" />

describe('Make sure BBC.com loads properly on firefox', () => {

    it('Test Case 15. Firefox page opens', () => {
        cy.get('body').should('be.visible');
    });
});
