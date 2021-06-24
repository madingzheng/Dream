function multiply(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000);
  })
}

const arr = [1,2,3];

// arr.forEach(async (item) => {
//   const res = await multiply(item)
//   console.log(res);
// })

(async function () {
  for (const iterator of arr) {
    const res = await multiply(iterator)
    console.log(res);
  }
})()