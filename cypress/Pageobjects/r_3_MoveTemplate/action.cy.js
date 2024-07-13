class MoveTemplateActions{
clicksOnCardTemplate(){
    cy.findByTestId("trello-card").eq(0).click();
    cy.wait(2000);
return this;
}
clicksOnMoveCard(){
        cy.findByTestId("card-back-move-card-button").click();
return this;
}
selectTheList(list){
        cy.findByTestId("move-card-popover-select-list-destination").click();
        cy.get(".css-1tbvomj").eq(1).type(list + "{enter}");
return this;
}
clicksOnMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click();
return this;
}
}

export default MoveTemplateActions;