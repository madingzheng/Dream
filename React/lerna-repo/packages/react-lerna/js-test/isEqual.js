function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
  // 两个都是基本类型，直接判断
  if (obj1 === obj2) {
    return true
  }
  // 有一个是基本类型，直接判断
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  // 两个都是引用类型
  const ojb1KeyArray = Object.keys(obj1)
  const ojb2KeyArray = Object.keys(obj2)
  if (ojb1KeyArray.length !== ojb2KeyArray.length) {
    return false
  }
  // 以obj1为基准进行验证
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      const res = isEqual(obj1[key], obj2[key])
      if (!res) {
        return false
      }
    }
  }
  return true
}

const obj1 = {
  a: 100,
  b: {
    c: 200,
    d: {
      e: 3000
    }
  }
}

const obj2 = {
  a: 100,
  b: {
    c: 200,
    d: {
      e: 300
    }
  }
}

console.log(isEqual(obj1, obj2));