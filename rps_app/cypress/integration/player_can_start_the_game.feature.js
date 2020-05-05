describe('User can start the game', () => {
  it('Allows the player to pick weapons', () => {
  cy.visit('http://localhost:3000/');
  cy.get('button#idweapons).click();
  })
})
