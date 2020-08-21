<template>
  <div class="goods-list">
    <good-item class="goods-item" v-for="item in goodList" :key="item.acm" :good="item"></good-item>
  </div>
</template>

<script>
  import GoodItem from "./GoodItem";
  export default {
    name: "GoodsList",
    components: {
      GoodItem
    },
    props: {
      goodList: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
