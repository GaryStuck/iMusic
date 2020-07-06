<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <span class="icon iconfont iconall-fill"></span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  @import "common/scss/variable.scss";
  #app {
    width: 100%;
    height: 100%;
    background-color: $color-background;
  }
</style>
