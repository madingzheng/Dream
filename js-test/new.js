/**
 * 实现一个new的过程
 * 1.以构造函数的原型为参数创建对象
 * 2.以构造函数调用apply
 * 3.返回
 * @param {*} Parent 构造函数
 * @param {*} rest 参数
 * @returns 实例
 */
function MyNew (Parent, ...rest) {
  const obj = Object.create(Parent.prototype)
  const result = Parent.apply(obj, rest)
  return typeof result === 'object' ? result : obj
}

function Person(name) {
  this.name = name
}

const p1 = new MyNew(Person, 'mdz')
console.log(p1.name);