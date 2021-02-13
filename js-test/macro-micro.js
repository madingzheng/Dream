// Promise.resolve().then(() => {
//   const children = document.createElement('p')
//   children.innerText = 'DOM渲染之前'
//   document.body.appendChild(children)
//   alert('promise')
// })

// setTimeout(() => {
//   const children = document.createElement('p')
//   children.innerText = 'DOM渲染之后'
//   document.body.appendChild(children)
//   alert('setTimeout')
// }, 0);

async function foo() {
  const a = await Promise.reject(200)
  console.log(11);
  console.log(a);
}

foo()