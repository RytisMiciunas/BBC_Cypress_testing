/// <reference types="cypress" />

const { acceptCookies } = require("../../support/functions");
const { homePage, searchQueries, url, weatherPage } = require("../../support/selectors");

describe('Making sure database is well protected', () => {

    it('Test Case 38. search bar SQL injection', () => {
        cy.get(homePage.searchIcon).click({force: true});
        cy.get(homePage.searchBar).type(searchQueries.SQLInjectionSearchBar, { force: true });
        cy.get(homePage.searchEnterButton).click();
        acceptCookies();
        cy.get(homePage.allArticlesTitles).should('have.length.gt', 0);
    });

    it('Test Case 39. Weather search bar SQL injection', () => {
        cy.visit(url.weatherPage);
        acceptCookies();
        cy.get(weatherPage.citySearchBar).type(searchQueries.SQLInjectionCitySearch);
        cy.get(weatherPage.searchButton).click();
        cy.get(weatherPage.citySearchBar).clear().type(searchQueries.vilnius);
        acceptCookies();
        cy.get(weatherPage.searchResults).should('have.length.gt', 0);
    });
});

