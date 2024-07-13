
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateTemplateActions from "../../../Pageobjects/r_1_CreateNewTemplateCard/action.cy";
import CreateTemplateAssertion from "../../../Pageobjects/r_1_CreateNewTemplateCard/assertions.cy";

const createTemplateActions = new CreateTemplateActions();
const createTemplateAssertion = new CreateTemplateAssertion();

const listname = "Anas First List";
const cardTemplatename = "template card";

before("",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
    cy.createBoard();
    cy.createList(listname,0);
    cy.wait(2000);
});

When("clicks on card template list button",()=>{
    createTemplateActions.clicksOnCardTemplateListButton();
});

When("clicks on create new template card button",()=>{
    createTemplateActions.clicksOnCreateTemplateCardButton();
});

When("type card name",()=>{
    createTemplateActions.typeInCardName(cardTemplatename);
});

When("click on add button",()=>{
    createTemplateActions.clickOnAddButton();
});

Then("the card template should be created",()=>{
    createTemplateAssertion.checkTemplateCreated();
});

after(()=>{
    cy.deleteBoard();
});