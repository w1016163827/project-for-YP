function center(el) {
  let scrollH = document.documentElement.clientHeight
  let scrollW = document.documentElement.clientWidth
  let left = (scrollW - el.offsetWidth) / 2
  let top = (scrollH - el.offsetHeight) / 2
  el.parentNode.style.position = 'relative'
  el.style.position = 'absolute'
  el.style.left = left + 'px'
  el.style.top = top + 'px'
}



export default {
  center

}
