Feature: delete existing Card

    Scenario: validate that the user can delete existing card
    When clicks on the card
    And clicks on card back archive button
    And clicks on card back delete card button
    And clicks on submit delete button
    Then the card will be archived and deleted succssfuly