/**
 * 通用事件函数
 * @param {Element} ele DOM结构
 * @param {String} type 事件类型
 * @param {Function}} fn 回调函数
 */
function bindEvent(ele, type, fn) {
  ele.addEventListener(type, fn)
}

const btn = document.getElementById('btn')
const body = document.body

bindEvent(btn, 'click', event => {
  alert('click')
})
bindEvent(body, 'click', event => {
  alert('body')
})
