// // apply，call，bind使用方法
// let obj = {
//   name: "mdz",
//   age: 12,
//   say: function (rest) {
//     console.log(`my name is ${this.name} and my years old is ${this.age}`);
//     console.log(rest);
//   }
// };
// let say1 = obj.say // window 下面调用

// obj.say('333') // 对象中调用

// let obj2 = {
//   name: 'mdz2',
//   age: 22
// }

// obj.say.apply(obj2, ['444'])
// obj.say.call(obj2, '555')
// obj.say.bind(obj2, '666')()

// console.log('-------------');


// 实现apply，call，bind
function show(name, age) {
  this.name = name
  this.age = age
  console.log(this.name);
}

Function.prototype.myCall = function (ctx, ...rest) {
  if (typeof this !== 'function') {
    throw Error('不是函数')
  }
  if(!ctx) ctx = window;
  ctx.fn = this
  const result = ctx.fn(...rest)
  delete ctx.fn
  return result
}

show.myCall({name: 'myCall'}, 'myCall1', 'myCall2')

Function.prototype.myApply = function (ctx, args = []) {
  if (typeof this !== 'function') {
    throw Error('不是函数')
  }
  if(!ctx) ctx = window;
  ctx.fn = this
  const result = ctx.fn(...args)
  delete ctx.fn
  return result
}

show.myApply({name: 'myApply'}, ['myApply1', 'myApply2'])

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  if(typeof fn !== 'function'){
      throw new TypeError('It must be a function');
  }
  if(!context) context = window;
  return function (...otherArgs) {
    return fn.apply(context, [...args, ...otherArgs]);
  };
};