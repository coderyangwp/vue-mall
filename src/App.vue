<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"/>
    <router-view/>
  </div>
</template>
<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import "./assets/css/common.less";
  .main-tab-bar{
    z-index: 9;
  }
</style>
