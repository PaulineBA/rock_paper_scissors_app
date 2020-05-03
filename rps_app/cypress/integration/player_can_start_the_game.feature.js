describe('User can start the game', () => {
  it('Allows the player to play', () => {
  cy.visit('http://localhost:3000/');
  cy.get('button#start').click();
  cy.get('body').should('contain', 'Please choose your weapon: Rock, Paper or Scissors')
  
  export class Game extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttonText: "Let's play!",
            title: "Rock Paper Scissors",
            shouldShowButton: 'visible'
          }   
    };


