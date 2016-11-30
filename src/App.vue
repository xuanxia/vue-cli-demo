<template>
  <div>
    <div is="v-header" :seller="seller"></div>
    <div class="tap border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view :seller='seller'></router-view>
    <div class="content">content</div>
  </div>
</template>


<script>
  // TODO >字体
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default{
    data () {
      return {
        seller: {}
      };
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        const responseData = response.body;
        if (responseData.errno === ERR_OK) {
          this.seller = responseData.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/index.styl"
    .tap
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(#000)
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)

</style>

