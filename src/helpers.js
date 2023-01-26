export const notEmptyObject = obj =>
  obj === Object(obj) && Object.keys(obj).length !== 0;