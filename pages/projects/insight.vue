<template>
  <WrapProject v-bind="dataToPass">
    <p lg>
      When schools rely on fact memorization to prepare for standardized tests, students lose interest in the subject matter and miss its connection to the real word. This tablet-based alternative tests students’ conceptual knowledge and creative problem solving in an engaging, exploratory format.
    </p>
    <p lg>
      The test questions in the prototype focus on two science topics: the effect of plant roots on erosion and the effect of sunlight on plant growth. Each test question is an interactive piece through which students demonstrate skills and explain their understanding of the subject matter.
    </p>
    <hgroup>
      <h3>Process</h3>
    </hgroup>
    <p>
      To narrow the topic of our project from general education to science-based standardized testing, we visited local science museums and researched educational books and iPad apps We also looked into existing test methods and met with local educators to discuss their experiences teaching young students.
    </p>
    <p>
      The final prototype is a combination of interactive elements and UI animations due to time constraints. It was built in HTML and jQuery, and the wrapped in PhoneGap to create a native iPad app.
    </p>
    <hgroup>
      <h4>User Testing</h4>
    </hgroup>
    <p>
      We conducted a scripted user test with seven local students. Using a paper prototype, we asked the students to complete common tasks within the app. The feedback was mostly positive and we revised the designs based on common problems. Details about our test methods and results can be found on pages 23-28 in the Design Process PDF.
    </p>
  </WrapProject>
</template>

<script>
import WrapProject from '~/components/WrapProject.vue'
import database from    '~/data/insight.yml'

export default {
  components: {
    WrapProject
  },
  data() {
    return { dataToPass: database }
  }
}
</script>

