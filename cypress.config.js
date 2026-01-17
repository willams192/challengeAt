const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    }
  }
})