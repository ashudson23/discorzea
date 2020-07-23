export default value => {
  return value.split('').reduce((prevHash, currVal) => {
    return (
      (
        (prevHash << 5) - prevHash
      ) + currVal.charCodeAt(0)
    ) | 0;
  }, 0);
};
