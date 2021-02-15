## JavaScript题目
1. var和let、const的区别

   ```javascript
   - var是es5语法，let、cosnt是es6语法；var有变量提升
   - var和let是变量，可修改；const是常量，不可修改
   - let const 有块级作用域，var没有
   ```

2. typeof返回哪些类型

   ```javascript
   - undefined string number boolen symobl
   - object (注意tyoeof null === 'object')
   - function
   ```

3. 列举强制类型转换和隐式类型转化

   ```javascript
   强制：parseInt、parseFloat、toString等
   隐式：if、逻辑运算、==、+拼接等
   ```

5. 数组哪些方法会改变原数组，哪些方法不会

   ```javascript
   不改变原数组的方法（4个）
    - concat 不改变原数组，返回新的数组
    - join 不改变原数组，返回字符串
    - toString 不改变原数组，返回数组的字符串形式
    - slice 不改变原数组，返回一个新数组
   改变原数组的方法（9个）
    - splice 改变原数组，返回被删除的元素
    - sort 改变原数组，返回该数组
    - pop 改变原数组，返回被删除的元素
    - shift 改变原数组，返回第一个元素的值
    - push 改变原数组，返回新数组的长度
    - unshift 改变原数组，返回新数组的长度
    - reserver 改变原数组，返回该数组
   ```

6. ajax请求get和post的区别
   - get一般用于查询，post一般用户提交操作
   - get参数拼接在url上，post放在请求体中（数据体积可更大）
   - 安全心：post易于防止CSRF
   
7. 函数call、apply、bind的区别

   - apply参数值数组形式，call、bind是一个一个传参
   - call、apply返回的是函数的执行结果，bind是返回一个函数

9. 闭包是什么，有什么特性，有什么负面影响

   1. 闭包就是能够读取其他函数内部变量的函数

   - 负面影响
     - 变量常驻内存，不能被释放
   
9. jsonp的原理，为何他不是真正的ajax

   - jsonp跨域
   - img、script、link可以实现跨于

10. document load和ready的区别

    - ready表示文档结构已经加载完成，不包括媒体
    - load表示所有元素都加载完成
    - ready在load之前
    
10. 函数声明和函数表达式的区别

    - 函数声明会变量提示
    - 语法不同

11. new Object()和Object.create的区别

    - Object.creatae不继承Object.prototype
    - Object.create的原型是传入的参数
    - new Object()继承Object.porotype

12. 获取多个数据中的最大值

    - Math.max(...values)
      - eg
      - Math.max(...[1,2,333,44])
      - Math.max.apply(this, [1,2,333,44])

13. 获取当前页面的参数

## HTML、CSS

1. 事件代理（委托）是什么

   - 利用事件冒泡，进行事件代理（委托）
2. 如何阻止事件冒泡和默认行为
   - event.stopPropagation()
   - event.preventDefault()
3. 如何减少DOM操作
   - 缓存DOM节点变量
   - 多次DOM操作，合并到一次

## 手写题

1. 手写深度比较，模拟lodash isEqual

   ```javascript
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
   ```

