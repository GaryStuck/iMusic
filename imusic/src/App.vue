<template>
  <div id="sys">
    <setting-sys></setting-sys>
  </div>
</template>
<script>
import SettingSys from './components/setting-sys'
export default {
  components: { SettingSys }
}
document.addEventListener('DOMContentLoad', function () {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>
<style lang="scss" scoped>
  @import "common/scss/variable.scss";
  #app {
    width: 100%;
    height: 100%;
    background-color: $color-background;
  }
</style>
