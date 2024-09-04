import homePageLocators from './locators'
import registerPageLocators from '../register/locators'

class homePage {

    accessHomePage() {

      cy.visit('/', { failOnStatusCode: false })
      homePageLocators.images.nopCommerceLogo().should('be.visible')
    }

    accessRegisterPage() {

      homePageLocators.menus.register().click()
      registerPageLocators.texts.registerTitle().should('be.visible')
    }
  }

export default new homePage()