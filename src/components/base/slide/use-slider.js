import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide)
import { onMounted, onUnmounted, ref } from "vue";

export default function useSlider(wrapperRef) {
  const slide = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    const slideVal = slide.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })

    slideVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slide.value.destroy()
  })

  return { slide, currentPageIndex }

}