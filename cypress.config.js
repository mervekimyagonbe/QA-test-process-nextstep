const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportPageTitle: "QA Automation Report",
  },

  e2e: {
    baseUrl: "https://job-tracking-web-form.vercel.app",

    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },

});