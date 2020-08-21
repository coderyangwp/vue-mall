<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{'active':index==activeIndex}" @click="tabClick(index,item)">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){return []}
      }
    },
    data(){
      return {
        activeIndex: 0
      }
    },
    methods: {
      tabClick(index,obj){
        this.activeIndex = index
        this.$emit('click-tab-ctrl',obj.name)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 3px 5px;
  }
  .active span{
    color: #ff8198;
    border-bottom: 3px solid #ff8198;
  }
</style>
