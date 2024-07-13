Feature: Move template To Any List

    Scenario: validate that the user can move template to any list
    When clicks on card template
    And clicks on move card
    And select the list
    And clicks on move button
    Then the card template should be moved

