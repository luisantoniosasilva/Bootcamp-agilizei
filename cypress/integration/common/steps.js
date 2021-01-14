Given(/^que acesso o site$/, () => {
    cy.intercept('POST', '**//api/1/databases/userdetails/collections/newtable?**')
        .as('postNewtable');

    cy.intercept('POST', '**/api/1/databases/userdetails/collections/usertable?**')
        .as('postUsertable');

    cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**')
        .as('getNewtable');

    // URL
    cy.visit('Register.html');
});