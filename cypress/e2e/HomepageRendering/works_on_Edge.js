/// <reference types="cypress" />

describe('Make sure BBC.com loads properly on edge', () => {

    it('Test Case 16. Edge page opens', () => {
        cy.get('body').should('be.visible');
    });
});
