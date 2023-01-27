const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
  devServer: {
    port: 3005,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        stream: require.resolve("stream-browserify"),
      };
      return webpackConfig;
    },
  },
};
