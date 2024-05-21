/// <reference types="cypress" />

describe('Make sure BBC.com loads properly', () => {

    it('Test Case 1. On page load return status 200', () => {
        cy.request('/').then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
