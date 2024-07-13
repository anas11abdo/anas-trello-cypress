class CreateListActions{
    chooseTheBorad(){
        cy.origin("https://trello.com",()=>{
            cy.get('.boards-page-board-section-list-item').eq(0).click();
            });
    return this;
    }
    clickOnAddAList(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-composer-button"]').click();
            });
    return this;
    }
    typesInListTitle(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-name-textarea"]').type("Anas First List");
            });
    return this;
    }
    clicksOnAddList(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-composer-add-list-button"]').click();
            cy.get('[data-testid="CloseIcon"]').click();
            });
    return this;
    }
    clicksOnAddACard(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-add-card-button"]').click();
            cy.wait(2000);
            });
    return this;
    }
    typesInCardTitle(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-card-composer-textarea"]').type("Anas First Card");
            });
    return this;
    }
    clicksOnAddCard(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-card-composer-add-card-button"]').click();
            cy.get('[data-testid="CloseIcon"]').click();
            });
    return this;
    }
    }

    export default CreateListActions;