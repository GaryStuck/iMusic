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
    <router-link tag="div" class="sys-tab-item" to="/ranking">
      <span class="sys-tab-link">
        <span class="iconfont iconfilter-fill">
          <i>排行</i>
        </span>
      </span>
    </router-link>
    <router-link tag="div" class="sys-tab-item" to="/investigation">
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
  name: "sys-header",
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.sysHeader {
  display: flex;
  align-items: center;
  height: px2rem(60);
  font-size: $font-size-medium;
  font-family: "Open Sans";

  .sys-tab-item {
    flex: 1;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: transparent;
    }
    &:visited {
      background-color: #808080;
    }
    &:link {
      background-color: #808080;
    }
    &:active {
      background-color: transparent;
    }
    span {
      color: rgba(244, 244, 245, 0.901961);
    }
    &.router-link-active {
      .sys-tab-link {
        span {
          color: $color-theme;
        }
        color: $color-theme;
        border-bottom: px2rem(2) solid $color-theme;
      }
    }
    .sys-tab-link {
      padding-bottom: px2rem(5);
      color: $color-text-l;
      border-bottom: px2rem(2) solid transparent;
      i {
        padding-left: px2rem(14);
      }
    }
  }
}
</style>
