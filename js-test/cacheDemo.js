// 闭包在实际场景中的应用
// 隐藏数据，提供外部api
function CreateCache() {
  const obj = {}
  return {
    set: function(key, value) {
      obj[key] = value
    },
    get: function(key) {
      return obj[key]
    }
  }
}

const c = CreateCache()
c.set('a', 12)
console.log(c.get('a'));