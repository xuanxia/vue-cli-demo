<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount > 0}">
            <span class="icon iconfont icon-cart" :class="{'highlight':totalCount > 0}"></span>
          </div>
          <div class="num" v-show="totalCount > 0">
            {{totalCount}}
          </div>
        </div>
        <div class="price">
            ￥{{totalPrice}}元
        </div>
        <div class="desc">
            另需配送费￥{{deliveryPrice}}元
        </div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      },
      selectFoods: {
        type: Array,
        default () {
          return [{
            price: 10,
            count: 2
          }];
        }
      }
    },
    computed: {
      totalPrice () {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount () {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc () {
        if (this.totalPrice === 0) {
          return ` ￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      payClass () {
        if (this.totalPrice < this.minPrice) {
          console.log(this.totalPrice);
          return 'not-enough';
        } else {
          return 'enough';
        }
      }
    }

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop-cart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      height: 48px
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          vertical-align: top
          top: -10px
          margin 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            text-align: center
            background: #2b343c
            border-radius: 50%
            &.highlight
              background: rgb(0,160,220)
            .icon-cart
              line-height: 44px
              font-size: 24px
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            color: #fff
            background: rgb(240,20,20)
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          box-sizing: border-box
          border-right: 1px solid rgba(255,255,255,.01)
          font-size: 16px
          font-weight: 700
          color: rgba(255,255,255,0.4)
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 13px
          color: rgba(255,255,255,0.4)
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          color: rgba(255,255,255,0.4)
          background: #2b333b
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
</style>
