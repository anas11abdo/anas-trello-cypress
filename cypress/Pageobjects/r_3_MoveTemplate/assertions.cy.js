class MoveTemplateAssertion{
    checkTemplateMoved(cardtempname){
            cy.get(".js-open-move-from-header").should('contain', cardtempname);
    return this;
    }
    }
    export default MoveTemplateAssertion;