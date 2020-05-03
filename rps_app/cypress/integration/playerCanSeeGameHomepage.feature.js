describe('Homepage', () => {
  it('successfully renders',() => {
    cy.visit('http://localhost:3000');
    cy.get('#footer').should('contain', 'Made with React 16.12.0');
  })
})