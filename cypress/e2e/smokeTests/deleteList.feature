Feature: delete existing List

    Scenario: validate that the user can delete existing list
    Given the user login in trello website
    When chooses the board 
    And clicks on list menu
    And clicks on archive list button
    Then the list will be archived and deleted succssfuly