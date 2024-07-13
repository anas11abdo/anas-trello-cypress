
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DeleteListActions from "../../../Pageobjects/deleteList/action.cy";
import DeleteListAssertion from "../../../Pageobjects/deleteList/assertions.cy";

const deleteListActions = new DeleteListActions();
const deleteListAssertion = new DeleteListAssertion();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});

When("chooses the board",()=>{
    deleteListActions.chooseTheBorad();
    cy.wait(6000);
});

When("clicks on list menu",()=>{
    deleteListActions.clicksOnListMenu();
});

When("clicks on archive list button",()=>{
    deleteListActions.clicksOnArchiveListButton();
});

Then("the list will be archived and deleted succssfuly",()=>{
    deleteListAssertion.checkListdeleted();
});