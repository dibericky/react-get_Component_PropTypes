/**
 *  source: https://www.npmjs.com/package/axe-prop-types
 */

export default ({ propTypes }) =>
  Object.keys(propTypes).forEach(key =>
    console.log({
      key,
      ...propTypes[key].info
    })
  );
