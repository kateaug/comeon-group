export const notEmptyObject = obj =>
  obj === Object(obj) && Object.keys(obj).length !== 0;

export const isEmptyArray = array => Array.isArray(array) && array.length === 0;

export function getLocalStorageItem(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
}
