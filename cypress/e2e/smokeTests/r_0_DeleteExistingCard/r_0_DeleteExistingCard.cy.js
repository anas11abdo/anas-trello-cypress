
import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";
import DeleteCardActions from "../../../Pageobjects/r_0_DeleteExistingCard/action.cy";
import DeleteCardAssertion from "../../../Pageobjects/r_0_DeleteExistingCard/assertions.cy";

const deleteCardActions = new DeleteCardActions();
const deleteCardAssertion = new DeleteCardAssertion();

const listname = "Anas First List"
const listcard = "list-add-card-button";
const cardname = "First card";

before("",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
    cy.createBoard();
    cy.createList(listname,0);
    cy.wait(2000);
    deleteCardActions.createCard(cardname);
});
When("clicks on the card",()=>{
    deleteCardActions.clicksOnTheCard();
});

When("clicks on card back archive button",()=>{
    deleteCardActions.clicksOnCardArchiveButton();
});

When("clicks on card back delete card button",()=>{
    deleteCardActions.clicksOnCardDeleteCardButton();
});

When("clicks on submit delete button",()=>{
    deleteCardActions.clicksOnSubmitDeleteButton();
});

Then("the card will be archived and deleted succssfuly",()=>{
    deleteCardAssertion.checkCardDelete(listcard);
    
});
after(()=>{
    cy.deleteBoard();
});