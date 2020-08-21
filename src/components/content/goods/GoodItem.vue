<template>
  <div class="good-item">
    <img :src="good.show.img" alt="">
    <div class="good-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    props: {
      good: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .good-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .good-item img {
    width: 100%;
    border-radius: 5px;
  }
  .good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .good-info .price {
    margin-right: 20px;
    color: #ff8198;
  }
  .good-info .collect {
    position: relative;
  }
  .good-info .collect::before {
    content: ' ';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
