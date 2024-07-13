class UpdateListActions{
    chooseTheBorad(){
        cy.origin("https://trello.com",()=>{
            cy.get('.boards-page-board-section-list-item').eq(0).click();
            });
    return this;
    }
    clickListName(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-name"]').click();
            });
    return this;
    }
    typesNewListName(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-name-textarea"]').clear().type("Anas First List After Update " + " {enter} ");
            });
    return this;
    }
    clickOnACard(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="list-card"]').click();
            });
    return this;
    }
    clicksOnTheCardDiscreption(){
        cy.origin("https://trello.com",()=>{
            cy.get('.LDTYZ4htfrP9Xl').click({force : true});
            });
    return this;
    }
    typeDiscreption(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="click-wrapper"]').type("Anas Card Discreption");
            });
    return this;
    }
    clickOnSaveAndClose(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="editor-save-button"]').click();
            cy.get('[data-testid="CloseIcon"]').eq(0).click();
            });
    return this;
    }
    }

    export default UpdateListActions;