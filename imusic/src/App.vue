<template>
  <div id="app">
    <setting-sys></setting-sys>
    <router-view/>
  </div>
</template>
<script>
import SettingSys from './components/setting-sys'
export default {
  components: { SettingSys }
}
</script>
<style lang="scss" scoped>
  @import "common/scss/variable.scss";
  #app {
    width: 100%;
    height: 100%;
    background-color: $color-background;
  }
</style>
