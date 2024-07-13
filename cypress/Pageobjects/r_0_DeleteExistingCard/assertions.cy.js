class DeleteCardAssertion{
    checkCardDelete(listcard){
            cy.findByTestId(`${listcard}`).eq(0).should('exist')
    return this;
    }
    }
    export default DeleteCardAssertion;