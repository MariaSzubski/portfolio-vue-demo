<template>
  <WrapProject v-bind="dataToPass">
    <p lg>
      CSS Keyframe animations based on <a href="#" target="_blank">Project</a>
    </p>
    <VideoPlayer sq="true" embedId="cP6-u-eHQ4o" />
  </WrapProject>
</template>

<script>
import WrapProject from '~/components/WrapProject.vue'
import database from    '~/data/spooky.yml'

export default {
  components: {
    WrapProject
  },
  data() {
    return { dataToPass: database }
  }
}
</script>

