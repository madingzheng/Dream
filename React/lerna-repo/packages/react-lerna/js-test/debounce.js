/**
 * 函数防抖
 * @param {*} fn 回调函数
 * @param {number} [delay=300]
 * @returns
 */
function myDebounce(fn, delay = 300) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);
  };
}
