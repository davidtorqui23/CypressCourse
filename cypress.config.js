const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c6qv3a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
