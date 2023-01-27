const { dependencies } = require("./package.json");

const { swr, ...deps } = dependencies;

module.exports = {
  name: "dummy",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
