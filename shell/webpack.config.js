const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    "auth-mf": "http://localhost:4201/remoteEntry.js",
    "notes-mf": "http://localhost:4202/remoteEntry.js",
  },
  exposes: {
    "./EventBus": "./src/app/core/event-bus.service.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
