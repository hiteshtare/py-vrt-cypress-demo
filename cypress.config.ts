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
    baseUrl: 'https://yssofindia.org/',
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    },
  }
});
