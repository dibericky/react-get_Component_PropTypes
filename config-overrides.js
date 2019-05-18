const path = require("path");

module.exports = function override(config, env) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "prop-types$": path.join(__dirname, "node_modules/axe-prop-types")
      }
    }
  };
};
