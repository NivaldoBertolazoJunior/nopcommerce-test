Feature: Register Functionality

    Scenario: Successful register
        Given i navigate to the 'Register' page
        When i fill in the required fields
        And i click on 'Register' button
        Then registration is successful
        And the message 'Your registration completed' will be displayed

    Scenario: Click on 'Register' button without fill in 'First name' field
        Given i navigate to the 'Register' page
        When I fill in the required fields without filling in the 'First name' field
        And i click on 'Register' button
        Then registration is not successful
        And the message error 'First name is required.' will be displayed
    
    Scenario: Click on 'Register' button without fill in 'Last name' field
        Given i navigate to the 'Register' page
        When I fill in the required fields without filling in the 'Last name' field
        And i click on 'Register' button
        Then registration is not successful
        And the message error 'Last name is required.' will be displayed

    Scenario: Click on 'Register' button without fill in 'Email' field
        Given i navigate to the 'Register' page
        When I fill in the required fields without filling in the 'Email' field
        And i click on 'Register' button
        Then registration is not successful
        And the message error 'Email is required.' will be displayed

    Scenario: Click on 'Register' button without fill in 'Password' field
        Given i navigate to the 'Register' page
        When I fill in the required fields without filling in the 'Password' field
        And i click on 'Register' button
        Then registration is not successful
        And the message error 'Password is required.' will be displayed

    Scenario: Click on the 'Register' button with the 'Confirm password' field incorrectly
        Given i navigate to the 'Register' page
        When I fill in the required fields with the 'Confirm password' field incorrectly
        And i click on 'Register' button
        Then registration is not successful
        And the message error 'The password and confirmation password do not match.' will be displayed

    Scenario: Click on 'Register' button with fill in 'Password' field with a password out of the rules
        Given i navigate to the 'Register' page
        When I fill in the required fields with fill in 'Password' field with a password out of the rules
        And i click on 'Register' button
        Then registration is not successful
        And the message error '<p>Password must meet the following rules: </p><ul><li>must have at least 6 characters and not greater than 64 characters</li></ul>' will be displayed

    Scenario: Validate that the selected date corresponds to the desired input
        Given i navigate to the 'Register' page
        When I fill in the 'Date of birth' fields with the respective options
        Then the selected date will correspond to the desired input