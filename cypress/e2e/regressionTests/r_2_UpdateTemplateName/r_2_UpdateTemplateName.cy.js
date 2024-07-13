
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateTemplateActions from "../../../Pageobjects/r_1_CreateNewTemplateCard/action.cy";
import UpdateTemplateNameActions from "../../../Pageobjects/r_2_UpdateTemplateName/action.cy";
import UpdateTemplateNameAssertion from "../../../Pageobjects/r_2_UpdateTemplateName/assertions.cy";

const createTemplateActions = new CreateTemplateActions();
const updateTemplateNameActions = new UpdateTemplateNameActions();
const updateTemplateNameAssertion = new UpdateTemplateNameAssertion();

const listname = "Anas First List";
const cardTemplatename = "template card";
const newCardTemplatename = "Updated template card";

before("",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
    cy.createBoard();
    cy.createList(listname,0);
    cy.wait(2000);
    createTemplateActions.clicksOnCardTemplateListButton();
    createTemplateActions.clicksOnCreateTemplateCardButton();
    createTemplateActions.typeInCardName(cardTemplatename);
    createTemplateActions.clickOnAddButton();
    cy.wait(2000);
});

When("clicks on card template",()=>{
    updateTemplateNameActions.clicksOnCardTemplate();
});

When("clicks on card template title",()=>{
    updateTemplateNameActions.clicksOnCreateTemplateTitle();
});

When("type in new template title",()=>{
    updateTemplateNameActions.typeInNewTemplateName(newCardTemplatename);
});

Then("the card template name should be updated",()=>{
    updateTemplateNameAssertion.checkTemplateNameUpdated(newCardTemplatename);
});

after(()=>{
    cy.deleteBoard();
});