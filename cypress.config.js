const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o1mr8t",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
