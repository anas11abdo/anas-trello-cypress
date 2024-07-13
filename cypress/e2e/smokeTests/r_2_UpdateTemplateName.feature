Feature: update template Name

    Scenario: validate that the user can update template name
    When clicks on card template
    And clicks on card template title
    And type in new template title
    Then the card template name should be updated

