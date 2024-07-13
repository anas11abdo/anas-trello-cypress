class CreateBoardActions{
clickOnCreateButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="AddIcon"]').click();
        });
    return this;
}
chooseOnCreateBoradButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="BoardIcon"]').eq(1).click();
        });
return this;
}
typeBoardTitle(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="create-board-title-input"]').type("Anas First Board");
        });
return this;
}
clickOnCreateBoradButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="create-board-submit-button"]').click();
        });
return this;
}
}

export default CreateBoardActions;