/// <reference types="cypress" />

describe('Make sure BBC.com loads properlly', () => {

    it('Test Case 15. Firefox page opens', () => {
        cy.get('body').should('be.visible');
    });
});
