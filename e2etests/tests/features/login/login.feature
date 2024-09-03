Feature: to test login functionalit2

@login
    Scenario: to test login functionality2
        Given User is on login page
        When User enters login details from env
        Then Home page should be displayed
        When Upon logout
        Then Logout should be successful
