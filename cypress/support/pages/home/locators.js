const homePageLocators = {

  menus: {

    register: () => cy.xpath('//a[@class="ico-register"]'),
  },

  images: {

    nopCommerceLogo: () => cy.xpath('//img[@src="https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png"]')
  }
}

export default homePageLocators