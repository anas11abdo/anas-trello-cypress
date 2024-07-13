class CreateTemplateActions{
clicksOnCardTemplateListButton(){
    cy.findByTestId("TemplateCardIcon").eq(0).click();
return this;
}
clicksOnCreateTemplateCardButton(){
        cy.findByTestId("create-new-template-card-button").click();
return this;
}
typeInCardName(cardTemplatename){
        cy.findByTestId("create-template-card-composer").type(cardTemplatename);
return this;
}
clickOnAddButton(){
        cy.findByTestId("new-template-card-submit-button").click();
        cy.wait(2000)
        cy.findByTestId("CloseIcon").eq(0).click();
        cy.wait(1000);
return this;
}
}

export default CreateTemplateActions;