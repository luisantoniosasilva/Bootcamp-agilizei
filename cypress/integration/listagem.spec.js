/// <reference types="cypress" />

context('Listagem', () => {
    it('Listagem sem registros', () => {
        cy.intercept('**/api/1/databases/userdetails/collections/newtable?**', {
            method: 'GET',
            status: 200,
            fixture: 'webtable-get-vazio'
        }).as('getNewtable');

        cy.visit('WebTable.html');

        cy.get('div[role=row]').should('have.length', 1)
    });

    it('Listagem com apenas um registro', () => {
        
        cy.intercept('**/api/1/databases/userdetails/collections/newtable?**', {
            method: 'GET',
            status: 200,
            fixture: 'webtable-get-unico'
        }).as('getNewtable');

        cy.visit('WebTable.html');

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
        cy.get('@gridCellPhone').should('contain.text', '2587165766');
    });
});