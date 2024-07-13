
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateListActions from "../../../Pageobjects/createList/action.cy";
import CreateListAssertion from "../../../Pageobjects/createList/assertions.cy";

const createListActions = new CreateListActions();
const createListAssertion = new CreateListAssertion();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});



// When("clicks on boards button",()=>{
//     createListActions.clickOnBoardButton();
// });

When("chooses the board",()=>{
    createListActions.chooseTheBorad();
    cy.wait(6000);
});

When("clicks on add a list",()=>{
    createListActions.clickOnAddAList();
});

When("types in list title input filed",()=>{
    createListActions.typesInListTitle();
});

When("clicks on Add list",()=>{
    createListActions.clicksOnAddList();
});

When("clicks on Add a card",()=>{
    createListActions.clicksOnAddACard();
});

When("types in card title input filed",()=>{
    createListActions.typesInCardTitle();
});

When("clicks on Add card",()=>{
    createListActions.clicksOnAddCard();
});

Then("the list and the card will be crated succssfuly",()=>{
    createListAssertion.checkListNameContainValue();
});