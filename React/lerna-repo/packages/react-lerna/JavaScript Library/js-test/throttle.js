function throttle(fn, delay = 300) {
  let timer = null
  return function () {
    if (timer) return false
    setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);
  }
}

const input = document.getElementById('input')
input.addEventListener('keyup', throttle((event) => {
  console.log(event);
}, 500))