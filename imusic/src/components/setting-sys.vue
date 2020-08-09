<template>
  <div id="app" :style="{'background-image':'url(' + sysUrl + ')'}">
    <div class="system">
      <div class="systemContainer">
        <sys-header></sys-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
  import SysHeader from '../views/header/sys-header'

  export default {
    name: 'setting-sys',
    data () {
      return {
        sysUrl: require('../assets/images/jordan-steranka-NcF6MVPW644-unsplash.jpg')
      }
    },
    // eslint-disable-next-line vue/no-unused-components
    components: { SysHeader }
  }
</script>

<style lang="scss">
  @import "@/common/scss/mixin.scss";
  @import "./setting-sys.scss";

  #app {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    overflow: hidden;
  }

</style>
