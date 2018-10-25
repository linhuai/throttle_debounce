function throttle (fn, delay) {
  let flag = false
  return function () {
    if (flag) return false
    flag = true
    fn()
    setTimeout(() => {
      flag = false
    }, delay)
  }
}

function debounce (fn, delay) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}