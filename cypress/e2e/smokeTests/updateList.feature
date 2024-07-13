Feature: Update New List

    Scenario: validate that the user can Update Existing list
    Given the user login in trello website
    When chooses the board 
    And click list name
    And types new list name
    And click on a card
    And clicks on the card discreption
    And types type a discreption
    And click on save and close
    Then the list and the card will be Updated succssfuly




    Scenario: validate that the user can Update Existing list 
    When the user clicks on list title header
    And types new list title in textarea field
    Then the list and the card will be Updated succssfuly