const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "auth-mf",

  exposes: {
    "./Routes": "./src/app/app.routes.ts",
  },
  remotes: {
    shell: "http://localhost:4200/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
