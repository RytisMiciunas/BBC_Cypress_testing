/// <reference types="cypress" />

describe('Make sure BBC.com loads properlly', () => {

    it('Test Case 14. Chrome page opens', () => {
        cy.get('body').should('be.visible');
    });
});
