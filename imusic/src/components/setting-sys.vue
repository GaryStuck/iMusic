<template>
  <div class="sys">
      <sys-header></sys-header>
      <section>
        <recommend></recommend>
      </section>
  </div>
</template>

<script type="application/javascript">
import Left from './sys/left'
import SysHeader from '../views/header/sys-header'
import Recommend from '../views/container/recommend/recommend'
export default {
  name: 'setting-sys',
  // eslint-disable-next-line vue/no-unused-components
  components: { Recommend, SysHeader, Left }
}

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
