/// <reference types="cypress" />

const { acceptCookies } = require("../../support/functions");
const { homePage, searchQueries } = require("../../support/selectors");

describe('Testing search functionality', () => {
    beforeEach(() => {
        cy.get(homePage.searchIcon).click({ force: true });
    });

    it('Test Case 33. Inputting invalid value into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.invalidInput);
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        cy.get(homePage.allArticlesTitles).then(($titles) => {
            // Make sure there are at least three titles
            if ($titles.length < 3) {
                $titles.each(($el) => {
                    // Assert that each element's text includes the keyword
                    expect($el.text(), `Check if "${$el.text()}" contains "${searchQueries.invalidInput}"`)
                        .to.include(searchQueries.invalidInput);
                });
            }
            else {
                // Check the first three titles for the keyword
                for (let i = 0; i < 3; i++) {
                    expect($titles.eq(i).text(), `Title ${i + 1}`).to.include(searchQueries.invalidInput);
                }
            }
        });
    });

    it('Test Case 34. Inputting valid one word query into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.oneWordValid);
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        cy.get(homePage.allArticlesTitles).then(($titles) => {
            // Make sure there are at least three titles
            if ($titles.length < 3) {
                $titles.each(($el) => {
                    // Assert that each element's text includes the keyword
                    expect($el.text(), `Check if "${$el.text()}" contains "${searchQueries.oneWordValid}"`)
                        .to.include(searchQueries.oneWordValid);
                });
            }
            else {
                // Check the first three titles for the keyword
                for (let i = 0; i < 3; i++) {
                    expect($titles.eq(i).text(), `Title ${i + 1}`).to.include(searchQueries.oneWordValid);
                }
            }
        });
    });

    it('Test Case 35.1 Inputting valid two word query into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.twoWordsValid1);
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        cy.get(homePage.allArticlesTitles).then(($titles) => {
            // Make sure there are at least three titles
            if ($titles.length < 3) {
                $titles.each(($el) => {
                    // Assert that each element's text includes the keyword
                    expect($el.text(), `Check if "${$el.text()}" contains "${searchQueries.twoWordsValid1}"`)
                        .to.include(searchQueries.twoWordsValid1);
                });
            }
            else {
                // Check the first three titles for the keyword
                for (let i = 0; i < 3; i++) {
                    expect($titles.eq(i).text(), `Title ${i + 1}`).to.include(searchQueries.twoWordsValid1);
                }
            }
        });
    });

    it('Test Case 35.2 Inputting valid two word query into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.twoWordsValid2);
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        cy.get(homePage.allArticlesTitles).then(($titles) => {
            // Make sure there are at least three titles
            if ($titles.length < 3) {
                $titles.each(($el) => {
                    // Assert that each element's text includes the keyword
                    expect($el.text(), `Check if "${$el.text()}" contains "${searchQueries.twoWordsValid2}"`)
                        .to.include(searchQueries.twoWordsValid2);
                });
            }
            else {
                // Check the first three titles for the keyword
                for (let i = 0; i < 3; i++) {
                    expect($titles.eq(i).text(), `Title ${i + 1}`).to.include(searchQueries.twoWordsValid2);
                }
            }
        });
    });
});
