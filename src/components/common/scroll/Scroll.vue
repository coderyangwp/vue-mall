<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        MouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      //监听滚动时间
      this.scroll.on('scroll', (position) => {
        this.$emit('scrolling',position)
      })
      //监听上拉加载时间
      this.scroll.on('pullingUp',() => {
        this.$emit('pull-up-load')
      })

    },
    methods: {
      backTop(x,y,time=600){
        this.scroll.scrollTo(x,y,time)
      },
      finishLoad(){
        this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>
