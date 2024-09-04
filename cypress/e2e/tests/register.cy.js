import homePage from '../../support/pages/home/commands'
import { steps } from '../features/common/steps'

describe('Register Feature', () => {
    
    beforeEach(() => {
      
        homePage.accessHomePage()
    })
  
    it("Successful register", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When i fill in the required fields"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is successful And the message 'Your registration completed' will be displayed"]();
    })

    it("Click on 'Register' button without fill in 'First name' field", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the required fields without filling in the 'First name' field"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is not successful And the message error 'First name is required.' will be displayed"]();
    })

    it("Click on 'Register' button without fill in 'Last name' field", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the required fields without filling in the 'Last name' field"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is not successful And the message error 'Last name is required.' will be displayed"]();
    })

    it("Click on 'Register' button without fill in 'Email' field", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the required fields without filling in the 'Email' field"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is not successful And the message error 'Email is required.' will be displayed"]();
    })

    it("Click on 'Register' button without fill in 'Password' field", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the required fields without filling in the 'Password' field"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is not successful And the message error 'Password is required.' will be displayed"]();
    })

    it("Click on the 'Register' button with the 'Confirm password' field incorrectly", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the required fields with the 'Confirm password' field incorrectly"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is not successful And the message error 'The password and confirmation password do not match.' will be displayed"]();
    })

    it("Click on 'Register' button with fill in 'Password' field with a password out of the rules", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the required fields with fill in 'Password' field with a password out of the rules"]();
      steps["And i click on 'Register' button"]();
      steps["Then registration is not successful And the message error '<p>Password must meet the following rules: </p><ul><li>must have at least 6 characters and not greater than 64 characters</li></ul>' will be displayed"]();
    })

    it("Validate that the selected date corresponds to the desired input", () => {

      steps["Given i navigate to the 'Register' page"]();
      steps["When I fill in the 'Date of birth' fields with the respective options"]();
      steps["Then the selected date will correspond to the desired input"]();
    })
})