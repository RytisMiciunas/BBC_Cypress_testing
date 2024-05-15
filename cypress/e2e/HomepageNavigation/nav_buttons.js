/// <reference types="cypress" />
const { url, homePage, navButtonsLocatorAndUrl } = require('../../support/selectors')
const { clickOnNavButtonHeader } = require("../../support/functions");


describe('Navigation buttons', () => {

    it.only('Test Case 2, 3, 4. header navigation buttons test', () => {
        navButtonsLocatorAndUrl.forEach((element) => {
            // Access the properties of each element
            const { url, selector } = element;
        
            // Call the function with the URL and selector
            clickOnNavButtonHeader(selector, url);
        });
        
        
    });

   
})
