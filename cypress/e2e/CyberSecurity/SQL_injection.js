/// <reference types="cypress" />

const { homePage, searchQueries, url, weatherPage } = require("../../support/selectors");

describe('Making sure database is well protected', () => {

    it('Test Case 38. search bar SQL injection', () => {
        cy.get(homePage.searchIcon).click({force: true});
        cy.get(homePage.searchBar).type(searchQueries.SQLInjectionSearchBar, { delay: 200 });
        cy.get(homePage.searchEnterButton).click();
        cy.get(homePage.allArticlesTitles).should('have.length.gt', 0);
    });

    it('Test Case 39. Weather search bar SQL injection', () => {
        cy.visit(url.weatherPage);
        cy.get(weatherPage.citySearchBar).type(searchQueries.SQLInjectionCitySearch);
        cy.get(weatherPage.searchButton).click();
        cy.get(weatherPage.citySearchBar).clear().type(searchQueries.vilnius);
        cy.get(weatherPage.searchResults).should('have.length.gt', 0);
    });
});

