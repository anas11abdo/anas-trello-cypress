class CreateBoardAssertion{
    checkBoardNameContainValue(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="board-name-display"]').should('contain','Anas First Board').and('be.visible');
            });
    return this;
    }
    }
    export default CreateBoardAssertion;