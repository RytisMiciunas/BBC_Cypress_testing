const { cookies, signIn, url } = require('./selectors')


const acceptCookies = () => {
    cy.wait(2000);
    cy.get('body').then(($body) => {
        if ($body.find(cookies.IFRAME).is(":visible")) {
            cy.get(cookies.IFRAME).then(($iframe) => {
                cy.wrap($iframe)
                    .its(cookies.IFRAME_BODY)
                    .find(cookies.IFRAME_AGREE_BUTTON)
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
    cy.get(signIn.continueButton).click({ force: true });
    cy.get(signIn.enterPasw).type(signIn.userPasw);
    cy.get(signIn.signInButton).click({ force: true });
};

const clickOnNavButtonHeader = (selector, url) => {
    cy.get(selector).eq(0).click({ force: true });
    cy.url().should('eq', url);
};

const clickOnNavButtonFooter = (selector, url) => {
    cy.get(selector).eq(1).scrollIntoView().click({ force: true });
    cy.url().should('eq', url);
};


const clickOnNavLinksInFooter = (selector, pageUrl) => {
    cy.get(selector).eq(0).scrollIntoView().click({force: true});
    cy.url().should('eq', pageUrl);
    cy.go('back');
};



module.exports = {
    setViewPort,
    signInFunc,
    acceptCookies,
    clickOnNavButtonHeader,
    clickOnNavButtonFooter,
    clickOnNavLinksInFooter
};