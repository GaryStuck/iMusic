<template>
  <div>
    <div>
      Ranking
    </div>
  </div>
</template>

<script>
  import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'

  export default {
    name: 'Ranking',
    data () {
      return {
        timeout: 200
      }
    },
    components: {
      VueLazyComponent,
    }
  }
</script>
