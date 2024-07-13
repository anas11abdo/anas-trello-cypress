class UpdateTemplateNameActions{
clicksOnCardTemplate(){
    cy.findByTestId("trello-card").eq(0).click({force: true});
    cy.wait(2000);
return this;
}
clicksOnCreateTemplateTitle(){
        cy.findByTestId("card-back-title-input").click({focus:true});
return this;
}
typeInNewTemplateName(newCardTemplatename){
        cy.findByTestId("card-back-title-input").clear().type(newCardTemplatename + "{enter}");
        cy.findByTestId("CloseIcon").eq(0).click();
return this;
}
}

export default UpdateTemplateNameActions;