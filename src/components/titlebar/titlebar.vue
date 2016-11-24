<template>
  <div class="detail-title">
    <div class="detail-line"></div>
    <div class="detail-text">{{title}}</div>
    <div class="detail-line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail-title
    display: flex
    width: 80%
    margin: 28px auto 24px auto
    .detail-line
      flex: 1
      position: relative
      top: -6px
      border-bottom: 1px solid rgba(255,255,255,0.2)
    .detail-text
      padding: 0 12px
      font-size: 14px
      font-weight: 700
</style>
