import accessHomePage from '../../../support/pages/home/commands'
import registerPage from '../../../support/pages/register/commands'

export const steps = {

    "Given i navigate to the 'Register' page": () => {

      accessHomePage.accessRegisterPage()
    },

    "When i fill in the required fields": () => {

        registerPage.fillInFirstNameField()
        registerPage.fillInSecondNameField()
        registerPage.fillInEmailField()
        registerPage.fillInPasswordField()
        registerPage.fillInConfirmPassordFieldCorrectly()
    },

    "When I fill in the required fields without filling in the 'First name' field": () => {

        registerPage.fillInSecondNameField()
        registerPage.fillInEmailField()
        registerPage.fillInPasswordField()
        registerPage.fillInConfirmPassordFieldCorrectly()
    },

    "When I fill in the required fields without filling in the 'Last name' field": () => {

        registerPage.fillInFirstNameField()
        registerPage.fillInEmailField()
        registerPage.fillInPasswordField()
        registerPage.fillInConfirmPassordFieldCorrectly()
    },

    "When I fill in the required fields without filling in the 'Email' field": () => {

        registerPage.fillInFirstNameField()
        registerPage.fillInSecondNameField()
        registerPage.fillInPasswordField()
        registerPage.fillInConfirmPassordFieldCorrectly()
    },

    "When I fill in the required fields without filling in the 'Password' field": () => {

        registerPage.fillInFirstNameField()
        registerPage.fillInSecondNameField()
        registerPage.fillInEmailField
    },

    "When I fill in the required fields with the 'Confirm password' field incorrectly": () => {

        registerPage.fillInFirstNameField()
        registerPage.fillInSecondNameField()
        registerPage.fillInEmailField()
        registerPage.fillInPasswordField()
        registerPage.fillInConfirmPassordFieldIncorrectly()
    },

    "When I fill in the required fields with fill in 'Password' field with a password out of the rules": () => {

        registerPage.fillInFirstNameField()
        registerPage.fillInSecondNameField()
        registerPage.fillInEmailField()
        registerPage.fillInPasswordFieldWithPasswordOutRules()
    },

    "When I fill in the 'Date of birth' fields with the respective options": () => {

        registerPage.fillInDayField()
        registerPage.fillInMonthField()
        registerPage.fillInYearField()
    },

    "And i click on 'Register' button": () => {
        
        registerPage.clickRegisterButton()
    },

    "Then registration is successful And the message 'Your registration completed' will be displayed": () => {
        
        registerPage.validateRegistrationCompleted()
    },

    "Then registration is not successful And the message error 'First name is required.' will be displayed": () => {
        
        registerPage.validateFirstNameError()
    },

    "Then registration is not successful And the message error 'Last name is required.' will be displayed": () => {
        
        registerPage.validateLastNameError()
    },

    "Then registration is not successful And the message error 'Email is required.' will be displayed": () => {
        
        registerPage.validateEmailRequiredError()
    },

    "Then registration is not successful And the message error 'Password is required.' will be displayed": () => {
        
        registerPage.validatePasswordRequiredError()
    },

    "Then registration is not successful And the message error 'The password and confirmation password do not match.' will be displayed": () => {
        
        registerPage.validatePasswordConfirmationError()
    },

    "Then registration is not successful And the message error '<p>Password must meet the following rules: </p><ul><li>must have at least 6 characters and not greater than 64 characters</li></ul>' will be displayed": () => {
        
        registerPage.validatePasswordOutRulesError()
    },

    "Then the selected date will correspond to the desired input": () => {
        
        registerPage.validateSelectedDay()
        registerPage.validateSelectedMonth()
        registerPage.validateSelectedYear()
    },
};