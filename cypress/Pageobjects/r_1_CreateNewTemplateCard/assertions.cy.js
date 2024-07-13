class CreateTemplateAssertion{
    checkTemplateCreated(){
            cy.findByTestId("badge-card-template").should('be.visible');
    return this;
    }
    }
    export default CreateTemplateAssertion;