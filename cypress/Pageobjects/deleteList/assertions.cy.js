class DeleteListAssertion{
    checkListdeleted(){
        cy.origin("https://trello.com",()=>{
            cy.get('.QMKgZFIlTLiEJN').should('contain','List archived').and('be.visible')
            cy.get('[data-testid="CheckCircleIcon"]').should('be.visible')
            });
    return this;
    }
    }
    export default DeleteListAssertion;