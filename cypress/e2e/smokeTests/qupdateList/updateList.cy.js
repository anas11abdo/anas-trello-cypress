
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import UpdateListActions from "../../../Pageobjects/updateList/action.cy";
import UpdateListAssertion from "../../../Pageobjects/updateList/assertions.cy";

const updateListActions = new UpdateListActions();
const updateListAssertion = new UpdateListAssertion();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});

When("chooses the board",()=>{
    updateListActions.chooseTheBorad();
    cy.wait(6000);
});

When("click list name",()=>{
    updateListActions.clickListName();
});

When("types new list name",()=>{
    updateListActions.typesNewListName();
});

When("click on a card",()=>{
    updateListActions.clickOnACard();
    cy.wait(4000);
});

When("clicks on the card discreption",()=>{
    updateListActions.clicksOnTheCardDiscreption();
});

When("types type a discreption",()=>{
    updateListActions.typeDiscreption();
});

When("click on save and close",()=>{
    updateListActions.clickOnSaveAndClose();
});

Then("the list and the card will be Updated succssfuly",()=>{
    updateListAssertion.checkListUpdated();
});