describe("Player can start the game", () => {
  beforeEach(() => {
   cy.visit("http://localhost:3000/");
  });

  it("Player can start", () => {
cy.get('button#start').click();
});

  it("player can choose weapons", () => {
  cy.get('button#paper').click();
  cy.get('button#rock').click();
  cy.get('button#scissors').click();
  
})
  });

