/**
 * 原型链继承
 * 优点：可以继承实例的属性，父级的属性和方法
 * 缺点：所有新实例都会共享父类实例的属性
 */
function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHi = function () {
  console.log(`my name is ${this.name}`);
}

function Children(name) {
  this.name = name
}

Children.prototype = new Person()

const c1 = new Children('mdz')

c1.sayHi()

/**
 * 构造函数继承
 * 优点：可以传递参数，父级属性不共享
 * 缺点：父级prototype属性，方法不能继承
 */

 function Children2(name, age) {
   Person.call(this, name, age)
 }

 const c2 = new Children2('cql', 18)

 /**
 * 组合继承
 * 优点：可以继承父类原型上的属性，可以传参，可复用,每个新实例引入的构造函数属性是私有的
 * 缺点：调用了两次父类构造函数（耗内存）
 */

 function Children3(name, age) {
   Person.call(this, name, age)
 }

 Children3.prototype = new Person()

 const c3 = new Children3('mdz3', 11)
 console.log(c3);
 c3.sayHi()