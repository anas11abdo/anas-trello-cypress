
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateTemplateActions from "../../../Pageobjects/r_1_CreateNewTemplateCard/action.cy";
import MoveTemplateActions from "../../../Pageobjects/r_3_MoveTemplate/action.cy";
import MoveTemplateAssertion from "../../../Pageobjects/r_3_MoveTemplate/assertions.cy";

const createTemplateActions = new CreateTemplateActions();
const moveTemplateActions = new MoveTemplateActions();
const moveTemplateAssertion = new MoveTemplateAssertion();

const listname1 = "Anas First List";
const listname2 = "Anas Second List";
const cardTemplatename = "template card";

before("",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
    cy.createBoard();
    cy.wait(2000);
    cy.createList(listname1,0);
    cy.wait(2000);
    cy.createList(listname2,1);
    cy.wait(2000);
    createTemplateActions.clicksOnCardTemplateListButton();
    createTemplateActions.clicksOnCreateTemplateCardButton();
    createTemplateActions.typeInCardName(cardTemplatename);
    createTemplateActions.clickOnAddButton();
    cy.wait(2000);
});

When("clicks on card template",()=>{
    moveTemplateActions.clicksOnCardTemplate();
});

When("clicks on move card",()=>{
    moveTemplateActions.clicksOnMoveCard();
});

When("select the list",()=>{
    moveTemplateActions.selectTheList(listname2);
});

When("clicks on move button",()=>{
    moveTemplateActions.clicksOnMoveButton();
});

Then("the card template should be moved",()=>{
    moveTemplateAssertion.checkTemplateMoved(listname2);
});

after(()=>{
    cy.findByTestId("CloseIcon").eq(0).click();
    cy.deleteBoard();
});