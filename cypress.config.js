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
    projectCode: 'TEST',
    logging: true,
    basePath: 'https://api.qase.io/v1',
    sendScreenshot: true,
    runComplete: true,
    rootSuiteTitle: 'Cypress Web'
  }
});