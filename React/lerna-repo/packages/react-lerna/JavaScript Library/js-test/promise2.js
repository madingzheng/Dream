// then,catch改变Promise状态

// log 1,3
Promise.resolve().then(() => {
  console.log(1);
}).catch(() => {
  console.log(2);
}).then(() => {
  console.log(3);
})

// log 1,2,3
Promise.resolve().then(() => {
  console.log(1);
  throw new Error('123')
}).catch(() => {
  console.log(2);
}).then(() => {
  console.log(3);
})

//log 1,2,4
Promise.resolve().then(() => {
  console.log(1);
  throw new Error('123')
}).catch(() => {
  console.log(2);
  throw new Error('123')
}).then(() => {
  console.log(3);
}).catch(() => {
  console.log(4);
})