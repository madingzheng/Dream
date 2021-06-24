async function sync1() {
  console.log(1);
  await sync2()
  // await 下面的内容都是异步的内容，放入微任务队列，等待call stack为空再去调用
  console.log(3);
}

async function sync2() {
  console.log(2);
}

console.log('script start');
sync1()
console.log('script end');