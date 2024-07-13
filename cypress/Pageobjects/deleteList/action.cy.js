class DeleteListActions{
    chooseTheBorad(){
        cy.origin("https://trello.com",()=>{
            cy.get('.boards-page-board-section-list-item').eq(0).click();
            });
    return this;
    }
    clicksOnListMenu(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="OverflowMenuHorizontalIcon"]').eq(1).click();
            });
    return this;
    }
    clicksOnArchiveListButton(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-actions-archive-list-button"]').click();
            });
    return this;
    }
    }

    export default DeleteListActions;