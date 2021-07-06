import { createApp } from "vue"
import loading from "./loading.vue"
import { addClass, removeClass } from "@/assets/js/dom.js"

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    el.relativeCls = "g-relative"

    if (binding.value) {
      append(el)
    }

    if (binding.arg) {
      el.instance.setTitle(binding.arg)
    }
  },
  updated(el, binding) {
    if (binding.arg) {
      el.instance.setTitle(binding.arg)
    }
    if (binding.value != binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

//将创建的loading实例添加到自定义指令挂载的el中
function append(el) {
  const style = getComputedStyle(el)
  if (["absolute", "relative", "fixed", "sticky"].indexOf(style.position) == -1) {
    addClass(el, el.relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el) {
  removeClass(el, el.relativeCls)
  el.removeChild(el.instance.$el)
}
//想要设置样式需要通过 元素.style.样式名
export default loadingDirective