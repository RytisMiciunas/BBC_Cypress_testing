/// <reference types="cypress" />

describe('Make sure BBC.com loads properly on chrome', () => {

    it('Test Case 14. Chrome page opens', () => {
        cy.get('body').should('be.visible');
    });
});
