{   "MyAccInfoFirstName": {
        "locator": "xpath=/html/body/div[1]/div[5]/div[1]/div/div/form/fieldset/div[1]/div/input",
        "xpath=//input[@id='input-firstname']" // YEP !!
        "actionOptons": {
            "timeout": 5000
        }
    },
        "MyAccInfoContinue": {
//        "locator": "xpath=/html/body/div[1]/div[5]/div[1]/div/div/form/div/div[2]/input",
        "locator": "xpath=//input[@value='Continue']",
        "actionOptons": {
            "timeout": 5000
        }
    },

    "AccountUpdatedMsg": {
        "locator": "xpath=/html/body/div[1]/div[5]/div[1]/div[1]"
        
    }

    "AccountUpdatedMsg": {
        "locator": "xpath=//a[@class='fas fa-check-circle']", // nope 
        "locator": "xpath=//class[@value='fas fa-check-circle']", // nope 
        "locator": "xpath=//div[contains(@class, 'alert-success')]" // YEP !! 
        
    }
    "OrderHistoryTitle": {
        "locator": "xpath=/html/body/div[1]/div[5]/div[1]/div/div/h1",
        "actionOptons": {
            "timeout": 5000
        }
    }
    "OrderHistoryContinue": {
        "locator": "xpath=//input[@value='Continue']", // or /html/body/div[1]/div[5]/div[1]/div/div/div[3]/div/a   works
        
        "actionOptons": {
            "timeout": 5000
        }
    },


    