<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll"
            @scrolling="scrolling"
            :proper-type="3"
            :pull-up-load="true"
            @pull-up-load="loadMore">
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommends="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tab-control"
                   :titles="tabList"
                   @click-tab-ctrl="changeCtrl"></tab-control>
      <goods-list class="good-list" :goodList="showGoodsList"/>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabcontrol/TabControl";
  import BackTop from "components/content/backtop/BackTop";
  import GoodsList from "../../components/content/goods/GoodsList";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from './childComps/HomeRecommend'
  import HomeFeature from './childComps/HomeFeature'

  import {getMultidata,getGoods} from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      TabControl,
      BackTop,
      GoodsList,
      HomeSwiper,
      HomeRecommend,
      HomeFeature
    },
    data(){
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page:0, list: []}
        },
        tabList: [
          {title:'流行',name: 'pop'},
          {title: '新款',name: 'new'},
          {title: '精选',name: 'sell'}
        ],
        currentType: 'pop',
        showBackTop: false
      }
    },
    computed: {
      showGoodsList(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getMultidata();
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    },
    methods: {
      changeCtrl(name){
        this.currentType = name;
      },
      backTop(){
        this.$refs.scroll.backTop(0,0)
      },
      scrolling(position){
        this.showBackTop = position.y < -1057?true:false
      },
      loadMore(){
        this.getGoods(this.currentType);
        this.$refs.scroll.finishLoad();
      },
      /**
       * 数据请求
       */
      getMultidata(){
        getMultidata().then(res => {
          this.banner = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      getGoods(type){
        const page = this.goods[type].page + 1;
        getGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page = page
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: #ff8198;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 8;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
