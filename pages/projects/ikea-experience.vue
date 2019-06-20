<template>
  <WrapProject v-bind="dataToPass">
    <p lg>
      This project rethinks the IKEA shopping experience with an RFID shopping list and improved in-store navigation.
    </p>
    <VideoPlayer sq="true" embedId="cP6-u-eHQ4o" />
  </WrapProject>
</template>

<script>
import WrapProject from '~/components/WrapProject.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
import database from    '~/data/ikea-experience.yml'

export default {
  components: {
    WrapProject,
    VideoPlayer
  },
  data() {
    return { dataToPass: database }
  }
}
</script>

