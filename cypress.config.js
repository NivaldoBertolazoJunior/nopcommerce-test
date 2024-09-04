const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
  e2e: {
    specPattern: 'cypress/e2e/tests',
    baseUrl: 'https://demo.nopcommerce.com/'
  },
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    mode: "test",
    screenshotFolder: 'screenshots',
    videoFolder: 'videos',
    apiToken: '96306c0af74a2959c9302569387b493c8a70d39375b0fe18b7b4e03bde1924bb',
    projectCode: 'TEST',
    logging: true,
    basePath: 'https://api.qase.io/v1',
    sendScreenshot: true,
    runComplete: true,
    rootSuiteTitle: 'Cypress Web'
  }
});