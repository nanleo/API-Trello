// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createBoard', (boardName) => {
    const key = Cypress.env('trelloApiKey');
    const token = Cypress.env('trelloApiToken');

    cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/boards/?name=${boardName}&key=${key}&token=${token}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.id;
    });
});

Cypress.Commands.add('createList', (boardId, listName) => {
    const key = Cypress.env('trelloApiKey');
    const token = Cypress.env('trelloApiToken');

    cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${key}&token=${token}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.id;
    });
});

Cypress.Commands.add('createCard', (listId, cardName) => {
    const key = Cypress.env('trelloApiKey');
    const token = Cypress.env('trelloApiToken');

    cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards?name=${cardName}&idList=${listId}&key=${key}&token=${token}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body.id;
    });
});

Cypress.Commands.add('deleteCard', (cardId) => {
    const key = Cypress.env('trelloApiKey');
    const token = Cypress.env('trelloApiToken');

    cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${cardId}?key=${key}&token=${token}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});

Cypress.Commands.add('deleteBoard', (boardId) => {
    const key = Cypress.env('trelloApiKey');
    const token = Cypress.env('trelloApiToken');

    cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/boards/${boardId}?key=${key}&token=${token}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});