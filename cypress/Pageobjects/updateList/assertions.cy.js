class UpdateListAssertion{
    checkListUpdated(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-name"]').should('contain','Anas First List After Update').and('be.visible');
            cy.get('[data-testid="card-front-badges"]').should('be.visible');
            });
    return this;
    }
    }
    export default UpdateListAssertion;