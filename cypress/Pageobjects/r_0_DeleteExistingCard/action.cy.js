class DeleteCardActions{
createCard(cardname){
        cy.findByTestId("list-add-card-button").click();
        cy.findByTestId("list-card-composer-textarea").type(cardname + "{enter}");
        cy.findByTestId("CloseIcon").click();
        cy.wait(2000);
return this;
}

clicksOnTheCard(){
        cy.findByTestId("list-card").click();
return this;
}

clicksOnCardArchiveButton(){
        cy.findByTestId("card-back-archive-button").click();
return this;
}

clicksOnCardDeleteCardButton(){
        cy.findByTestId("card-back-delete-card-button").click();
return this;
}

clicksOnSubmitDeleteButton(){
        cy.get('[type="submit"]').click();
return this;
}

}

export default DeleteCardActions;