class HideTemplateAssertion{
    checkTemplateHidden(Templatename){
            cy.findByTestId("TemplateCardIcon").click();
            cy.get(".ibyXr1sKzVQ5MS").should('contain', Templatename);
    return this;
    }
    }
    export default HideTemplateAssertion;