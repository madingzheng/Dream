function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  let result;
  if (obj instanceof Array) {
    result = [];
  } else if (obj instanceof Object) {
    result = {};
  }
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      result[key] = deepClone(value);
    }
  }
  return result;
}
