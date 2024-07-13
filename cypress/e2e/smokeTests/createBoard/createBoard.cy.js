
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateBoardActions from "../../../Pageobjects/createBoard/action.cy";
import CreateBoardAssertion from "../../../Pageobjects/createBoard/assertions.cy";

const createBoardActions = new CreateBoardActions();
const createBoardAssertion = new CreateBoardAssertion();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});



When("clicks on create button",()=>{
    createBoardActions.clickOnCreateButton();
});

When("chooses create board option",()=>{
    createBoardActions.chooseOnCreateBoradButton();
});

When("types in board title input filed the board name",()=>{
    createBoardActions.typeBoardTitle();
});

When("clicks on Create button",()=>{
    createBoardActions.clickOnCreateBoradButton();
});

Then("the board will be crated succssfuly",()=>{
    createBoardAssertion.checkBoardNameContainValue();
});