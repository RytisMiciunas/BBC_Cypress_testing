const acceptCookies = () => {
    cy.wait(2000);
    cy.get(mainFunctionLocators.BBC_BODY).then(($body) => {
      if ($body.find(mainFunctionLocators.IFRAME).is(":visible")) {
        cy.get(mainFunctionLocators.IFRAME).then(($iframe) => {
          cy.wrap($iframe)
            .its(mainFunctionLocators.IFRAME_BODY)
            .find(mainFunctionLocators.IFRAME_AGREE_BUTTON)
            .click({ force: true });
        });
      }
    });
};

const setViewPort = (resolution) => {
    cy.viewport(resolution.height, resolution.widht);
};

const signInFunc = () => {
    cy.get(signIn.enterEmail).type(signIn.userEmail);
    cy.get(signIn.continueButton).click({force: true});
    cy.get(signIn.enterPasw).type(signIn.userPasw);
    cy.get(signIn.signInButton).click({force: true});
};

const clickOnNavButtonHeader = (selector, url) => {
    cy.get(selector).eq(0).click({force: true});
    cy.url().should('eq', url);
};

const clickOnNavButtonFooter = (selector, url) => {
    cy.get(selector).eq(1).scrollIntoView().click({force: true});
    cy.url().should('eq', url);
};

module.exports = {  
    setViewPort,
    signInFunc,
    acceptCookies,
    clickOnNavButtonHeader,
    clickOnNavButtonFooter
};