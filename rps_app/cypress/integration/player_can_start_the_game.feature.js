describe('User can start the game', () => {
  it('Allows the player to play', () => {
  cy.visit('http://localhost:3000/');
  cy.get('button#start').click();
  cy.get('body').should('contain', 'Please choose your weapon, rock, paper or scissors')
  
  export class Game extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttonText: "Let's play!",
            title: "Rock Paper Scissors",
            shouldShowButton: 'visible'
          }   
    };


})
  })