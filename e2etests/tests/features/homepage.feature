Feature: to test homepage functionality

    Scenario: My Account functionality
        Given User is on login page
        When User enters login details from env
        Then Home page should be displayed
  #     Given user is on the Home page
        When user clicks on Edit Account link
        Then My Account Information appears
            # includes  click Continue - separate this ! 
        When User fills in Account info
        Then success message "Success: Your account has been successfully updated." is visible
        And Home page should be displayed   
        When User clicks on View Order History link
        Then Order History page appears
        When User clicks on Continue button
        Then Home page should be displayed
#  Expect items in trolley for this user
#       And trolley should not be empty


    # Scenario: logout
    #     When Upon logout
    #     Then Logout should be successfull
