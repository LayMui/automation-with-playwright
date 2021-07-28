Feature: Search Accommodation
  In order to search for the best accommodation for his holiday
  As a agoda web site user Sean 
  Sean wants to able to perform search 
  
    Background: 
      Given Sean is at the agoda site

       Scenario Outline: Search for accommodation
    When he wants to book for accommodation for his destination
    | accommodation    | destination |
    | hotels and Homes | Jakarta     |
    And he perform a search for it
    Then he is able to see the result of his search
