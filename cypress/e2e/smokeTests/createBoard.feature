Feature: Create New Board

    Scenario: validate that the user can create new board
    Given the user login in trello website
    When clicks on create button
    And chooses create board option
    And types in board title input filed the board name
    And clicks on Create button
    Then the board will be crated succssfuly
