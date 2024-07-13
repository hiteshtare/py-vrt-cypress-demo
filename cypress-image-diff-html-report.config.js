import { defineConfig } from "cypress-image-diff-html-report";
export default defineConfig({
  reportJsonDir: "cypress-image-diff-html-report",
  outputDir: "visual-test-report",
});
