const ChangingProgressProvider = (props) => {
   

  return props.children(props.values[valuesIndex]);
};

ChangingProgressProvider.defaultProps = {
  interval: 1000
};

export default ChangingProgressProvider;