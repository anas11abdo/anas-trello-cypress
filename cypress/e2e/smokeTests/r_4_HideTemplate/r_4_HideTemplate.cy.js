
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateTemplateActions from "../../../Pageobjects/r_1_CreateNewTemplateCard/action.cy";
import HideTemplateActions from "../../../Pageobjects/r_4_HideTemplate/action.cy";
import HideTemplateAssertion from "../../../Pageobjects/r_4_HideTemplate/assertions.cy";

const createTemplateActions = new CreateTemplateActions();
const hideTemplateActions = new HideTemplateActions();
const hideTemplateAssertion = new HideTemplateAssertion();

const listname1 = "Anas First List";
const cardTemplatename = "template card";

before("",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
    cy.createBoard();
    cy.wait(2000);
    cy.createList(listname1,0);
    cy.wait(2000);
    createTemplateActions.clicksOnCardTemplateListButton();
    createTemplateActions.clicksOnCreateTemplateCardButton();
    createTemplateActions.typeInCardName(cardTemplatename);
    createTemplateActions.clickOnAddButton();
    cy.wait(2000)
});

When("clicks on card template",()=>{
    hideTemplateActions.clicksOnCardTemplate();
});

When("clicks on hide template",()=>{
    hideTemplateActions.clicksOnMoveCard();
});

Then("the card template should be hidden",()=>{
    hideTemplateAssertion.checkTemplateHidden(cardTemplatename);
});

after(()=>{

    cy.deleteBoard();
});