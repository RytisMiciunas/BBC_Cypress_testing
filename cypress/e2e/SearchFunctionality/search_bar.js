/// <reference types="cypress" />

const { acceptCookies, chechFirst3Titles } = require("../../support/functions");
const { homePage, searchQueries } = require("../../support/selectors");

describe('Testing search functionality', { retries: { runMode: 0, openMode: 0, }, }, () => {
    beforeEach(() => {
        cy.get(homePage.searchIcon).click({ force: true });
    });

    it('Test Case 33. Inputting invalid value into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.invalidInput, { force: true });
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        chechFirst3Titles(searchQueries.invalidInput);
    });

    it('Test Case 34. Inputting valid one word query into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.oneWordValid, { force: true });
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        chechFirst3Titles(searchQueries.oneWordValid);

    });

    it('Test Case 35.1 Inputting valid two word query into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.twoWordsValid1, { force: true });
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        chechFirst3Titles(searchQueries.twoWordsValid1);

    });

    it('Test Case 35.2 Inputting valid two word query into search bar', () => {
        cy.get(homePage.searchBar).type(searchQueries.twoWordsValid2, { force: true });
        cy.get(homePage.searchEnterButton).click({ force: true });
        acceptCookies();
        chechFirst3Titles(searchQueries.twoWordsValid2);

    });
});
