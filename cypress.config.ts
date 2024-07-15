import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

export default defineConfig({
  e2e: {
    //By default this is true
    watchForFileChanges: false,
    //By default this is 4000
    defaultCommandTimeout: 10000,
    //By default this is true, Cypress will record a video of the test run when running headlessly.
    video: true,
    // Resize the viewport to 1280px x 768px
    viewportWidth: 1280,
    viewportHeight: 768,
    baseUrl: 'https://test.yssofindia.org/',
    numTestsKeptInMemory:0,
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'staging';
      const environmentFilename = `./env/${environmentName}.settings.json`;
      console.warn('loading %s', environmentFilename);
      const settings = require(environmentFilename);
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      console.log('loaded settings for environment %s', environmentName)

      
      return getCompareSnapshotsPlugin(on, config);
    },
  }
});
