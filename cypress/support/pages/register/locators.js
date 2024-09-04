const registerPageLocators = {

  texts: {

    registerTitle: () => cy.contains('h1', 'Register'),

    firstNameError: () => cy.xpath('//span[@id="FirstName-error"]'),
    lastNameError: () => cy.xpath('//span[@id="id="LastName-error"]'),
    emailRequiredError: () => cy.contains('span', 'Email is required.'),
    validEmailError: () => cy.contains('span', 'Please enter a valid email address.'),
    wrongEmailError: () => cy.contains('span', 'Wrong email'),
    passwordRequiredError: () => cy.contains('span', 'Password is required.'),
    passwordConfirmationError: () => cy.contains('span', 'The password and confirmation password do not match.'),
    passwordOutRulesError: () => cy.contains('span', '<p>Password must meet the following rules: </p><ul><li>must have at least 6 characters and not greater than 64 characters</li></ul>'),

    registrationCompleted: () => cy.contains('div', 'Your registration completed'),
  },

  dropDowns: {

    day: () => cy.xpath('//select[@name="DateOfBirthDay"]'),
    month: () => cy.xpath('//select[@name="DateOfBirthMonth"]'),
    year: () => cy.xpath('//select[@name="DateOfBirthYear"]'),
  },

  inputs: {

    firstName: () => cy.xpath('//input[@id="FirstName"]'),
    lastName: () => cy.xpath('//input[@id="LastName"]'),
    email: () => cy.xpath('//input[@id="Email"]'),
    password: () => cy.xpath('//input[@id="Password"]'),
    confirmPassword: () => cy.xpath('//input[@id="ConfirmPassword"]'),
  },

  buttons: {

    register: () => cy.xpath('//button[@id="register-button"]')
  }
}

export default registerPageLocators