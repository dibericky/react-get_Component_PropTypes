# How to get component's PropTypes with a CreateReactApp project

1: yarn add axe-prop-types

2: yarn add react-app-rewired

3: In package.json change these lines:

```
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test --env=jsdom",
```

into these:

```
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test --env=jsdom",
```

Add at the root of your project (at the same level of package.json) a file named `config-overrides.js` with this content:

```
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
```

Now you have access to the PropTypes info of the component.
Try:

```
console.log(MyComponent.propTypes)

```
