import { defineConfig } from 'cypress';
import { addVisualRegressionTrackerPlugin } from "./lib/plugin";

export default defineConfig({
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
    //By default this is true
    watchForFileChanges: false,
    //By default this is 4000
    defaultCommandTimeout: 10000,
    //By default this is true, Cypress will record a video of the test run when running headlessly.
    video: true,
    // Resize the viewport to 1280px x 768px
    viewportWidth: 1280,
    viewportHeight: 768,
    // baseUrl: 'https://yssofindia.org/',
    setupNodeEvents(on, config) {
      addVisualRegressionTrackerPlugin(on, config);
      return config;
    },
  }
});
