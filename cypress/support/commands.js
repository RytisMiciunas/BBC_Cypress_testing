// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })options
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, ) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('shouldFitHorizontally', (selector) => {
    cy.get(selector).first().then(element => {
        const elementWidth = element[0].offsetWidth;
        cy.window().then(win => {
            expect(elementWidth, 'Horizontal size check').to.be.lte(win.innerWidth);
        });
    });
});

Cypress.Commands.add('shouldNotFitVertically', (selector) => {
    cy.get(selector).first().then(element => {
        const elementHeight = element[0].offsetHeight;
        cy.window().then(win => {
            expect(elementHeight, 'Vertical size check').to.not.be.lt(win.innerHeight);
        });
    });
});

Cypress.Commands.add('findWordInFoundArticles', (selector, word) => {
    cy.get(selector).then($parent => {
        // Function to recursively search text in descendants
        const searchTextInDescendants = ($element) => {
            let found = false;
            // Check if the current element contains the word
            if ($element.text().includes(word)) {
                cy.log(`Found "${word}" in element:`, $element.get(0)); // Log the raw DOM element
                found = true; // Mark as found
            }
            // Iterate over each child element
            $element.children().each(function () {
                // Recurse into this child element
                if (searchTextInDescendants(Cypress.$(this))) {
                    found = true;
                    return false; // Break the jQuery 'each' loop if the word is found in descendants
                }
            });
            return found; // Return the status of the search, true if found, false otherwise
        };

        // Start the recursive search from the parent element
        const found = searchTextInDescendants($parent);
        if (!found) {
            cy.log(`No descendant contains the word "${word}".`);
        }
    });
});


