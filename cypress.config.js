const { defineConfig } = require("cypress");
const { addVisualRegressionTrackerPlugin } = require("@visual-regression-tracker/agent-cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      visualRegressionTracker: {
        apiUrl: "http://localhost:4200", // URL where backend is running
        project: "VRT Cypress Demo", // Project name or ID
        apiKey: "DEFAULTUSERAPIKEYTOBECHANGED", // User apiKey
        branchName: "develop-py", // Current git branch
        enableSoftAssert: true, // Log errors instead of throwing exceptions
      },
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    chromeWebSecurity: false,
    video: true,
    setupNodeEvents(on, config) {
      addVisualRegressionTrackerPlugin(on, config);
      return config;
    },
  },
});
