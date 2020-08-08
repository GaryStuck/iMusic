<template>
  <div class="sysHeader">
    <router-link tag="div" class="sys-tab-item" to="/recommend">
      <span class="sys-tab-link">
        <span class="iconfont iconhot">
          <i>推荐</i>
        </span>
      </span>
    </router-link>
    <router-link tag="div" class="sys-tab-item" to="/singer">
      <span class="sys-tab-link">
        <span class="iconfont iconcertified-supplier-fill">
          <i>歌手</i>
        </span>
      </span>
    </router-link>
    <router-link tag="div" class="sys-tab-item" to="/rank">
      <span class="sys-tab-link">
         <span class="iconfont iconfilter-fill">
          <i>排行</i>
        </span>
      </span>
    </router-link>
    <router-link tag="div" class="sys-tab-item" to="/search">
      <span class="sys-tab-link">
        <span class="iconfont iconsearch">
          <i>搜索</i>
        </span>
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'sys-header'
  }
</script>

<style lang="scss" scoped>
  @import "@/common/scss/variable.scss";

  .sysHeader {
    display: flex;
    align-items: center;
    height: px2rem(60);
    line-height: px2rem(60);
    margin-top: px2rem(60);
    font-size: $font-size-medium;

    .sys-tab-item {
      flex: 1;
      cursor: pointer;
      text-align: center;
      &:hover{
        background-color:transparent;
      }
      &.router-link-active {
        .sys-tab-link {
          color: $color-theme;
          border-bottom: px2rem(2) solid $color-theme;
        }
      }
      .sys-tab-link {
        padding-bottom: px2rem(5);
        color: $color-text-l;
        i{
          padding-left: px2rem(14);
        }
      }
    }
  }
</style>
