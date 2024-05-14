const acceptCookies = () => {
    cy.get('iframe[title="SP Consent Message"]').then(($iframe) => {        //accept cookies           
        cy.wrap($iframe).its("0.contentDocument.body").find('button[aria-label="I agree"]').click({ force: true });
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


module.exports = {  
    setViewPort,
    signInFunc,
    acceptCookies
};