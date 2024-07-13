Feature: create template Card

    Scenario: validate that the user can create new template card
    When clicks on card template list button
    And clicks on create new template card button
    And type card name
    And click on add button
    Then the card template should be created    

