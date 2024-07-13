class CreateListAssertion{
    checkListNameContainValue(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-name"]').should('contain','Anas First List').and('be.visible');
            });
    return this;
    }
    }
    export default CreateListAssertion;