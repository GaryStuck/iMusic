<template>
  <div id="sys">
    <setting-sys></setting-sys>
  </div>
</template>
<script>
  import SettingSys from './components/setting-sys'

  export default {
    components: { SettingSys },
  }
  document.addEventListener('DOMContentLoad', function () {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>
<style lang="scss">
  @import "common/scss/variable.scss";

  .chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }

  /* This only changes this particular animation duration */
  .animate__animated.animate__bounce {
    --animate-duration: 2s;
  }

  /* This changes all the animations globaly */
  :root {
    --animate-duration: 800ms;
    --animate-delay: 0.9s;
  }
</style>
