export const noop = () => {};

export const pickColorFromProps = (colorSet, handler) => (props) => {
  for (const name in colorSet) {
    if (props.hasOwnProperty(name) && colorSet.hasOwnProperty(name)) {
      const result = colorSet[name];
      return typeof handler === 'function' ? handler(result) : result;
    }
  }
};
