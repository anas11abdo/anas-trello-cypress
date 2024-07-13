class HideTemplateActions{
clicksOnCardTemplate(){
    cy.findByTestId("trello-card").eq(0).click();
    cy.wait(2000);
return this;
}
clicksOnMoveCard(){
        cy.findByTestId("card-back-archive-button").click();
        cy.findByTestId("CloseIcon").eq(0).click();
return this;
}
}

export default HideTemplateActions;