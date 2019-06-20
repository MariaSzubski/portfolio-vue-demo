<template>
  <WrapProject v-bind="dataToPass">
    <p lg>
      Guitar Practice Log is a web app that tracks skill progress and displays song details.
    </p>
    <hgroup>
      <h4>Chord Change Exercises</h4>
    </hgroup>
    <p>
      Chord Change exercises builds muscle memory and increases playing speed. This section of the app includes a JavaScript timer and the ability to track progress. Users save the number of changes changes for each chord group and view trendlines that show progress over time.
    </p>
    <hgroup>
      <h4>Song Tabs</h4>
    </hgroup>
    <p>
      This section displays song chords and strumming patterns. The song list and detail views are built and transitioned using JavaScript and JSON.
    </p>
  </WrapProject>
</template>

<script>
import WrapProject from '~/components/WrapProject.vue'
import database from    '~/data/guitar-practice.yml'

export default {
  components: {
    WrapProject
  },
  data() {
    return { dataToPass: database }
  }
}
</script>

