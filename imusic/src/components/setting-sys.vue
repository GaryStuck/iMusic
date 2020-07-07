<template>
  <div class="sys">
    <router-link to="sys/layer">
      <sys-header></sys-header>
    </router-link>
  </div>
</template>

<script type="application/javascript">
import Left from './sys/left'
import SysHeader from '../views/header/sys-header'
export default {
  name: 'setting-sys',
  // eslint-disable-next-line vue/no-unused-components
  components: { SysHeader, Left }
}
document.addEventListener('DOMContentLoad', function () {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
  @import "@/common/scss/mixin.scss";

  .sys{
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: px2rem(1080);
  }
</style>
