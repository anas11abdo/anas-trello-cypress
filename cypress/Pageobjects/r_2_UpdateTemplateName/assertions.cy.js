class UpdateTemplateNameAssertion{
    checkTemplateNameUpdated(newCardTemplatename){
            cy.findByTestId("card-name").eq(0).should('contain', newCardTemplatename);
    return this;
    }
    }
    export default UpdateTemplateNameAssertion;