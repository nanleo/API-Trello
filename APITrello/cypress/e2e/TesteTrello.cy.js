/// <reference types="cypress" />

describe('API teste Trello', () => {
  let boardId;
  let listId;
  let cardId;

  const boardName = 'Teste board';
  const listName = 'Lista teste';
  const cardName = 'Teste card';

  it('Cadastrar um board', () => {
    cy.createBoard(boardName).then((id) => {
      boardId = id;
    });
  });

  it('Cadastrar um card', () => {
    cy.createList(boardId, listName).then((id) => {
      listId = id;
      return cy.createCard(listId, cardName);
    }).then((id) => {
      cardId = id;
    });
  });

  it('Excluir um card', () => {
    cy.deleteCard(cardId);
  });

  it('Excluir um board', () => {
    cy.deleteBoard(boardId);
  });
});