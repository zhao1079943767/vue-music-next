<template>
  <div class="singer" v-loading='!singers.length'>
    <index-list :singers="singers"></index-list>
  </div>
</template>

<script>
import { getSingerList } from "@/service/singer"
import indexList from "@/components/base/index-list/index-list"
export default {
  name: "singer",
  data() {
    return {
      singers: []
    }
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
    console.log(this.singers)
  },
  components: {
    indexList
  }
}
</script>

<style lang='scss' scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>