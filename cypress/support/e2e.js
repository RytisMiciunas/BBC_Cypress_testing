// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

beforeEach(() => {
    cy.visit('/'); // Correct the URL to include the protocol
    
    cy.get('iframe[title="SP Consent Message"]').then(($iframe) => {        //accept cookies           
        cy.wrap($iframe).its("0.contentDocument.body").find('button[aria-label="I agree"]').click({ force: true });
    });
    
}); 
// Alternatively you can use CommonJS syntax:
// require('./commands')