import registerPageLocators from './locators'

class registerPage {

    fillInFirstNameField() {

        registerPageLocators.inputs.firstName().type("Teste")
    }

    validateFirstNameError() {

        registerPageLocators.texts.firstNameError().should('be.visible')
    }

    fillInSecondNameField() {

        registerPageLocators.inputs.lastName().type("123")
    }

    validateLastNameError() {

        registerPageLocators.texts.lastNameError().should('be.visible')
    }

    fillInDayField() {

        registerPageLocators.dropDowns.day().select("2")
    }

    validateSelectedDay() {

        registerPageLocators.dropDowns.day().should('have.attr', 'data-gtm-form-interact-field-id', '2')
    }

    fillInMonthField() {

        registerPageLocators.dropDowns.month().select("3")
    }

    validateSelectedMonth() {

        registerPageLocators.dropDowns.day().should('have.attr', 'data-gtm-form-interact-field-id', '3')
    }

    fillInYearField() {

        registerPageLocators.dropDowns.year().select("1995")
    }

    validateSelectedYear() {

        registerPageLocators.dropDowns.day().should('have.attr', 'data-gtm-form-interact-field-id', '1995')
    }

    fillInEmailField() {

        registerPageLocators.inputs.email().type("teste@gmail.com")
    }

    validateEmailRequiredError() {

        registerPageLocators.texts.emailRequiredError().should('be.visible')
    }

    fillInInvalidEmail() {

        registerPageLocators.inputs.email().type("teste")
    }

    validateInvalidEmailError() {

        registerPageLocators.texts.validEmailError().should('be.visible')
    }

    fillInWrongEmail() {

        registerPageLocators.inputs.email().type("teste@gm")
    }

    validateWrongEmailError() {

        registerPageLocators.texts.wrongEmailError().should('be.visible')
    }

    fillInPasswordField() {
        
        registerPageLocators.inputs.password().type("Teste123")
    }

    fillInConfirmPassordFieldCorrectly() {

        registerPageLocators.inputs.confirmPassword().type("Teste123")
    }

    fillInConfirmPassordFieldIncorrectly() {

        registerPageLocators.inputs.confirmPassword().type("Teste1")
    }

    fillInPasswordFieldWithPasswordOutRules() {

        registerPageLocators.inputs.password().type("A")
        registerPageLocators.inputs.confirmPassword().type("A")
    }

    validatePasswordRequiredError() {

        registerPageLocators.texts.passwordRequiredError().should('be.visible')
    }

    validatePasswordConfirmationError() {

        registerPageLocators.texts.passwordConfirmationError().should('be.visible')
    }

    validatePasswordOutRulesError() {

        registerPageLocators.texts.passwordOutRulesError().should('be.visible')
    }

    clickRegisterButton() {

        registerPageLocators.buttons.register().click()
    }

    validateRegistrationCompleted() {

        registerPageLocators.texts.registrationCompleted().should('be.visible')
    }
}

export default new registerPage()