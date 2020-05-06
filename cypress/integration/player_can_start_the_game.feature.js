describe('User can start the game', () => {
  it('Allows the player to pick weapons', () => {
  cy.visit('http://localhost:3000/');
  cy.get('button#idpaper).click();
  cy.get('button#idrock).click();
  cy.get('button#idscissors).click();
  cy.get('button#idstart).click();

  })
})
