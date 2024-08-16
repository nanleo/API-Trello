const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.trelloApiKey = '7cd44dfda8c4ffed5c790fbf6e5ec7a8';
      config.env.trelloApiToken = 'ATTAaa78f65255a97a68defd6df882f1048d2b1a2bf06c0856e8d0be7c6b64a9a66381E60632';
      return config;
    },
  },
});
