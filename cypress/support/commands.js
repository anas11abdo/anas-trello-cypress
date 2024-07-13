// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("LoginToTrello",()=>{
 cy.visit("/login");
 cy.get("#username").type("an-999@hotmail.com").wait(3000);
 cy.get("#login-submit").click();
 cy.get("#password").type("Anasabdo123456" + "{enter}");
 //cy.origin("https://id.atlassian.com",()=>{
 //});
})

Cypress.Commands.add("findByTestId",(testId)=>{
        cy.get(`[data-testid=${testId}]`)       
   });

Cypress.Commands.add("createBoard",()=>{
        cy.findByTestId("AddIcon").click();
        cy.findByTestId("BoardIcon").eq(1).click();
        cy.findByTestId("create-board-title-input").type("Anas First Board"); 
        cy.findByTestId("create-board-submit-button").click();
});

Cypress.Commands.add("createList",(listname,num)=>{
        cy.findByTestId("list-composer-button").click({force: true});
        cy.findByTestId("list-name-textarea").eq(num).type(listname);
        cy.findByTestId("list-composer-add-list-button").click();
        cy.findByTestId("CloseIcon").click();      
});

Cypress.Commands.add("deleteBoard",()=>{
        cy.findByTestId("OverflowMenuHorizontalIcon").eq(0).click();
        cy.get(".board-menu-navigation-item-link.board-menu-navigation-item-link-v2.js-close-board").click();
        cy.findByTestId("close-board-confirm-button").click();
        cy.findByTestId("close-board-delete-board-button").click();
        cy.findByTestId("close-board-delete-board-confirm-button").click();
});