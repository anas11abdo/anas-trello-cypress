Feature: Create New List

    Scenario: validate that the user can create new list
    Given the user login in trello website
    When chooses the board 
    And clicks on add a list
    And types in list title input filed
    And clicks on Add list
    And clicks on Add a card
    And types in card title input filed
    And clicks on Add card
    Then the list and the card will be crated succssfuly